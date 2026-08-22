'use strict';

const fs = require('fs');
const path = require('path');
const { main: generateYaml } = require('../../scripts/generate-yaml.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const YAML_PATH = path.join(ROOT, 'mihomoConfig.yaml');

const REQUIRED_KEYS = ['proxies:', 'proxy-groups:', 'rules:', 'rule-providers:', 'dns:'];

function runYamlTests({ harness }) {
  harness.section('YAML 生成与完整性校验');

  harness.test('generate-yaml：成功生成 mihomoConfig.yaml', () => {
    generateYaml();
    harness.assert(fs.existsSync(YAML_PATH), `文件不存在: ${YAML_PATH}`);
  });

  harness.test('YAML 文件长度正常（>100 字符）', () => {
    const yaml = fs.readFileSync(YAML_PATH, 'utf8');
    harness.assert(yaml.length > 100, `YAML 文件过短（${yaml.length} 字符），疑似生成失败`);
  });

  harness.test('YAML 包含全部必要字段', () => {
    const yaml = fs.readFileSync(YAML_PATH, 'utf8');
    for (const key of REQUIRED_KEYS) {
      harness.assert(yaml.includes(key), `缺少必要字段: ${key}`);
    }
  });

  harness.test('YAML 非空且以换行结尾', () => {
    const yaml = fs.readFileSync(YAML_PATH, 'utf8');
    harness.assert(yaml.trim().length > 0, 'YAML 内容为空');
    harness.assert(yaml.endsWith('\n'), 'YAML 未以换行结尾（序列化不完整）');
  });
}

module.exports = { runYamlTests };
