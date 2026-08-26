'use strict';

function makeSampleConfig() {
  return {
    proxies: [
      { name: '🇭🇰 香港节点01', type: 'vmess', server: '1.1.1.1', port: 443 },
      { name: '香港 IEPL 01', type: 'vless', server: '1.1.1.2', port: 443 },
      { name: 'HK-Premium-01', type: 'trojan', server: '1.1.1.3', port: 443 },
      { name: '🇯🇵 日本 东京 01', type: 'vmess', server: '2.2.2.1', port: 443 },
      { name: 'JP-东京02', type: 'hysteria2', server: '2.2.2.2', port: 443 },
      { name: '🇺🇸 美国洛杉矶 01', type: 'tuic', server: '3.3.3.1', port: 443 },
      { name: 'US-西雅图', type: 'vmess', server: '3.3.3.2', port: 443 },
      { name: '🇸🇬 Singapore 01', type: 'vless', server: '4.4.4.1', port: 443 },
      { name: '🇹🇼 台湾台北', type: 'trojan', server: '5.5.5.1', port: 443 },
      { name: '🇰🇷 韩国首尔', type: 'vmess', server: '6.6.6.1', port: 443 },
      { name: '🇬🇧 英国伦敦', type: 'vless', server: '7.7.7.1', port: 443 },
      { name: '🇩🇪 德国法兰克福', type: 'trojan', server: '8.8.8.1', port: 443 },
      { name: '🇫🇷 法国巴黎', type: 'vmess', server: '9.9.9.1', port: 443 },
      { name: '🇨🇦 加拿大温哥华', type: 'hysteria2', server: '10.10.10.1', port: 443 },
      { name: '🇦🇺 澳大利亚悉尼', type: 'tuic', server: '11.11.11.1', port: 443 },
      { name: '🇮🇳 印度孟买', type: 'vmess', server: '12.12.12.1', port: 443 },
      { name: '🇹🇷 土耳其伊斯坦布尔', type: 'vless', server: '13.13.13.1', port: 443 },
      { name: '🇧🇷 巴西圣保罗', type: 'trojan', server: '14.14.14.1', port: 443 },
      { name: '🇦🇷 阿根廷', type: 'vmess', server: '15.15.15.1', port: 443 },
      { name: '🇷🇺 俄罗斯莫斯科', type: 'vless', server: '16.16.16.1', port: 443 },
      { name: '香港 0.5倍 低倍率', type: 'vmess', server: '1.1.1.4', port: 443 },
      { name: '日本 3x 高倍', type: 'vless', server: '2.2.2.3', port: 443 },
      { name: '美国 ×5 倍率', type: 'trojan', server: '3.3.3.3', port: 443 },
      { name: '新加坡 省流 下载', type: 'vmess', server: '4.4.4.2', port: 443 },
      { name: 'Random Node 01', type: 'vmess', server: '20.20.20.1', port: 443 },
      { name: '某地节点', type: 'vless', server: '20.20.20.2', port: 443 },
      { name: '剩余流量100G', type: 'vmess', server: '0.0.0.1', port: 443 },
      { name: '官网 www.example.com', type: 'vmess', server: '0.0.0.2', port: 443 },
      { name: '🇯🇵 日本 hysteria2', type: 'hysteria2', server: '2.2.2.4', port: 443 },
    ],
    mode: 'rule',

    dns: {
      nameserver: ['https://my-private-dns.example.com/dns-query'],
      'proxy-server-nameserver': ['tls://1.2.3.4:853'],
      'nameserver-policy': {
        '1.1.1.1': ['https://dns.alidns.com/dns-query#Direct'],
      },
      hosts: {
        '1.1.1.1': 'my-proxy.example.com',
      },
    },
  };
}

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
