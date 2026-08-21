'use strict';

/**
 * 冒烟测试套件：迁移自原 .github/workflows/lint.yml 的内联验证逻辑
 * （node --check 语法检查 + 运行时 mock 验证），并补充脚本核心行为断言：
 * 节点过滤 / 重命名规范化 / 倍率分组 / 地区组生成 / 防御性兜底。
 */

const { loadScript } = require('../lib/loader');
const { smokeConfig, makeSampleConfig } = require('../lib/fixtures');

const SCRIPT_FILE = 'Mihomo-Script-Rules.js';

/** 校验输出对象的基础结构完整性（等价于原 lint.yml 的"输出缺少必要字段"检查） */
function assertOutputStructure(h, out) {
  h.assert(Array.isArray(out.proxies) && out.proxies.length > 0, 'proxies 缺失或为空');
  h.assert(Array.isArray(out['proxy-groups']) && out['proxy-groups'].length > 0, 'proxy-groups 缺失或为空');
  h.assert(Array.isArray(out.rules) && out.rules.length > 0, 'rules 缺失或为空');
  h.assert(out['rule-providers'] && Object.keys(out['rule-providers']).length > 0, 'rule-providers 缺失或为空');
  h.assert(out.dns && typeof out.dns === 'object', 'dns 缺失');
}

/**
 * 冒烟测试入口。
 * @param {object} opts { harness }
 */
function runSmokeTests({ harness }) {
  harness.section('冒烟测试：运行时功能验证');
  const api = loadScript(SCRIPT_FILE);

  // ---------- 最小用例（等价于原 lint.yml 的 4 节点 mock） ----------
  harness.test('main(smokeConfig)：输出结构完整', () => {
    const out = api.main(smokeConfig());
    assertOutputStructure(harness, out);
    // 与原 lint.yml 一致：验证输出规模
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

  // ---------- 全量用例（复用 generate-yaml.cjs 的示例配置） ----------
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

  // ---------- 防御性（对应 README 5.10 防崩溃兜底） ----------
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
