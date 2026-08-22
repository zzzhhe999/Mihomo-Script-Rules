'use strict';

const fs = require('fs');
const path = require('path');
const { loadScript } = require('./loader');

const ROOT = path.resolve(__dirname, '..', '..');
const SCRIPT_FILE = 'Mihomo-Script-Rules.js';

function tryLoadQuickJS() {
  try {
    return require('quickjs-emscripten');
  } catch (e) {
    if (e && e.code === 'MODULE_NOT_FOUND') return null;
    throw e;
  }
}

function run(ctx, code, filename) {
  const res = ctx.evalCode(code, filename);
  if (res.error) {
    const errText = String(ctx.dump(res.error));
    res.error.dispose();
    if (res.value) res.value.dispose();
    return { ok: false, error: errText };
  }
  const value = ctx.dump(res.value);
  res.value.dispose();
  return { ok: true, value };
}

async function runQuickJSChecks({ harness, fixtures }) {
  const quickjs = tryLoadQuickJS();
  if (!quickjs) {
    harness.section('QuickJS 引擎兼容性验证（已跳过）');
    console.log('    ⚠ 未安装 quickjs-emscripten 依赖，已跳过 QuickJS 验证。');
    console.log('      如需启用：npm --prefix Test install');
    return;
  }

  const QuickJS = await quickjs.getQuickJS();
  const code = fs.readFileSync(path.join(ROOT, SCRIPT_FILE), 'utf8');

  harness.section('QuickJS：语法解析 + 顶层执行');
  harness.test(`${SCRIPT_FILE}（${code.split('\n').length} 行）`, () => {
    const ctx = QuickJS.newContext();
    try {
      const r = run(ctx, code, SCRIPT_FILE);
      harness.assert(r.ok, r.error || 'QuickJS 解析/执行失败');
    } finally {
      ctx.dispose();
    }
  });

  harness.section('QuickJS：实际调用 main()');
  const cfgJson = JSON.stringify(fixtures.makeSampleConfig());
  const ctx = QuickJS.newContext();
  let out = null;
  try {
    harness.test(`${SCRIPT_FILE}：main() 正常运行并产出完整配置`, () => {
      const rLoad = run(ctx, code, SCRIPT_FILE);
      harness.assert(rLoad.ok, rLoad.error || '脚本加载失败');

      const driver = `
globalThis.__main = main;
globalThis.__out = JSON.stringify(__main(JSON.parse(${JSON.stringify(cfgJson)})));
`;
      const r = run(ctx, driver, SCRIPT_FILE);
      harness.assert(r.ok, r.error || 'main() 执行失败');

      const outHandle = ctx.getProp(ctx.global, '__out');
      out = JSON.parse(String(ctx.dump(outHandle)));
      outHandle.dispose();

      harness.assert(Array.isArray(out.proxies) && out.proxies.length > 0, 'proxies 缺失或为空');
      harness.assert(Array.isArray(out['proxy-groups']) && out['proxy-groups'].length > 0, 'proxy-groups 缺失或为空');
      harness.assert(Array.isArray(out.rules) && out.rules.length > 0, 'rules 缺失或为空');
      harness.assert(out.dns && out.hosts, 'dns/hosts 缺失');
    });

    harness.test(`${SCRIPT_FILE}：与 Node 引擎输出结构一致`, () => {
      harness.assert(out !== null, '前置 main() 未成功运行，无法对照');
      const nodeOut = loadScript(SCRIPT_FILE).main(fixtures.makeSampleConfig());
      harness.assert(
        out.proxies.length === nodeOut.proxies.length &&
          out['proxy-groups'].length === nodeOut['proxy-groups'].length &&
          out.rules.length === nodeOut.rules.length,
        `QuickJS[${out.proxies.length}/${out['proxy-groups'].length}/${out.rules.length}] vs Node[${nodeOut.proxies.length}/${nodeOut['proxy-groups'].length}/${nodeOut.rules.length}]`,
      );
    });
  } finally {
    ctx.dispose();
  }
}

module.exports = { runQuickJSChecks };
