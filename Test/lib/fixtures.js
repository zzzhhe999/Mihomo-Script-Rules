'use strict';

const { makeSampleConfig } = require('../../scripts/generate-yaml.cjs');

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
