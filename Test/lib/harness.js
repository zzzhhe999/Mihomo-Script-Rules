'use strict';

const util = require('util');
const isDeepStrictEqual = util.isDeepStrictEqual;

function fmt(value) {
  if (typeof value === 'string') return `'${value}'`;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

/**
 * 轻量测试执行器：记录通过/失败、输出 ✓/✗，并汇总打印到控制台。
 * （借鉴自 MyClash 的 Test/lib/harness.js，MIT 许可）
 */
class Harness {
  constructor(label = '测试') {
    this.label = label;
    this.passed = 0;
    this.failed = 0;
    this.failures = [];
    this.currentSection = '';
  }

  section(title) {
    this.currentSection = title;
    console.log(`\n  ▸ ${title}`);
  }

  test(name, fn) {
    try {
      fn();
      this.passed += 1;
      console.log(`    ✓ ${name}`);
    } catch (err) {
      this.failed += 1;
      this.failures.push({ section: this.currentSection, name, error: err });
      console.log(`    ✗ ${name}`);
      console.log(`        └ 失败: ${err.message}`);
    }
  }

  assert(cond, msg = '断言失败') {
    if (!cond) throw new Error(msg);
  }

  assertEqual(actual, expected, msg = '值不相等') {
    if (actual !== expected) {
      throw new Error(`${msg} | 期望 ${fmt(expected)}，实际 ${fmt(actual)}`);
    }
  }

  assertDeep(actual, expected, msg = '深度不相等') {
    // 脚本在 vm 沙箱中执行，其产出的对象属于不同 V8 realm、原型不同，
    // isDeepStrictEqual 会误判；先 JSON 归一化再比较即可忽略原型差异。
    let a, e;
    try {
      a = JSON.parse(JSON.stringify(actual));
      e = JSON.parse(JSON.stringify(expected));
    } catch {
      a = actual;
      e = expected;
    }
    if (!isDeepStrictEqual(a, e)) {
      throw new Error(`${msg} | 期望 ${fmt(expected)}，实际 ${fmt(actual)}`);
    }
  }

  assertThrows(fn, pattern, msg = '') {
    try {
      fn();
    } catch (err) {
      if (pattern && !pattern.test(String(err.message))) {
        throw new Error(`${msg} | 异常信息不匹配，实际: ${err.message}`);
      }
      return;
    }
    throw new Error(`${msg} | 未抛出预期异常`);
  }

  summary() {
    console.log(`\n  ── ${this.label} 测试结果 ──`);
    console.log(`     通过: ${this.passed}  失败: ${this.failed}`);
    if (this.failures.length) {
      console.log(`     失败用例:`);
      for (const f of this.failures) {
        console.log(`       ✗ [${f.section}] ${f.name} → ${f.error.message}`);
      }
    }
    return { passed: this.passed, failed: this.failed };
  }
}

module.exports = { Harness };
