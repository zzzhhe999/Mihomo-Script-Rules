'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');

const EXPORT_SUFFIX = `
;module.exports = { main };
`;

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
    print: console.log,
  };
  vm.createContext(sandbox);
  vm.runInContext(code + EXPORT_SUFFIX, sandbox, { filename: path.basename(abs) });
  return sandbox.module.exports;
}

module.exports = { loadScript };
