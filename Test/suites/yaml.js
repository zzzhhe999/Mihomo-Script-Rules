'use strict';

/**
 * YAML 生成与完整性校验套件：
 * 复用 generate-yaml.cjs 的生成逻辑（单一来源，避免重复维护），
 * 生成 Config/mihomoConfig.yaml 后校验文件长度与必要字段。
 * 对应原 lint.yml 的"生成 mihomoConfig.yaml"+"YAML 语法校验"两步。
 */

const fs = require('fs');
const path = require('path');
const { main: generateYaml } = require('../../generate-yaml.cjs');

const ROOT = path.resolve(__dirname, '..', '..');
const YAML_PATH = path.join(ROOT, 'Config', 'mihomoConfig.yaml');

// 与脚本输出一一对应的必要字段（原 lint.yml 校验清单）
const REQUIRED_KEYS = ['proxies:', 'proxy-groups:', 'rules:', 'rule-providers:', 'dns:'];

/**
 * YAML 套件入口。
 * @param {object} opts { harness }
 */
function runYamlTests({ harness }) {
  harness.section('YAML 生成与完整性校验');

  harness.test('generate-yaml：成功生成 Config/mihomoConfig.yaml', () => {
    generateYaml(); // 复用 generate-yaml.cjs 的 main()，写入 Config/mihomoConfig.yaml
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
