const ruleOptionsEnable = {
  ai: true,
  youtube: true,
  googlefcm: true,
  google: true,
  github: true,
  microsoft: true,
  apple: true,
  telegram: true,
  twitter: true,
  instagram: true,
  steam: true,
  cloudflare: true,
  spotify: true,
  tiktok: true,
  netflix: true,
  adblock: true,
};

const regionDefinitionsEnable = {
  HK: true,
  JP: true,
  US: true,
  SG: true,
  TW: true,
  KR: true,
  UK: true,
  DE: true,
  FR: true,
  CA: true,
  AU: true,
  IN: true,
  TR: true,
  BR: true,
  AR: true,
  RU: true,
  'Low-Rate': true,
  'High-Rate': true,
};

const excludeFilterEnable = true;
const excludeFilter =
  /群|返利|循环|官[网址]|客服|网站|网址|获取|订阅|流量|到期|机场|下次|备用|过期|已用|联系|邮箱|工单|通知|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|https?:\/\/|www\.|\.com(?:$|[^a-zA-Z0-9])/u;

const tunEnable = false;
const quicEnable = true;

const quicRules = [
  'AND,((NETWORK,udp),(DST-PORT,443),(OR,((GEOSITE,geolocation-cn),(GEOIP,cn,no-resolve)))),Direct',
  'AND,((NETWORK,udp),(DST-PORT,443)),QUIC',
];

const rules = [
  'DOMAIN-KEYWORD,mcdn.bili,REJECT',
  'GEOSITE,private,Direct',
  'GEOIP,private,Direct,no-resolve',
  'DOMAIN-SUFFIX,ibytedtos.com,Direct',
  'DOMAIN-SUFFIX,bytecdn.cn,Direct',
  'DOMAIN-SUFFIX,snssdk.com,Direct',
  'DOMAIN-SUFFIX,iesdouyin.com,Direct',
  'DOMAIN-SUFFIX,pstatp.com,Direct',
  'DOMAIN-KEYWORD,douyin,Direct',
  'RULE-SET,DownloadApps,Direct',
  'GEOSITE,category-games@cn,Direct',
  'GEOSITE,nvidia@cn,Direct',
  'GEOSITE,microsoft@cn,Direct',
  'GEOSITE,cloudflare@cn,Direct',
  'GEOSITE,apple@cn,Direct',
  'DOMAIN,fsend.cn,Direct',
  'DOMAIN-SUFFIX,jlc-jdgf.com,Direct',
];

const NODE_RATE_LOW = 'Low-Rate';
const NODE_RATE_HIGH = 'High-Rate';

const regionDefinitions = [
  {
    name: 'HK',
    regex: /🇭🇰|香港|港(?!口)|\bHK\b|hong\s*kong/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png',
    flag: '🇭🇰',
  },
  {
    name: 'JP',
    regex: /🇯🇵|日本|东京|大阪|埼玉|\bJP\b|japan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png',
    flag: '🇯🇵',
  },
  {
    name: 'US',
    regex: /🇺🇸|美国|美区|洛杉矶|圣何塞|西雅图|纽约|芝加哥|达拉斯|\bUS\b|america|united\s*states/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png',
    flag: '🇺🇸',
  },
  {
    name: 'SG',
    regex: /🇸🇬|新加坡|狮城|\bSG\b|singapore/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png',
    flag: '🇸🇬',
  },
  {
    name: 'TW',
    regex: /🇹🇼|台湾|台北|高雄|\bTW\b|taiwan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png',
    flag: '🇹🇼',
  },
  {
    name: 'KR',
    regex: /🇰🇷|韩国|首尔|春川|\bKR\b|korea/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png',
    flag: '🇰🇷',
  },
  {
    name: 'UK',
    regex: /🇬🇧|英国|伦敦|\bUK\b|\bGB\b|britain|united\s*kingdom/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png',
    flag: '🇬🇧',
  },
  {
    name: 'DE',
    regex: /🇩🇪|德国|法兰克福|柏林|\bDE\b|germany/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png',
    flag: '🇩🇪',
  },
  {
    name: 'FR',
    regex: /🇫🇷|法国|巴黎|\bFR\b|france/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png',
    flag: '🇫🇷',
  },
  {
    name: 'CA',
    regex: /🇨🇦|加拿大|多伦多|温哥华|蒙特利尔|\bCA\b|canada/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Canada.png',
    flag: '🇨🇦',
  },
  {
    name: 'AU',
    regex: /🇦🇺|澳大利亚|澳洲|悉尼|墨尔本|\bAU\b|australia/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Australia.png',
    flag: '🇦🇺',
  },
  {
    name: 'IN',
    regex: /🇮🇳|印度|孟买|金奈|\bIN\b|india/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/India.png',
    flag: '🇮🇳',
  },
  {
    name: 'TR',
    regex: /🇹🇷|土耳其|伊斯坦布尔|\bTR\b|turkey/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png',
    flag: '🇹🇷',
  },
  {
    name: 'BR',
    regex: /🇧🇷|巴西|圣保罗|\bBR\b|brazil/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Brazil.png',
    flag: '🇧🇷',
  },
  {
    name: 'AR',
    regex: /🇦🇷|阿根廷|布宜诺斯艾利斯|\bAR\b|argentina/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Argentina.png',
    flag: '🇦🇷',
  },
  {
    name: 'RU',
    regex: /🇷🇺|俄罗斯|莫斯科|圣彼得堡|\bRU\b|russia/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Russia.png',
    flag: '🇷🇺',
  },
  {
    name: NODE_RATE_LOW,
    regex:
      /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:低倍|低倍率|省流|下载|(?:^|[^\d])0\.[0-5])/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png',
  },
  {
    name: NODE_RATE_HIGH,
    regex:
      /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:[*×xX✕✖⨉]\s*(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?|(?:^|[^\d.])(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?\s*(?:倍|倍率|[*×xX✕✖⨉]))/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png',
  },
];

const ruleProviderFormatMrs = { format: 'mrs' };

const ruleProviderCommonDomain = {
  type: 'http',
  interval: 86400,
  behavior: 'domain',
};

const ruleProviderCommonClassical = {
  type: 'http',
  interval: 86400,
  behavior: 'classical',
};

const baseRuleProviders = {
  DownloadApps: {
    ...ruleProviderCommonClassical,
    format: 'text',
    url: 'https://fastly.jsdelivr.net/gh/AIsouler/MyClash@main/Rules/DownloadApps.txt',
    path: './ruleset/DownloadApps.txt',
  },
  fakeip_filter: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/fakeip-filter.mrs',
    path: './ruleset/fakeip-filter.mrs',
  },
  cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/direct.mrs',
    path: './ruleset/cn.mrs',
    'path-in-bundle': 'geo/geosite/cn.mrs',
  },
};

const groupBaseOption = {
  interval: 180,
  timeout: 3000,
  url: 'https://cp.cloudflare.com/generate_204',
  lazy: true,
  'max-failed-times': 3,
};

const selectBaseOption = {
  type: 'select',
  hidden: false,
};

const urlTestBaseOption = {
  ...groupBaseOption,
  type: 'url-test',
  tolerance: 50,
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Auto.png',
  hidden: true,
};

const loadBalanceBaseOption = {
  ...groupBaseOption,
  type: 'load-balance',
  strategy: 'sticky-sessions',
  'max-failed-times': 1,
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Round_Robin_1.png',
  hidden: true,
};

const extractMultiplier = (name, isHigh) => {
  if (typeof name !== 'string') return '';
  if (!isHigh) {
    const match = name.match(/(?:^|[^\d])(0\.[0-5])\s*(?:倍|倍率|[xX×])?/u);
    if (match !== null) return `${match[1]}x`;
    const lowMatch = name.match(/省流|下载/);
    return lowMatch !== null ? lowMatch[0] : 'Low';
  }
  const match = name.match(/(\d+(?:\.\d+)?)\s*[xX×倍]/u) || name.match(/[×*xX]\s*(\d+(?:\.\d+)?)/u);
  return match !== null ? `${match[1]}x` : '';
};

function matchDomainPattern(pattern, domains) {
  if (typeof pattern !== 'string') return false;
  pattern = pattern.toLowerCase();

  if (!pattern.includes('*') && !pattern.startsWith('+.') && !pattern.startsWith('.')) {
    return domains.has(pattern);
  }

  if (pattern.startsWith('+.')) {
    const suffix = pattern.slice(2);
    for (const domain of domains) {
      if (domain === suffix || domain.endsWith('.' + suffix)) {
        return true;
      }
    }
    return false;
  }

  if (pattern.startsWith('.')) {
    const suffix = pattern.slice(1);
    for (const domain of domains) {
      if (domain !== suffix && domain.endsWith('.' + suffix)) {
        return true;
      }
    }
    return false;
  }

  const patternParts = pattern.split('.');
  for (const domain of domains) {
    const domainParts = domain.split('.');
    if (patternParts.length !== domainParts.length) continue;
    let matched = true;
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] !== '*' && patternParts[i] !== domainParts[i]) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }

  return false;
}

const serviceConfigs = [
  {
    key: 'adblock',
    name: 'AdBlock',
    proxyMode: 'reject',
    providers: {
      adblockmihomolite: {
        type: 'http',
        interval: 86400,
        behavior: 'domain',
        format: 'mrs',
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
        path: './ruleset/adblockmihomolite.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png',
    rules: ['RULE-SET,adblockmihomolite,AdBlock'],
  },
  {
    key: 'ai',
    name: 'AI',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png',
    rules: ['GEOSITE,openai,AI', 'GEOSITE,anthropic,AI'],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png',
    rules: ['GEOSITE,youtube,YouTube'],
  },
  {
    key: 'googlefcm',
    name: 'FCM',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png',
    rules: ['GEOSITE,googlefcm,FCM'],
  },
  {
    key: 'google',
    name: 'Google',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png',
    rules: ['GEOSITE,google,Google', 'GEOIP,google,Google,no-resolve'],
  },
  {
    key: 'github',
    name: 'GitHub',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png',
    rules: ['GEOSITE,github,GitHub'],
  },
  {
    key: 'microsoft',
    name: 'Microsoft',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png',
    rules: ['GEOSITE,microsoft,Microsoft'],
  },
  {
    key: 'apple',
    name: 'Apple',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png',
    rules: ['GEOSITE,apple,Apple'],
  },
  {
    key: 'telegram',
    name: 'Telegram',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png',
    rules: ['GEOSITE,telegram,Telegram', 'GEOIP,telegram,Telegram,no-resolve'],
  },
  {
    key: 'cloudflare',
    name: 'Cloudflare',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png',
    rules: ['GEOSITE,cloudflare,Cloudflare', 'GEOIP,cloudflare,Cloudflare,no-resolve'],
  },
  {
    key: 'steam',
    name: 'Steam',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png',
    rules: ['GEOSITE,steam,Steam'],
  },
  {
    key: 'twitter',
    name: 'X',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/X.png',
    rules: ['GEOSITE,twitter,X', 'GEOIP,twitter,X,no-resolve'],
  },
  {
    key: 'instagram',
    name: 'Instagram',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Instagram.png',
    rules: ['GEOSITE,instagram,Instagram'],
  },
  {
    key: 'spotify',
    name: 'Spotify',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png',
    rules: ['GEOSITE,spotify,Spotify'],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png',
    rules: ['GEOSITE,tiktok,TikTok'],
  },
  {
    key: 'netflix',
    name: 'Netflix',
    providers: {},
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png',
    rules: ['GEOSITE,netflix,Netflix', 'GEOIP,netflix,Netflix,no-resolve'],
  },
];

const createRegionGroup = (name, icon, proxies) => {
  const autoTestName = `${name}-Auto`;
  const loadBalanceName = `${name}-Balance`;
  return [
    { ...selectBaseOption, name, icon, proxies: [autoTestName, loadBalanceName, ...proxies] },
    { ...urlTestBaseOption, name: autoTestName, proxies },
    { ...loadBalanceBaseOption, name: loadBalanceName, proxies },
  ];
};

const FINGERPRINT_SUPPORTED = new Set(['vmess', 'vless', 'trojan', 'anytls']);

function buildNetworkConfig(finalRuleProviders, tunEnable, privateDNS, proxyServerPolicy, proxyServerHosts) {
  const chinaDNS = ['https://dns.alidns.com/dns-query#Direct', 'https://doh.pub/dns-query#Direct'];
  const foreignDNS = ['https://dns.google/dns-query#Default', 'https://dns.cloudflare.com/dns-query#Default'];

  return {
    hosts: {
      'dns.alidns.com': ['223.5.5.5', '223.6.6.6', '2400:3200::1', '2400:3200:baba::1'],
      'doh.pub': ['1.12.12.12', '120.53.53.53'],
      'dns.cloudflare.com': ['1.1.1.1', '1.0.0.1'],
      'dns.google': ['8.8.8.8', '8.8.4.4', '2001:4860:4860::8888', '2001:4860:4860::8844'],
      'cn.bing.com': 'global.bing.com',
      'services.googleapis.cn': ['services.googleapis.com'],
      '+.mcdn.bilivideo.com': ['0.0.0.0'],
      '+.mcdn.bilivideo.cn': ['0.0.0.0'],
      '+.edge.mountaintoys.cn': ['0.0.0.0'],
      ...proxyServerHosts,
    },
    ntp: {
      enable: true,
      'write-to-system': false,
      server: 'ntp.aliyun.com',
      port: 123,
      interval: 30,
      'dialer-proxy': 'DIRECT',
    },
    sniffer: {
      enable: true,
      'force-dns-mapping': true,
      'parse-pure-ip': true,
      'override-destination': true,
      sniff: {
        HTTP: { ports: [80, '8080-8880'] },
        TLS: { ports: [443, 8443] },
        QUIC: { ports: [443, 8443] },
      },
      'skip-domain': ['+.mijia.com', '+.push.apple.com', 'gs.apple.com', 'gsp-ssl.ls.apple.com', '+.lan', '+.local'],
    },
    dns: {
      enable: true,
      ipv6: true,
      listen: ':1053',
      'cache-algorithm': 'arc',
      'use-hosts': true,
      'use-system-hosts': true,
      'prefer-h3': false,
      'enhanced-mode': 'fake-ip',
      'fake-ip-range': '198.18.0.1/16',
      'fake-ip-filter': ['geosite:private', 'rule-set:fakeip_filter'],
      'default-nameserver': ['223.5.5.5', '1.12.12.12'],
      'proxy-server-nameserver': [
        ...chinaDNS,
        ...privateDNS,
      ],
      nameserver: foreignDNS,
      'direct-nameserver': ['system', '223.5.5.5', '119.29.29.29'],
      'direct-nameserver-follow-policy': true,
      'nameserver-policy': {
        'geosite:private': chinaDNS,
        'rule-set:cn': chinaDNS,
        'geosite:geolocation-cn': chinaDNS,
        'geosite:apple@cn': chinaDNS,
        'geosite:cloudflare@cn': chinaDNS,
        'geosite:microsoft@cn': chinaDNS,
        'geosite:category-games@cn': chinaDNS,
        'geosite:nvidia@cn': chinaDNS,
        'geosite:gfw': foreignDNS,
      },
      ...(Object.keys(proxyServerPolicy).length > 0 && {
        'proxy-server-nameserver-policy': proxyServerPolicy,
      }),
    },
    tun: tunEnable
      ? {
          enable: true,
          stack: 'mixed',
          'auto-route': true,
          'strict-route': true,
          'auto-redirect': false,
          'auto-detect-interface': true,
          'endpoint-independent-nat': true,
          'dns-hijack': ['any:53', 'tcp://any:53'],
          'udp-timeout': 300,
        }
      : undefined,
  };
}

function collectTopLevelGroups(generatedRegionGroups, rateGroupNames) {
  const groupNamesOfSelect = [];
  const autoTestProxies = [];
  const loadBalanceProxies = [];

  for (const g of generatedRegionGroups) {
    if (rateGroupNames.has(g.name)) continue;

    if (g.type === 'select') groupNamesOfSelect.push(g.name);
    else if (g.type === 'url-test') autoTestProxies.push(g.name);
    else if (g.type === 'load-balance') loadBalanceProxies.push(g.name);
  }

  return { groupNamesOfSelect, autoTestProxies, loadBalanceProxies };
}

function processProxies(rawProxies, enabledDefinitions) {
  const regionGroups = {};
  const regionFlags = {};
  for (const r of enabledDefinitions) {
    regionGroups[r.name] = { name: r.name, icon: r.icon, proxies: [] };
    if ('flag' in r) {
      regionFlags[r.name] = r.flag;
    }
  }

  const processedProxies = [];
  const otherProxies = [];
  const regionCounters = new Map();

  for (const proxy of rawProxies) {
    try {
      if (!proxy || typeof proxy !== 'object' || Array.isArray(proxy)) continue;

      const originalName = proxy.name;
      if (typeof originalName !== 'string' || originalName.trim() === '') continue;

      if (excludeFilterEnable && excludeFilter.test(originalName)) continue;

      const proxyType = typeof proxy.type === 'string' ? proxy.type.toLowerCase() : 'unknown';

      if (FINGERPRINT_SUPPORTED.has(proxyType)) {
        if (proxy['client-fingerprint'] == null) {
          proxy['client-fingerprint'] = 'chrome';
        }
      }

      let matchedNormalRegionName = null;
      const matchedGroups = [];

      for (const region of enabledDefinitions) {
        if (region.regex.test(originalName)) {
          matchedGroups.push(region.name);
          if (region.name !== NODE_RATE_LOW && region.name !== NODE_RATE_HIGH) {
            if (matchedNormalRegionName === null) {
              matchedNormalRegionName = region.name;
            }
          }
        }
      }

      const isLow = matchedGroups.includes(NODE_RATE_LOW);
      const isHigh = matchedGroups.includes(NODE_RATE_HIGH);
      let newName = originalName;

      if (matchedNormalRegionName !== null) {
        const flag = regionFlags[matchedNormalRegionName] || '🏳️';
        const counterKey = (isLow || isHigh) ? `${matchedNormalRegionName}_multi` : matchedNormalRegionName;
        const count = (regionCounters.get(counterKey) ?? 0) + 1;

        regionCounters.set(counterKey, count);
        const serial = String(count).padStart(2, '0');
        newName = `${flag} ${matchedNormalRegionName} ${serial}`;

        if (isLow) {
          newName += ` ${extractMultiplier(originalName, false)}`;
        } else if (isHigh) {
          const mult = extractMultiplier(originalName, true);
          if (mult) {
            newName += ` ${mult}`;
          }
        }
      }

      proxy.name = newName;
      processedProxies.push(proxy);

      const skipNormalGroup = isLow || isHigh;
      for (const groupName of matchedGroups) {
        if (skipNormalGroup && groupName !== NODE_RATE_LOW && groupName !== NODE_RATE_HIGH) continue;
        if (groupName in regionGroups) {
          regionGroups[groupName].proxies.push(newName);
        }
      }

      if (matchedNormalRegionName === null) otherProxies.push(newName);
    } catch (e) {
      print('[Mihomo-Script-Rules] processProxies: skip invalid proxy:', e.message || String(e));
    }
  }

  return { processedProxies, otherProxies, regionGroups };
}

function main(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) {
    return { proxies: [], 'proxy-groups': [], rules: [] };
  }
  if (!Array.isArray(config.proxies)) {
    config.proxies = [];
  }

  try {
    const newConfig = { ...config };

    delete newConfig['global-client-fingerprint'];
    delete newConfig['sub-rules'];
    delete newConfig['experimental'];

    const rawProxies = newConfig.proxies;
    const hasValidProxy = rawProxies.some((p) => {
      if (p && typeof p === 'object' && typeof p.type === 'string') {
        const pType = p.type.toLowerCase();
        return pType !== 'direct' && pType !== 'reject';
      }
      return false;
    });

    if (!hasValidProxy) {
      throw new Error('未发现有效代理节点数据');
    }

    const enabledDefinitions = regionDefinitions.filter((def) => regionDefinitionsEnable[def.name]);

    const { processedProxies, otherProxies, regionGroups } = processProxies(rawProxies, enabledDefinitions);

    newConfig.proxies = processedProxies;

    const originalDnsConfig = config.dns || {};

    const commonDnsList = [
      '223.5.5.5', '223.6.6.6', '119.29.29.29', '1.12.12.12', '120.53.53.53',
      '114.114.114.114', '180.76.76.76', '1.2.4.8', '116.116.116.116',
      '101.226.4.6', '123.125.81.6', '180.184.1.1', '180.184.2.2',
      '1.1.1.1', '1.0.0.1', '8.8.8.8', '8.8.4.4', '9.9.9.9', '149.112.112.112',
      '208.67.222.222', '208.67.220.220', '94.140.14.14', '94.140.15.15',
      '76.76.2.0', '76.76.10.0', '185.228.168.9', '185.228.169.9',
      '77.88.8.8', '77.88.8.1', '156.154.70.1', '156.154.71.1',
      '127.0.0.1',
      'alidns', 'doh.pub', 'dot.pub', 'dnspod', 'dns.baidu',
      'dns.google', 'cloudflare', 'quad9', 'opendns', 'nextdns', 'adguard',
      'system',
    ];

    const isCommonDns = (dns) => {
      if (dns == null) return true;
      const value = String(dns).toLowerCase();
      return commonDnsList.some((keyword) => value.includes(keyword));
    };

    const privateDNS = [
      ...new Set([
        ...(Array.isArray(originalDnsConfig['nameserver']) ? originalDnsConfig['nameserver'] : []),
        ...(Array.isArray(originalDnsConfig['proxy-server-nameserver']) ? originalDnsConfig['proxy-server-nameserver'] : []),
      ]),
    ].filter((dns) => !isCommonDns(dns));

    const proxyDomains = new Set(
      processedProxies
        .filter((proxy) => typeof proxy.server === 'string')
        .map((proxy) => proxy.server.toLowerCase()),
    );

    const proxyServerPolicy = {};
    for (const policy of [
      originalDnsConfig['nameserver-policy'] || {},
      originalDnsConfig['proxy-server-nameserver-policy'] || {},
    ]) {
      for (const [domain, dns] of Object.entries(policy)) {
        if (matchDomainPattern(domain, proxyDomains)) {
          proxyServerPolicy[domain] = dns;
        }
      }
    }

    const originalHosts = config.hosts || {};
    const proxyServerHosts = {};
    for (const [domain, value] of Object.entries(originalHosts)) {
      if (matchDomainPattern(domain, proxyDomains)) {
        proxyServerHosts[domain] = value;
      }
    }

    const generatedRegionGroups = [];
    for (const def of enabledDefinitions) {
      const group = regionGroups[def.name];
      if (group && Array.isArray(group.proxies) && group.proxies.length > 0) {
        generatedRegionGroups.push(...createRegionGroup(group.name, group.icon, group.proxies));
      }
    }

    if (otherProxies.length > 0) {
      generatedRegionGroups.push(
        ...createRegionGroup(
          'Others',
          'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png',
          otherProxies,
        ),
      );
    }

    const rateGroupNames = new Set([NODE_RATE_LOW, NODE_RATE_HIGH]);
    const { groupNamesOfSelect, autoTestProxies, loadBalanceProxies } = collectTopLevelGroups(
      generatedRegionGroups,
      rateGroupNames,
    );

    const proxyModes = {
      default: ['Default', 'Direct', 'Auto', 'Balance', ...groupNamesOfSelect],
      reject: ['REJECT', 'DIRECT'],
    };

    const functionalGroups = [
      {
        ...selectBaseOption,
        name: 'Default',
        proxies: ['Auto', 'Direct', 'Balance', ...groupNamesOfSelect],
        icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png',
      },
      {
        ...urlTestBaseOption,
        name: 'Auto',
        proxies: autoTestProxies.length > 0 ? autoTestProxies : ['Direct'],
      },
      {
        ...loadBalanceBaseOption,
        name: 'Balance',
        proxies: loadBalanceProxies.length > 0 ? loadBalanceProxies : ['Direct'],
      },
      {
        ...selectBaseOption,
        name: 'QUIC',
        proxies: ['Default', 'REJECT'],
        icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Lock.png',
      },
    ];

    const finalRules = quicEnable ? [...quicRules, ...rules] : [...rules];
    const finalRuleProviders = { ...baseRuleProviders };

    for (const svc of serviceConfigs) {
      if (!ruleOptionsEnable[svc.key]) continue;

      finalRules.push(...svc.rules);
      Object.assign(finalRuleProviders, svc.providers);

      const hasCustomProxyMode = Object.prototype.hasOwnProperty.call(svc, 'proxyMode');
      const currentProxyMode = hasCustomProxyMode ? svc.proxyMode : 'default';
      functionalGroups.push({
        ...selectBaseOption,
        name: svc.name,
        icon: svc.icon,
        proxies: proxyModes[currentProxyMode] ?? proxyModes['default'],
      });
    }

    functionalGroups.push({
      ...selectBaseOption,
      name: 'Direct',
      proxies: ['Dual Stack', 'IPv4 Only', 'IPv6 Only', 'IPv4 Preferred', 'IPv6 Preferred'],
      url: 'https://connectivitycheck.platform.hicloud.com/generate_204',
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png',
    });

    const functionalGroupDisplayOrder = [
      'Default',
      'Direct',
      'Auto',
      'Balance',
      'QUIC',
      'AdBlock',
      'Cloudflare',
      'FCM',
      'AI',
      'Google',
      'GitHub',
      'Steam',
      'Telegram',
      'X',
      'TikTok',
      'Microsoft',
      'Apple',
      'YouTube',
      'Instagram',
      'Netflix',
      'Spotify',
    ];

    const orderMap = new Map();
    functionalGroupDisplayOrder.forEach((name, index) => orderMap.set(name, index));

    const functionalGroupsSorted = functionalGroups.slice().sort((a, b) => {
      const orderA = orderMap.has(a.name) ? orderMap.get(a.name) : Infinity;
      const orderB = orderMap.has(b.name) ? orderMap.get(b.name) : Infinity;
      return orderA - orderB;
    });

    const globalGroupProxies = [
      ...functionalGroupsSorted.map((g) => g.name),
      ...generatedRegionGroups.filter((g) => g.type === 'select').map((g) => g.name),
    ];

    const globalGroup = {
      ...selectBaseOption,
      name: 'GLOBAL',
      proxies: globalGroupProxies,
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png',
    };

    const networkConfig = buildNetworkConfig(finalRuleProviders, tunEnable, privateDNS, proxyServerPolicy, proxyServerHosts);

    newConfig['mode'] = 'rule';
    newConfig['mixed-port'] = 7890;
    newConfig['allow-lan'] = true;
    newConfig['ipv6'] = true;
    newConfig['bind-address'] = '*';
    newConfig['unified-delay'] = true;
    newConfig['tcp-concurrent'] = true;
    newConfig['find-process-mode'] = 'strict';
    newConfig['geodata-mode'] = true;
    newConfig['geodata'] = {
      geosite: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat',
      geoip: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat',
    };
    newConfig['external-controller'] = '127.0.0.1:9090';
    newConfig['external-ui'] = 'ui';
    newConfig['external-ui-url'] = 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip';
    newConfig['profile'] = {
      'store-selected': true,
      'store-fake-ip': true,
    };
    newConfig['proxy-groups'] = [globalGroup, ...functionalGroupsSorted, ...generatedRegionGroups];
    newConfig['rule-providers'] = finalRuleProviders;
    newConfig['hosts'] = networkConfig.hosts;
    newConfig['ntp'] = networkConfig.ntp;
    newConfig['sniffer'] = networkConfig.sniffer;
    newConfig['dns'] = networkConfig.dns;

    if (networkConfig.tun) {
      newConfig['tun'] = networkConfig.tun;
    } else if ('tun' in newConfig) {
      delete newConfig['tun'];
    }

    newConfig.proxies.push(
      { name: 'Dual Stack', type: 'direct' },
      { name: 'IPv4 Only', type: 'direct', 'ip-version': 'ipv4' },
      { name: 'IPv6 Only', type: 'direct', 'ip-version': 'ipv6' },
      { name: 'IPv4 Preferred', type: 'direct', 'ip-version': 'ipv4-prefer' },
      { name: 'IPv6 Preferred', type: 'direct', 'ip-version': 'ipv6-prefer' },
    );

    newConfig['rules'] = [
      ...finalRules,
      'GEOSITE,geolocation-cn,Direct',
      'RULE-SET,cn,Direct',
      'GEOIP,cn,Direct,no-resolve',
      'GEOSITE,gfw,Default',
      'DOMAIN-SUFFIX,cn,Direct',
      'DOMAIN-SUFFIX,local,Direct',
      'DOMAIN-SUFFIX,lan,Direct',
      'MATCH,Default',
    ];

    return newConfig;
  } catch (error) {
    print('[Mihomo-Script-Rules] Error in main():', error.message || String(error));
    return { proxies: [], 'proxy-groups': [], rules: [] };
  }
}
