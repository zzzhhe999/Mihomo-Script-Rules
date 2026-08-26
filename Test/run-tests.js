'use strict';

const { Harness } = require('./lib/harness');
const { runSmokeTests } = require('./suites/smoke');
const { runES2020Checks } = require('./lib/es2020-check');
const { runQuickJSChecks } = require('./lib/quickjs-check');

const ARGS = new Set(process.argv.slice(2));
const runAll = !ARGS.has('--node') && !ARGS.has('--es2020') && !ARGS.has('--quickjs');
const shouldRunNode = runAll || ARGS.has('--node');
const shouldRunES2020 = runAll || ARGS.has('--es2020');
const shouldRunQuickJS = runAll || ARGS.has('--quickjs');

async function main() {
  console.log('Mihomo-Script-Rules 测试套件');
  console.log('='.repeat(64));
  let totalPassed = 0;
  let totalFailed = 0;

  if (shouldRunNode) {
    const h = new Harness('冒烟测试');
    runSmokeTests({ harness: h });
    const s = h.summary();
    totalPassed += s.passed;
    totalFailed += s.failed;
  }

  if (shouldRunES2020) {
    const h = new Harness('ES2020 兼容性检查');
    runES2020Checks({ harness: h });
    const s = h.summary();
    totalPassed += s.passed;
    totalFailed += s.failed;
  }

  if (shouldRunQuickJS) {
    const h = new Harness('QuickJS 引擎验证');
    await runQuickJSChecks({ harness: h, fixtures: require('./lib/fixtures') });
    const s = h.summary();
    totalPassed += s.passed;
    totalFailed += s.failed;
  }

  console.log(`\n${'='.repeat(64)}`);
  console.log(`  总计: 通过 ${totalPassed} 项，失败 ${totalFailed} 项`);
  console.log(`${'='.repeat(64)}`);

  if (totalFailed > 0) {
    console.log('\n有失败用例，请查看上方 ✗ 标记的详细信息。');
  } else {
    console.log('\n全部测试通过 ✅');
  }

  process.exit(totalFailed > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(`\n测试运行异常: ${err && err.stack ? err.stack : err}`);
  process.exit(1);
});
