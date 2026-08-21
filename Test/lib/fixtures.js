'use strict';

/**
 * 测试数据（单一来源）：
 * - smokeConfig：原 lint.yml 内联冒烟测试的最小用例（含垃圾节点/倍率节点）
 * - makeSampleConfig：复用 generate-yaml.cjs 的示例配置（含各地区节点+倍率+垃圾节点+DNS），
 *   避免测试数据与 YAML 生成数据两处维护导致不同步。
 */
const { makeSampleConfig } = require('../../generate-yaml.cjs');

/** 最小冒烟用例：覆盖正常节点、垃圾节点（官网/过期）、低倍率节点 */
function smokeConfig() {
  return {
    proxies: [
      { name: '🇭🇰 香港01', type: 'vmess', server: '1.1.1.1', port: 443 },
      { name: '🇯🇵 日本01', type: 'vless', server: '2.2.2.1', port: 443 },
      { name: '官网 www.expire.com', type: 'vmess', server: '0.0.0.1', port: 443 },
      { name: '香港 0.5倍', type: 'trojan', server: '1.1.1.2', port: 443 },
    ],
    mode: 'rule',
  };
}

module.exports = { smokeConfig, makeSampleConfig };
