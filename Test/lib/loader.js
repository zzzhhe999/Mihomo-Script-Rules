'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');

/**
 * 覆写脚本本身没有模块导出（是给 mihomo 的 QuickJS 运行时执行的）。
 * 这里在 vm 沙箱中执行脚本，并在末尾追加一条导出语句，
 * 从而把 main 暴露给测试使用。整个过程不改动磁盘上的原脚本。
 *
 * 注意：脚本内部用 print() 输出日志（QuickJS 全局函数），Node 无此全局，
 * 需在沙箱中注入 console.log 作为 polyfill（与 generate-yaml.cjs 的做法一致）。
 */
const EXPORT_SUFFIX = `
;module.exports = { main };
`;

/**
 * 加载覆写脚本，返回其导出的符号。
 * @param {string} scriptPath 相对仓库根目录的脚本路径，如 'Mihomo-Script-Rules.js'
 */
function loadScript(scriptPath) {
  const abs = path.resolve(ROOT, scriptPath);
  const code = fs.readFileSync(abs, 'utf8');

  const sandbox = {
    module: { exports: {} },
    console,
    process,
    Buffer,
    URL,
    URLSearchParams,
    setTimeout,
    clearTimeout,
    print: console.log, // QuickJS 的 print() polyfill
  };
  vm.createContext(sandbox);
  vm.runInContext(code + EXPORT_SUFFIX, sandbox, { filename: path.basename(abs) });
  return sandbox.module.exports;
}

module.exports = { loadScript };
