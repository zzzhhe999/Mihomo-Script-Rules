const Compatible_With_Bettbox = { ruleOptionsEnable: true };

const log =
  typeof print === 'function'
    ? print
    : typeof console !== 'undefined' && typeof console.log === 'function'
      ? (...args) => console.log(...args)
      : () => {};

const ruleOptionsEnable = {
  AI: true,
  YouTube: true,
  FCM: true,
  Google: true,
  GitHub: true,
  Microsoft: true,
  Apple: true,
  Telegram: true,
  X: true,
  Instagram: true,
  Steam: true,
  Cloudflare: true,
  Spotify: true,
  TikTok: true,
  Netflix: true,
  AdBlock: true,
  Emby: true,
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

const quicEnable = true;

const quicRules = [
  'AND,((NETWORK,udp),(DST-PORT,443),(RULE-SET,private_ip,no-resolve)),Direct',
  'AND,((NETWORK,udp),(DST-PORT,443),(OR,((RULE-SET,geolocation-cn),(RULE-SET,cn_ip,no-resolve)))),Direct',
  'AND,((NETWORK,udp),(DST-PORT,443)),QUIC',
];

const directProxies = [
  { name: 'Dual Stack', type: 'direct' },
  { name: 'IPv4 Only', type: 'direct', 'ip-version': 'ipv4' },
  { name: 'IPv6 Only', type: 'direct', 'ip-version': 'ipv6' },
  { name: 'IPv4 Preferred', type: 'direct', 'ip-version': 'ipv4-prefer' },
  { name: 'IPv6 Preferred', type: 'direct', 'ip-version': 'ipv6-prefer' },
];

const rules = [
  'RULE-SET,private,Direct',
  'RULE-SET,private_ip,Direct,no-resolve',
  'DOMAIN-KEYWORD,douyin,Direct',
  'RULE-SET,games_cn,Direct',
  'RULE-SET,cloudflare_cn,Direct',
  'RULE-SET,apple_cn,Direct',
];

const bytedanceCdnRules = [
  'DOMAIN-SUFFIX,ibytedtos.com,Direct',
  'DOMAIN-SUFFIX,bytecdn.cn,Direct',
  'DOMAIN-SUFFIX,snssdk.com,Direct',
  'DOMAIN-SUFFIX,iesdouyin.com,Direct',
  'DOMAIN-SUFFIX,pstatp.com,Direct',
];

const NODE_RATE_LOW = 'Low-Rate';
const NODE_RATE_HIGH = 'High-Rate';

const ICON = (n) => `https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/${n}.png`;
const META = 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta';

const regionDefinitions = [
  {
    name: 'HK',
    regex: /🇭🇰|香港|港(?!口)|\bHK\b|hong\s*kong/i,
    icon: ICON('HK'),
    flag: '🇭🇰',
  },
  {
    name: 'JP',
    regex: /🇯🇵|日本|东京|大阪|埼玉|\bJP\b|japan/i,
    icon: ICON('JP'),
    flag: '🇯🇵',
  },
  {
    name: 'US',
    regex: /🇺🇸|美国|美区|洛杉矶|圣何塞|西雅图|纽约|芝加哥|达拉斯|\bUS\b|america|united\s*states/i,
    icon: ICON('US'),
    flag: '🇺🇸',
  },
  {
    name: 'SG',
    regex: /🇸🇬|新加坡|狮城|\bSG\b|singapore/i,
    icon: ICON('SG'),
    flag: '🇸🇬',
  },
  {
    name: 'TW',
    regex: /🇹🇼|台湾|台北|高雄|\bTW\b|taiwan/i,
    icon: ICON('TW'),
    flag: '🇹🇼',
  },
  {
    name: 'KR',
    regex: /🇰🇷|韩国|首尔|春川|\bKR\b|korea/i,
    icon: ICON('KR'),
    flag: '🇰🇷',
  },
  {
    name: 'UK',
    regex: /🇬🇧|英国|伦敦|\bUK\b|\bGB\b|britain|united\s*kingdom/i,
    icon: ICON('UK'),
    flag: '🇬🇧',
  },
  {
    name: 'DE',
    regex: /🇩🇪|德国|法兰克福|柏林|\bDE\b|germany/i,
    icon: ICON('DE'),
    flag: '🇩🇪',
  },
  {
    name: 'FR',
    regex: /🇫🇷|法国|巴黎|\bFR\b|france/i,
    icon: ICON('FR'),
    flag: '🇫🇷',
  },
  {
    name: 'CA',
    regex: /🇨🇦|加拿大|多伦多|温哥华|蒙特利尔|\bCA\b|canada/i,
    icon: ICON('CA'),
    flag: '🇨🇦',
  },
  {
    name: 'AU',
    regex: /🇦🇺|澳大利亚|澳洲|悉尼|墨尔本|\bAU\b|australia/i,
    icon: ICON('AU'),
    flag: '🇦🇺',
  },
  {
    name: 'IN',
    regex: /🇮🇳|印度|孟买|金奈|\bIN\b|india/i,
    icon: ICON('IN'),
    flag: '🇮🇳',
  },
  {
    name: 'TR',
    regex: /🇹🇷|土耳其|伊斯坦布尔|\bTR\b|turkey/i,
    icon: ICON('TR'),
    flag: '🇹🇷',
  },
  {
    name: 'BR',
    regex: /🇧🇷|巴西|圣保罗|\bBR\b|brazil/i,
    icon: ICON('BR'),
    flag: '🇧🇷',
  },
  {
    name: 'AR',
    regex: /🇦🇷|阿根廷|布宜诺斯艾利斯|\bAR\b|argentina/i,
    icon: ICON('AR'),
    flag: '🇦🇷',
  },
  {
    name: 'RU',
    regex: /🇷🇺|俄罗斯|莫斯科|圣彼得堡|\bRU\b|russia/i,
    icon: ICON('RU'),
    flag: '🇷🇺',
  },
  {
    name: NODE_RATE_LOW,
    regex:
      /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:低倍|低倍率|省流|下载|(?:^|[^\d])0\.[0-5])/u,
    icon: ICON('Cellular'),
  },
  {
    name: NODE_RATE_HIGH,
    regex:
      /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:[*×xX✕✖⨉]\s*(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?|(?:^|[^\d.])(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?\s*(?:倍|倍率|[*×xX✕✖⨉]))/u,
    icon: ICON('Filter'),
  },
];

const ruleProviderCommonDomain = {
  type: 'http',
  format: 'mrs',
  interval: 86400,
  behavior: 'domain',
};

const ruleProviderCommonIpcidr = {
  type: 'http',
  format: 'mrs',
  interval: 86400,
  behavior: 'ipcidr',
};

const RP = ({ name, ip, pathName = name, pib = `geo/${ip ? 'geoip' : 'geosite'}/${name}.mrs`, url = `${META}/geo/${ip ? 'geoip' : 'geosite'}/${name}.mrs` }) => {
  const p = { ...(ip ? ruleProviderCommonIpcidr : ruleProviderCommonDomain), url, path: `./ruleset/${pathName}.mrs` };
  if (pib) p['path-in-bundle'] = pib;
  return p;
};

const baseRuleProviders = {
  private: RP({ name: 'private' }),
  private_ip: RP({ name: 'private', ip: true, pathName: 'private_ip' }),
  games_cn: RP({ name: 'category-games@cn' }),
  apple_cn: RP({ name: 'apple@cn' }),
  'geolocation-cn': RP({ name: 'geolocation-cn' }),
  cn_ip: RP({ name: 'cn', ip: true, pathName: 'cn_ip' }),
  gfw: RP({ name: 'gfw' }),
  fakeip_filter: RP({ name: 'fakeip-filter', url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/fakeip-filter.mrs', pib: '' }),
  cn: RP({ name: 'cn' }),
  cloudflare_cn: RP({ name: 'cloudflare@cn' }),
};

const groupBaseOption = {
  interval: 180,
  timeout: 3000,
  url: 'https://cp.cloudflare.com/generate_204',
  lazy: true,
  'max-failed-times': 3,
  'empty-fallback': 'REJECT',
};

const selectBaseOption = {
  ...groupBaseOption,
  type: 'select',
  hidden: false,
};

const urlTestBaseOption = {
  ...groupBaseOption,
  type: 'url-test',
  tolerance: 50,
  'exclude-type': 'DIRECT',
  icon: ICON('Auto'),
  hidden: true,
};

const loadBalanceBaseOption = {
  ...groupBaseOption,
  type: 'load-balance',
  strategy: 'sticky-sessions',
  'max-failed-times': 1,
  'exclude-type': 'DIRECT',
  icon: ICON('Bypass'),
  hidden: true,
};

const RATE_LOW_MULT_RE = /(?:^|[^\d])(0\.[0-5]\d*)\s*(?:倍|倍率|[xX×])?/u;
const RATE_LOW_KEYWORD_RE = /省流|下载/;
const RATE_HIGH_MULT_RE = /(\d+(?:\.\d+)?)\s*[xX×倍]/u;
const RATE_HIGH_MULT_PRE_RE = /[×*xX]\s*(\d+(?:\.\d+)?)/u;

const extractMultiplier = (name, isHigh) => {
  if (typeof name !== 'string') return '';
  if (!isHigh) {
    const match = name.match(RATE_LOW_MULT_RE);
    if (match !== null) return `${match[1]}x`;
    const lowMatch = name.match(RATE_LOW_KEYWORD_RE);
    return lowMatch !== null ? lowMatch[0] : '';
  }
  const match = name.match(RATE_HIGH_MULT_RE) || name.match(RATE_HIGH_MULT_PRE_RE);
  return match !== null ? `${match[1]}x` : '';
};

function suffixMatch(suffix, domains, includeExact) {
  for (const domain of domains) {
    if (domain.endsWith('.' + suffix) || (includeExact && domain === suffix)) return true;
  }
  return false;
}

function matchDomainPattern(pattern, domains) {
  if (typeof pattern !== 'string') return false;
  pattern = pattern.toLowerCase();

  if (!pattern.includes('*') && !pattern.startsWith('+.') && !pattern.startsWith('.')) {
    return domains.has(pattern);
  }

  if (pattern.startsWith('+.') || pattern.startsWith('*.')) {
    return suffixMatch(pattern.slice(2), domains, true);
  }

  if (pattern.startsWith('.')) {
    return suffixMatch(pattern.slice(1), domains, false);
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

const mkSvc = ({ name, geo, icon, hasIp, key = geo, extra = {} }) => ({
  name,
  baseOption: selectBaseOption,
  providers: {
    [key]: {
      ...ruleProviderCommonDomain,
      url: `${META}/geo/geosite/${geo}.mrs`,
      path: `./ruleset/${key}.mrs`,
      'path-in-bundle': `geo/geosite/${geo}.mrs`,
    },
    ...(hasIp && {
      [`${key}_ip`]: {
        ...ruleProviderCommonIpcidr,
        url: `${META}/geo/geoip/${key}.mrs`,
        path: `./ruleset/${key}_ip.mrs`,
        'path-in-bundle': `geo/geoip/${key}.mrs`,
      },
    }),
  },
  icon,
  rules: [
    `RULE-SET,${key},${name}`,
    ...(hasIp ? [`RULE-SET,${key}_ip,${name},no-resolve`] : []),
  ],
  ...extra,
});

const serviceConfigs = [
  {
    name: 'AdBlock',
    baseOption: selectBaseOption,
    proxyMode: 'reject',
    providers: {
      adblockmihomolite: {
        ...ruleProviderCommonDomain,
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
        path: './ruleset/adblockmihomolite.mrs',
      },
    },
    icon: ICON('AdBlack'),
    rules: ['RULE-SET,adblockmihomolite,AdBlock'],
  },
  mkSvc({ name: 'AI', key: 'ai', geo: 'category-ai-!cn', icon: ICON('ChatGPT') }),
  mkSvc({ name: 'YouTube', geo: 'youtube', icon: ICON('YouTube') }),
  mkSvc({ name: 'FCM', geo: 'googlefcm', icon: ICON('Google') }),
  mkSvc({ name: 'Google', geo: 'google', hasIp: true, icon: ICON('Google_Search') }),
  mkSvc({ name: 'GitHub', geo: 'github', icon: ICON('GitHub') }),
  mkSvc({ name: 'Microsoft', geo: 'microsoft', icon: ICON('Microsoft') }),
  mkSvc({ name: 'Apple', geo: 'apple', icon: ICON('Apple') }),
  mkSvc({ name: 'Telegram', geo: 'telegram', hasIp: true, icon: ICON('Telegram') }),
  mkSvc({ name: 'Cloudflare', geo: 'cloudflare', hasIp: true, icon: ICON('Cloudflare') }),
  mkSvc({ name: 'Steam', geo: 'steam', icon: ICON('Steam') }),
  mkSvc({ name: 'X', geo: 'twitter', hasIp: true, icon: ICON('X') }),
  mkSvc({ name: 'Instagram', geo: 'instagram', icon: ICON('Instagram') }),
  mkSvc({ name: 'Spotify', geo: 'spotify', icon: ICON('Spotify') }),
  mkSvc({ name: 'TikTok', geo: 'tiktok', icon: ICON('TikTok') }),
  mkSvc({ name: 'Netflix', geo: 'netflix', hasIp: true, icon: ICON('Netflix') }),
  mkSvc({ name: 'Emby', key: 'emby', geo: 'category-emby', icon: ICON('Emby'), extra: { rules: ['RULE-SET,emby,Emby', 'DOMAIN-SUFFIX,mb3admin.com,Emby', 'DOMAIN-KEYWORD,emby,Emby'] } }),
];

const createRegionGroup = (name, icon, proxies) => [
  { ...selectBaseOption, name, icon, proxies: [`${name}-Auto`, `${name}-Balance`, ...proxies] },
  { ...urlTestBaseOption, name: `${name}-Auto`, proxies },
  { ...loadBalanceBaseOption, name: `${name}-Balance`, proxies },
];

const FINGERPRINT_SUPPORTED = new Set(['vmess', 'vless', 'trojan', 'anytls']);

function buildNetworkConfig(privateDNS, proxyServerPolicy, proxyServerHosts) {
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
      'fake-ip-filter': ['rule-set:private', 'rule-set:fakeip_filter'],
      'default-nameserver': ['223.5.5.5', '1.12.12.12'],
      'proxy-server-nameserver': [
        ...chinaDNS,
        ...privateDNS,
      ],
      nameserver: foreignDNS,
      'direct-nameserver': ['system', '223.5.5.5', '119.29.29.29'],
      'direct-nameserver-follow-policy': true,
      'nameserver-policy': {
        'rule-set:private': chinaDNS,
        'rule-set:cn': chinaDNS,
        'rule-set:geolocation-cn': chinaDNS,
        'rule-set:apple_cn': chinaDNS,
        'rule-set:cloudflare_cn': chinaDNS,
        'rule-set:games_cn': chinaDNS,
        'rule-set:gfw': foreignDNS,
      },
      ...(Object.keys(proxyServerPolicy).length > 0 && {
        'proxy-server-nameserver-policy': proxyServerPolicy,
      }),
    },
  };
}

function collectTopLevelGroups(generatedRegionGroups, rateGroupNames) {
  const groupNamesOfSelect = [];
  const autoTestProxies = [];
  const loadBalanceProxies = [];
  const rateSelectNames = [];
  const rateList = [...rateGroupNames];

  for (const g of generatedRegionGroups) {
    if (rateList.some((rn) => g.name === rn || g.name.startsWith(rn + '-'))) {
      if (g.type === 'select') rateSelectNames.push(g.name);
      continue;
    }

    if (g.type === 'select') groupNamesOfSelect.push(g.name);
    else if (g.type === 'url-test') autoTestProxies.push(g.name);
    else if (g.type === 'load-balance') loadBalanceProxies.push(g.name);
  }

  return { groupNamesOfSelect, autoTestProxies, loadBalanceProxies, rateSelectNames };
}

function processProxies(rawProxies, enabledDefinitions) {
  const regionGroups = {};
  for (const r of enabledDefinitions) {
    regionGroups[r.name] = { name: r.name, icon: r.icon, proxies: [] };
  }

  const processedProxies = [];
  const otherProxies = [];
  const regionCounters = new Map();

  const renameMap = new Map();

  const bump = (key) => {
    const n = (regionCounters.get(key) ?? 0) + 1;
    regionCounters.set(key, n);
    return String(n).padStart(2, '0');
  };

  for (const proxy of rawProxies) {
    try {
      if (!proxy || typeof proxy !== 'object' || Array.isArray(proxy)) continue;

      const originalName = proxy.name;
      if (typeof originalName !== 'string' || originalName.trim() === '') continue;

      if (excludeFilterEnable && excludeFilter.test(originalName)) continue;

      const p = { ...proxy };
      const proxyType = typeof p.type === 'string' ? p.type.toLowerCase() : 'unknown';

      if (FINGERPRINT_SUPPORTED.has(proxyType) && p['client-fingerprint'] == null) {
        p['client-fingerprint'] = 'chrome';
      }

      const matchedGroups = [];
      let regionDef = null;

      for (const region of enabledDefinitions) {
        if (region.regex.test(originalName)) {
          matchedGroups.push(region.name);
          if (region.name !== NODE_RATE_LOW && region.name !== NODE_RATE_HIGH && regionDef === null) {
            regionDef = region;
          }
        }
      }

      const isLow = matchedGroups.includes(NODE_RATE_LOW);
      const isHigh = matchedGroups.includes(NODE_RATE_HIGH);
      let newName = originalName;

      if (regionDef !== null) {
        const counterKey = (isLow || isHigh) ? `${regionDef.name}_multi` : regionDef.name;
        newName = `${regionDef.flag || '🏳️'} ${regionDef.name} ${bump(counterKey)}`;

        if (isLow) {
          newName += ' ' + (extractMultiplier(originalName, false) || '低倍');
        } else if (isHigh) {
          newName += ' ' + (extractMultiplier(originalName, true) || '高倍');
        }
      } else {
        newName = `${originalName} #${bump('__other__')}`;
      }

      p.name = newName;
      renameMap.set(originalName, newName);
      processedProxies.push(p);

      for (const groupName of matchedGroups) {
        if ((isLow || isHigh) && groupName !== NODE_RATE_LOW && groupName !== NODE_RATE_HIGH) continue;
        regionGroups[groupName].proxies.push(newName);
      }

      if (matchedGroups.length === 0) otherProxies.push(newName);
    } catch (e) {
      log('[Mihomo-Script-Rules] processProxies: skip invalid proxy:', e.message || String(e));
    }
  }

  for (const p of processedProxies) {
    const target = p['dialer-proxy'];
    if (!target || typeof target !== 'string') continue;
    const mapped = renameMap.get(target);
    if (mapped !== undefined) {
      p['dialer-proxy'] = mapped;
    } else {
      delete p['dialer-proxy'];
    }
  }

  return { processedProxies, otherProxies, regionGroups };
}

const groupFrom = (name, base, proxies) => {
  const g = { ...base, name, proxies: proxies.length > 0 ? proxies : ['Direct'] };
  if (proxies.length === 0) delete g['exclude-type'];
  return g;
};

function main(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) {
    return { proxies: [], 'proxy-groups': [], rules: [] };
  }
  const rawProxies = Array.isArray(config.proxies) ? config.proxies : [];

  try {
    const newConfig = { ...config };

    for (const key of ['global-client-fingerprint', 'sub-rules', 'experimental']) delete newConfig[key];

    const hasValidProxy = rawProxies.some((p) => {
      if (!p || typeof p.type !== 'string') return false;
      const pType = p.type.toLowerCase();
      return pType !== 'direct' && pType !== 'reject';
    });

    if (!hasValidProxy) {
      throw new Error('未发现有效代理节点数据');
    }

    const enabledDefinitions = regionDefinitions.filter((def) => regionDefinitionsEnable[def.name]);

    const { processedProxies, otherProxies, regionGroups } = processProxies(rawProxies, enabledDefinitions);

    if (processedProxies.length === 0) {
      log('[Mihomo-Script-Rules] 警告：所有代理节点已被过滤器排除，最终配置将仅包含 DIRECT 出口。请检查 excludeFilter 正则是否过于宽泛。');
    }

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
    ];

    const IPV4_RE = /^\d+(?:\.\d+){3}$/;
    const DIGIT_DOT_RE = /[0-9.]/;
    const isCommonDns = (dns) => {
      if (typeof dns !== 'string') return true;
      if (dns.toLowerCase() === 'system') return true;
      const value = dns.toLowerCase();
      return commonDnsList.some((keyword) => {
        if (IPV4_RE.test(keyword)) {
          const idx = value.indexOf(keyword);
          if (idx === -1) return false;
          const before = idx === 0 ? '' : value[idx - 1];
          if (DIGIT_DOT_RE.test(before)) return false;
          const after = value[idx + keyword.length];
          if (after === undefined || after === '') {
            return true;
          }
          if (after === ':') {
            return value.slice(idx + keyword.length) === ':53';
          }
          return !DIGIT_DOT_RE.test(after);
        }
        return value.includes(keyword);
      });
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
    for (const rawPolicy of [
      originalDnsConfig['nameserver-policy'],
      originalDnsConfig['proxy-server-nameserver-policy'],
    ]) {
      if (!rawPolicy || typeof rawPolicy !== 'object' || Array.isArray(rawPolicy)) continue;
      for (const [domain, dns] of Object.entries(rawPolicy)) {
        if (matchDomainPattern(domain, proxyDomains)) {
          proxyServerPolicy[domain] = dns;
        }
      }
    }

    const originalHosts = (config.hosts && typeof config.hosts === 'object' && !Array.isArray(config.hosts))
      ? config.hosts : {};
    const proxyServerHosts = {};
    for (const [domain, value] of Object.entries(originalHosts)) {
      if (matchDomainPattern(domain, proxyDomains)) {
        proxyServerHosts[domain] = value;
      }
    }

    const generatedRegionGroups = [];
    for (const def of enabledDefinitions) {
      const group = regionGroups[def.name];
      if (group.proxies.length > 0) {
        generatedRegionGroups.push(...createRegionGroup(group.name, group.icon, group.proxies));
      }
    }

    if (otherProxies.length > 0) {
      generatedRegionGroups.push(
        ...createRegionGroup(
          'Others',
          ICON('World_Map'),
          otherProxies,
        ),
      );
    }

    const { groupNamesOfSelect, autoTestProxies, loadBalanceProxies, rateSelectNames } = collectTopLevelGroups(
      generatedRegionGroups,
      [NODE_RATE_LOW, NODE_RATE_HIGH],
    );

    if (
      rateSelectNames.length === 0 &&
      (regionDefinitionsEnable[NODE_RATE_LOW] || regionDefinitionsEnable[NODE_RATE_HIGH])
    ) {
      log('[Mihomo-Script-Rules] 提示：未匹配到任何高低倍率节点，Low-Rate/High-Rate 分组未生成。');
      log('[Mihomo-Script-Rules] 节点名需含 "低倍/低倍率/省流/下载/0.x" 或 "2倍/3倍率/2x/×2" 等倍率标记，否则倍率组不会出现。');
    }

    const proxyModes = {
      default: ['Default', 'Direct', 'Auto', 'Balance', ...groupNamesOfSelect, ...rateSelectNames],
      reject: ['REJECT', 'DIRECT'],
    };

    const autoGroup = groupFrom('Auto', urlTestBaseOption, autoTestProxies);
    const balanceGroup = groupFrom('Balance', loadBalanceBaseOption, loadBalanceProxies);

    const functionalGroups = [
      {
        ...selectBaseOption,
        name: 'Default',
        proxies: ['Auto', 'Direct', 'Balance', ...groupNamesOfSelect, ...rateSelectNames],
        icon: ICON('Direct'),
      },
      autoGroup,
      balanceGroup,
      {
        ...selectBaseOption,
        name: 'QUIC',
        proxies: ['Default', 'REJECT'],
        icon: ICON('Round_Robin_1'),
      },
    ];

    const finalRuleProviders = { ...baseRuleProviders };
    const rejectServiceRules = [];
    const serviceRules = [];

    for (const svc of serviceConfigs) {
      if (!ruleOptionsEnable[svc.name]) continue;

      if (svc.proxyMode === 'reject') rejectServiceRules.push(...svc.rules);
      else serviceRules.push(...svc.rules);
      Object.assign(finalRuleProviders, svc.providers);

      const currentProxyMode = svc.proxyMode ?? 'default';
      functionalGroups.push({
        ...(svc.baseOption || selectBaseOption),
        name: svc.name,
        icon: svc.icon,
        proxies: proxyModes[currentProxyMode] ?? proxyModes['default'],
      });
    }

    functionalGroups.push({
      ...selectBaseOption,
      name: 'Direct',
      proxies: directProxies.map((p) => p.name),
      url: 'https://connectivitycheck.platform.hicloud.com/generate_204',
      icon: ICON('China_Map'),
    });

    const functionalGroupDisplayOrder = [
      'Default',
      'Direct',
      'Auto',
      'Balance',
      'AdBlock',
      'QUIC',
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
      'Emby',
    ];

    const orderMap = new Map();
    functionalGroupDisplayOrder.forEach((name, index) => orderMap.set(name, index));

    const functionalGroupsSorted = functionalGroups.sort((a, b) => {
      const orderA = orderMap.get(a.name) ?? Infinity;
      const orderB = orderMap.get(b.name) ?? Infinity;
      return orderA - orderB;
    });

    const globalGroupProxies = [
      ...functionalGroupsSorted.map((g) => g.name),
      ...generatedRegionGroups.map((g) => g.name),
    ];

    const globalGroup = {
      ...selectBaseOption,
      name: 'GLOBAL',
      proxies: globalGroupProxies,
      icon: ICON('Global'),
    };

    const networkConfig = buildNetworkConfig(privateDNS, proxyServerPolicy, proxyServerHosts);

    newConfig['mode'] = 'rule';
    let mixedPort = 7890;
    if (config['mixed-port'] != null) {
      const mixedPortNum = Number(config['mixed-port']);
      if (Number.isFinite(mixedPortNum) && mixedPortNum >= 0) mixedPort = mixedPortNum;
    }
    newConfig['mixed-port'] = mixedPort;

    newConfig['ipv6'] = true;
    newConfig['bind-address'] = config['bind-address'] ?? '*';
    newConfig['unified-delay'] = true;
    newConfig['tcp-concurrent'] = true;
    newConfig['external-controller'] = config['external-controller'] ?? '127.0.0.1:9090';
    newConfig['profile'] = {
      'store-selected': true,
      'store-fake-ip': true,
    };
    newConfig['proxy-groups'] = [globalGroup, ...functionalGroupsSorted, ...generatedRegionGroups];
    newConfig['rule-providers'] = finalRuleProviders;
    Object.assign(newConfig, networkConfig);

    newConfig.proxies.push(...directProxies);

    newConfig['rules'] = [
      ...rejectServiceRules,
      'DOMAIN-KEYWORD,mcdn.bili,Direct',
      ...(quicEnable ? quicRules : []),
      ...rules,
      ...serviceRules,
      ...bytedanceCdnRules,
      'RULE-SET,geolocation-cn,Direct',
      'RULE-SET,gfw,Default',
      'RULE-SET,cn_ip,Direct',
      'MATCH,Default',
    ];

    return newConfig;
  } catch (error) {
    log('[Mihomo-Script-Rules] Error in main():', error.message || String(error));

    return {
      ...config,
      proxies: Array.isArray(config.proxies) ? config.proxies : [],
      'proxy-groups': Array.isArray(config['proxy-groups']) ? config['proxy-groups'] : [],
      rules: Array.isArray(config.rules) ? config.rules : [],
    };
  }
}
