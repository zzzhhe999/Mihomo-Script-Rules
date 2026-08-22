'use strict';

const { loadScript } = require('../lib/loader');
const { smokeConfig, makeSampleConfig } = require('../lib/fixtures');

const SCRIPT_FILE = 'Mihomo-Script-Rules.js';

function assertOutputStructure(h, out) {
  h.assert(Array.isArray(out.proxies) && out.proxies.length > 0, 'proxies 缺失或为空');
  h.assert(Array.isArray(out['proxy-groups']) && out['proxy-groups'].length > 0, 'proxy-groups 缺失或为空');
  h.assert(Array.isArray(out.rules) && out.rules.length > 0, 'rules 缺失或为空');
  h.assert(out['rule-providers'] && Object.keys(out['rule-providers']).length > 0, 'rule-providers 缺失或为空');
  h.assert(out.dns && typeof out.dns === 'object', 'dns 缺失');
}

function runSmokeTests({ harness }) {
  harness.section('冒烟测试：运行时功能验证');
  const api = loadScript(SCRIPT_FILE);

  harness.test('main(smokeConfig)：输出结构完整', () => {
    const out = api.main(smokeConfig());
    assertOutputStructure(harness, out);

    harness.assert(out.proxies.length > 0 && out['proxy-groups'].length > 0 && out.rules.length > 0, '输出为空');
  });

  harness.test('垃圾节点被过滤（官网/过期/流量节点）', () => {
    const out = api.main(smokeConfig());
    const dirty = out.proxies.filter((p) => /官网|剩余|流量|到期|过期|expire/i.test(p.name));
    harness.assert(dirty.length === 0, `垃圾节点未被过滤: ${dirty.map((p) => p.name).join(', ')}`);
  });

  harness.test('节点名规范化（中文名 → 地区缩写）', () => {
    const out = api.main(smokeConfig());
    const names = out.proxies.map((p) => p.name);
    harness.assert(names.includes('🇭🇰 HK 01'), `未生成 HK 01，实际: ${names.join(', ')}`);
    harness.assert(names.includes('🇯🇵 JP 01'), `未生成 JP 01，实际: ${names.join(', ')}`);
  });

  harness.test('低倍率节点被识别并重命名', () => {
    const out = api.main(smokeConfig());
    const low = out.proxies.find((p) => p.name.includes('0.5x'));
    harness.assert(!!low, '未识别 0.5倍 低倍率节点');
  });

  harness.test('main(makeSampleConfig)：输出结构完整', () => {
    const out = api.main(makeSampleConfig());
    assertOutputStructure(harness, out);
  });

  harness.test('全量用例：垃圾节点全部过滤', () => {
    const out = api.main(makeSampleConfig());
    const dirty = out.proxies.filter((p) => /剩余|官网|流量|到期|过期|expire/i.test(p.name));
    harness.assert(dirty.length === 0, `垃圾节点未被过滤: ${dirty.map((p) => p.name).join(', ')}`);
  });

  harness.test('全量用例：生成高/低倍率策略组', () => {
    const out = api.main(makeSampleConfig());
    const groupNames = out['proxy-groups'].map((g) => g.name);
    harness.assert(groupNames.includes('Low-Rate'), '缺少 Low-Rate 策略组');
    harness.assert(groupNames.includes('High-Rate'), '缺少 High-Rate 策略组');
  });

  harness.test('全量用例：生成地区策略组', () => {
    const out = api.main(makeSampleConfig());
    const groupNames = out['proxy-groups'].map((g) => g.name);
    for (const region of ['HK', 'JP', 'US', 'SG']) {
      harness.assert(groupNames.includes(region), `缺少 ${region} 地区策略组`);
    }
  });

  harness.test('全量用例：规则以 MATCH 收尾（兜底分流完整）', () => {
    const out = api.main(makeSampleConfig());
    const last = out.rules[out.rules.length - 1];
    harness.assert(typeof last === 'string' && last.startsWith('MATCH,'), `规则未以 MATCH 收尾: ${last}`);
  });

  harness.test('防御性：main(null) 不抛异常', () => {
    const out = api.main(null);
    harness.assert(Array.isArray(out.proxies) && out.proxies.length === 0, '应为空配置兜底');
  });

  harness.test('防御性：main(undefined) 不抛异常', () => {
    const out = api.main(undefined);
    harness.assert(Array.isArray(out.proxies) && out.proxies.length === 0, '应为空配置兜底');
  });

  harness.test('防御性：main(非对象) 不抛异常', () => {
    for (const bad of ['abc', 42, [], true]) {
      const out = api.main(bad);
      harness.assert(Array.isArray(out.proxies), '应为数组兜底');
    }
  });

  harness.test('防御性：main({}) / main({proxies:null}) 不抛异常', () => {
    const out1 = api.main({});
    const out2 = api.main({ proxies: null });
    harness.assert(Array.isArray(out1.proxies) && out1.proxies.length === 0, '空对象应兜底');
    harness.assert(Array.isArray(out2.proxies) && out2.proxies.length === 0, 'proxies:null 应兜底');
  });
}

module.exports = { runSmokeTests };
