'use strict';

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');

const SCRIPT_FILE = 'Mihomo-Script-Rules.js';

const GLOBAL_APIS = ['WeakRef', 'FinalizationRegistry', 'AggregateError', 'structuredClone'];

const MEMBER_APIS = [
  'replaceAll',
  'hasOwn',
  'supportedValuesOf',
  'findLast',
  'findLastIndex',
  'toReversed',
  'toSorted',
  'toSpliced',
  'fromAsync',
  'groupBy',
  'withResolvers',
  'waitAsync',
  'transfer',
  'transferToFixedLength',
  'isWellFormed',
  'toWellFormed',
  'getOrInsert',
  'getOrInsertComputed',
  'symmetricDifference',
  'isSubsetOf',
  'isSupersetOf',
  'isDisjointFrom',
  'escape',
];

const CALL_ONLY_APIS = ['at', 'union', 'intersection', 'difference', 'try'];

function tryLoadEspree() {
  try {
    return require('espree');
  } catch (e) {
    if (e && e.code === 'MODULE_NOT_FOUND') return null;
    throw e;
  }
}

function collectUsages(ast) {
  const idUsages = new Set();
  const memberNames = new Set();
  const memberCalls = new Set();

  (function walk(node) {
    if (!node || typeof node.type !== 'string') return;
    switch (node.type) {
      case 'CallExpression':
        if (node.callee.type === 'Identifier') {
          idUsages.add(node.callee.name);
        } else if (node.callee.type === 'MemberExpression' && node.callee.property.type === 'Identifier') {
          memberCalls.add(node.callee.property.name);
          memberNames.add(node.callee.property.name);
        }
        break;
      case 'NewExpression':
        if (node.callee.type === 'Identifier') idUsages.add(node.callee.name);
        break;
      case 'MemberExpression':
        if (node.property.type === 'Identifier') memberNames.add(node.property.name);
        break;
      default:
        break;
    }
    for (const key of Object.keys(node)) {
      if (key === 'loc' || key === 'range' || key === 'start' || key === 'end') continue;
      const child = node[key];
      if (Array.isArray(child)) {
        for (const c of child) walk(c);
      } else if (child && typeof child.type === 'string') {
        walk(child);
      }
    }
  })(ast);

  return { idUsages, memberNames, memberCalls };
}

function findApiViolations(ast) {
  const { idUsages, memberNames, memberCalls } = collectUsages(ast);
  const violations = [];
  for (const name of GLOBAL_APIS) {
    if (idUsages.has(name)) violations.push(`${name}（ES2021+ 全局 API）`);
  }
  for (const name of MEMBER_APIS) {
    if (memberNames.has(name)) violations.push(`xxx.${name}(...)（ES2021+ 成员方法）`);
  }
  for (const name of CALL_ONLY_APIS) {
    if (memberCalls.has(name)) violations.push(`xxx.${name}(...)（ES2021+ 成员方法）`);
  }
  return violations;
}

function runES2020Checks({ harness }) {
  const espree = tryLoadEspree();
  if (!espree) {
    harness.section('ES2020 兼容性检查（已跳过）');
    console.log('    ⚠ 未安装 espree 依赖，已跳过 ES2020 兼容性检查。');
    console.log('      如需启用：npm --prefix Test install');
    return;
  }

  harness.section('ES2020 兼容性检查');
  const code = fs.readFileSync(path.join(ROOT, SCRIPT_FILE), 'utf8');
  let ast = null;

  harness.test(`${SCRIPT_FILE}：语法不超出 ES2020`, () => {
    try {
      ast = espree.parse(code, { ecmaVersion: 2020, sourceType: 'script', loc: true });
    } catch (e) {
      harness.assert(false, `第 ${e.lineNumber} 行: ${e.message}`);
    }
  });

  harness.test(`${SCRIPT_FILE}：未使用 ES2021+ 内置 API`, () => {
    harness.assert(ast !== null, '语法解析失败（超出 ES2020），跳过 API 检查');
    const violations = findApiViolations(ast);
    harness.assert(violations.length === 0, `检测到 ${violations.join('、')}`);
  });
}

module.exports = { runES2020Checks };
