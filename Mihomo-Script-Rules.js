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
  'AND,((NETWORK,udp),(DST-PORT,443),(OR,((RULE-SET,cn_additional),(RULE-SET,cn_ip,no-resolve)))),Direct',
  'AND,((NETWORK,udp),(DST-PORT,443)),QUIC',
];

const rules = [
  'DOMAIN-SUFFIX,mcdn.bilivideo.com,REJECT',
  'DOMAIN-SUFFIX,mcdn.bilivideo.cn,REJECT',
  'DOMAIN-KEYWORD,mcdn.bili,REJECT',
  'RULE-SET,private,Direct',
  'RULE-SET,private_ip,Direct,no-resolve',
  'DOMAIN-SUFFIX,ibytedtos.com,Direct',
  'DOMAIN-SUFFIX,bytecdn.cn,Direct',
  'DOMAIN-SUFFIX,snssdk.com,Direct',
  'DOMAIN-SUFFIX,iesdouyin.com,Direct',
  'DOMAIN-SUFFIX,pstatp.com,Direct',
  'DOMAIN-KEYWORD,douyin,Direct',
  'RULE-SET,DownloadApps,Direct',
  'RULE-SET,games_cn,Direct',
  'RULE-SET,nvidia_cn,Direct',
  'RULE-SET,cloudflare_cn,Direct',
  'RULE-SET,apple_cn,Direct',
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

const ruleProviderCommonIpcidr = {
  type: 'http',
  interval: 86400,
  behavior: 'ipcidr',
};

const ruleProviderCommonClassical = {
  type: 'http',
  interval: 86400,
  behavior: 'classical',
};

const geositeMrs = (geositePath, pathName) => ({
  ...ruleProviderCommonDomain,
  ...ruleProviderFormatMrs,
  url: `https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/${geositePath}.mrs`,
  path: `./ruleset/${pathName}.mrs`,
  'path-in-bundle': `geo/geosite/${geositePath}.mrs`,
});

const geoipMrs = (geoipPath, pathName) => ({
  ...ruleProviderCommonIpcidr,
  ...ruleProviderFormatMrs,
  url: `https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/${geoipPath}.mrs`,
  path: `./ruleset/${pathName}.mrs`,
  'path-in-bundle': `geo/geoip/${geoipPath}.mrs`,
});

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
  epicgames: geositeMrs('epicgames', 'epicgames'),
  nvidia_cn: geositeMrs('nvidia@cn', 'nvidia@cn'),
  games_cn: geositeMrs('category-games@cn', 'category-games@cn'),
  private: geositeMrs('private', 'private'),
  private_ip: geoipMrs('private', 'private_ip'),
  gfw: geositeMrs('gfw', 'gfw'),
  cn_additional: geositeMrs('geolocation-cn', 'geolocation-cn'),
  cn: {
    ...ruleProviderCommonDomain,
    ...ruleProviderFormatMrs,
    url: 'https://fastly.jsdelivr.net/gh/wwqgtxx/clash-rules@release/direct.mrs',
    path: './ruleset/cn.mrs',
    'path-in-bundle': 'geo/geosite/cn.mrs',
  },
  cn_ip: geoipMrs('cn', 'cn_ip'),
  cloudflare_cn: geositeMrs('cloudflare@cn', 'cloudflare_cn'),
  apple_cn: geositeMrs('apple@cn', 'apple@cn'),
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

const serviceConfigs = [
  {
    key: 'adblock',
    name: 'AdBlock',
    proxyMode: 'reject',
    providers: {
      adblockmihomolite: {
        ...geositeMrs('ads', 'adblockmihomolite'),
        'path-in-bundle': undefined,
        interval: 86400,
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png',
    rules: ['RULE-SET,adblockmihomolite,AdBlock'],
  },
  {
    key: 'ai',
    name: 'AI',
    providers: {
      openai: geositeMrs('openai', 'openai'),
      anthropic: geositeMrs('anthropic', 'anthropic'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png',
    rules: ['RULE-SET,openai,AI', 'RULE-SET,anthropic,AI'],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    providers: { youtube: geositeMrs('youtube', 'youtube') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png',
    rules: ['RULE-SET,youtube,YouTube'],
  },
  {
    key: 'googlefcm',
    name: 'FCM',
    providers: { googlefcm: geositeMrs('googlefcm', 'googlefcm') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google.png',
    rules: ['RULE-SET,googlefcm,FCM'],
  },
  {
    key: 'google',
    name: 'Google',
    providers: {
      google: geositeMrs('google', 'google'),
      google_ip: geoipMrs('google', 'google_ip'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Google_Search.png',
    rules: ['RULE-SET,google,Google', 'RULE-SET,google_ip,Google,no-resolve'],
  },
  {
    key: 'github',
    name: 'GitHub',
    providers: { github: geositeMrs('github', 'github') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png',
    rules: ['RULE-SET,github,GitHub'],
  },
  {
    key: 'microsoft',
    name: 'Microsoft',
    providers: { microsoft: geositeMrs('microsoft', 'microsoft') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png',
    rules: ['RULE-SET,microsoft,Microsoft'],
  },
  {
    key: 'apple',
    name: 'Apple',
    providers: { apple: geositeMrs('apple', 'apple') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Apple.png',
    rules: ['RULE-SET,apple,Apple'],
  },
  {
    key: 'telegram',
    name: 'Telegram',
    providers: {
      telegram: geositeMrs('telegram', 'telegram'),
      telegram_ip: geoipMrs('telegram', 'telegram_ip'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Telegram.png',
    rules: ['RULE-SET,telegram,Telegram', 'RULE-SET,telegram_ip,Telegram,no-resolve'],
  },
  {
    key: 'cloudflare',
    name: 'Cloudflare',
    providers: {
      cloudflare: geositeMrs('cloudflare', 'cloudflare'),
      cloudflare_ip: geoipMrs('cloudflare', 'cloudflare_ip'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Cloudflare.png',
    rules: ['RULE-SET,cloudflare,Cloudflare', 'RULE-SET,cloudflare_ip,Cloudflare,no-resolve'],
  },
  {
    key: 'steam',
    name: 'Steam',
    providers: { steam: geositeMrs('steam', 'steam') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Steam.png',
    rules: ['RULE-SET,steam,Steam'],
  },
  {
    key: 'twitter',
    name: 'X',
    providers: {
      twitter: geositeMrs('twitter', 'twitter'),
      twitter_ip: geoipMrs('twitter', 'twitter_ip'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/X.png',
    rules: ['RULE-SET,twitter,X', 'RULE-SET,twitter_ip,X,no-resolve'],
  },
  {
    key: 'instagram',
    name: 'Instagram',
    providers: { instagram: geositeMrs('instagram', 'instagram') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Instagram.png',
    rules: ['RULE-SET,instagram,Instagram'],
  },
  {
    key: 'spotify',
    name: 'Spotify',
    providers: { spotify: geositeMrs('spotify', 'spotify') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png',
    rules: ['RULE-SET,spotify,Spotify'],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    providers: { tiktok: geositeMrs('tiktok', 'tiktok') },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/TikTok.png',
    rules: ['RULE-SET,tiktok,TikTok'],
  },
  {
    key: 'netflix',
    name: 'Netflix',
    providers: {
      netflix: geositeMrs('netflix', 'netflix'),
      netflix_ip: geoipMrs('netflix', 'netflix_ip'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Netflix.png',
    rules: ['RULE-SET,netflix,Netflix', 'RULE-SET,netflix_ip,Netflix,no-resolve'],
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

function main(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) {
    return { proxies: [], 'proxy-groups': [], rules: [] };
  }
  if (!Array.isArray(config.proxies)) {
    config.proxies = [];
  }

  try {
    delete config['global-client-fingerprint'];
    delete config['sub-rules'];

    const rawProxies = config.proxies;
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
    const fingerprintSupported = new Set(['vmess', 'vless', 'trojan', 'anytls']);

    for (const proxy of rawProxies) {
      if (!proxy || typeof proxy !== 'object' || Array.isArray(proxy)) continue;

      const originalName = proxy.name;
      if (typeof originalName !== 'string' || originalName.trim() === '') continue;

      if (excludeFilterEnable && excludeFilter.test(originalName)) continue;

      const proxyType = typeof proxy.type === 'string' ? proxy.type.toLowerCase() : 'unknown';

      if (fingerprintSupported.has(proxyType)) {
        if (proxy['client-fingerprint'] == null) {
          proxy['client-fingerprint'] = 'chrome';
        }
      }

      let matchedNormalRegionName = '';
      let matchedNormalRegion = false;
      const matchedGroups = [];

      for (const region of enabledDefinitions) {
        if (region.regex.test(originalName)) {
          matchedGroups.push(region.name);
          if (region.name !== NODE_RATE_LOW && region.name !== NODE_RATE_HIGH) {
            matchedNormalRegion = true;
            if (matchedNormalRegionName === '') {
              matchedNormalRegionName = region.name;
            }
          }
        }
      }

      const isLow = matchedGroups.includes(NODE_RATE_LOW);
      const isHigh = matchedGroups.includes(NODE_RATE_HIGH);
      let newName = originalName;

      if (matchedNormalRegionName !== '') {
        const flag = regionFlags[matchedNormalRegionName] || '🏳️';
        const counterKey = (isLow || isHigh) ? `${matchedNormalRegionName}_multi` : matchedNormalRegionName;
        const count = (regionCounters.get(counterKey) || 0) + 1;

        regionCounters.set(counterKey, count);
        const serial = String(count).padStart(2, '0');
        newName = `${flag} ${matchedNormalRegionName} ${serial}`;
      }

      if (isLow) {
        newName += ` ${extractMultiplier(originalName, false)}`;
      } else if (isHigh) {
        newName += ` ${extractMultiplier(originalName, true)}`;
      }

      proxy.name = newName;
      processedProxies.push(proxy);

      for (const groupName of matchedGroups) {
        if ((isLow || isHigh) && groupName !== NODE_RATE_LOW && groupName !== NODE_RATE_HIGH) continue;
        if (groupName in regionGroups) {
          regionGroups[groupName].proxies.push(newName);
        }
      }

      if (!matchedNormalRegion) otherProxies.push(newName);
    }

    config.proxies = processedProxies;

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
          otherProxies
        )
      );
    }

    const groupNamesOfSelect = [];
    const autoTestProxies = [];
    const loadBalanceProxies = [];

    for (const g of generatedRegionGroups) {
      if (!g.name.includes('-Rate')) {
        if (g.type === 'select') groupNamesOfSelect.push(g.name);
        else if (g.type === 'url-test') autoTestProxies.push(g.name);
        else if (g.type === 'load-balance') loadBalanceProxies.push(g.name);
      }
    }

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

      const currentProxyMode = 'proxyMode' in svc ? svc.proxyMode : 'default';
      functionalGroups.push({
        ...selectBaseOption,
        name: svc.name,
        icon: svc.icon,
        proxies: currentProxyMode in proxyModes ? proxyModes[currentProxyMode] : proxyModes['default'],
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

    const chinaDNS = ['https://dns.alidns.com/dns-query#Direct', 'https://doh.pub/dns-query#Direct'];
    const foreignDNS = ['https://dns.google/dns-query#Default', 'https://dns.cloudflare.com/dns-query#Default'];

    delete config.experimental;

    Object.assign(config, {
      mode: 'rule',
      'mixed-port': 7890,
      'allow-lan': true,
      ipv6: true,
      'bind-address': '*',
      'unified-delay': true,
      'tcp-concurrent': true,
      'find-process-mode': 'strict',
      'geodata-mode': false,
      'external-controller': '127.0.0.1:9090',
      'external-ui': 'ui',
      'external-ui-url': 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip',
      profile: {
        'store-selected': true,
        'store-fake-ip': true,
      },
      'proxy-groups': [globalGroup, ...functionalGroupsSorted, ...generatedRegionGroups],
      'rule-providers': finalRuleProviders,
      hosts: {
        'dns.alidns.com': ['223.5.5.5', '223.6.6.6', '2400:3200::1', '2400:3200:baba::1'],
        'doh.pub': ['1.12.12.12', '120.53.53.53'],
        'dns.cloudflare.com': ['1.1.1.1', '1.0.0.1'],
        'dns.google': ['8.8.8.8', '8.8.4.4', '2001:4860:4860::8888', '2001:4860:4860::8844'],
        'cn.bing.com': 'global.bing.com',
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
        'use-system-hosts': false,
        'prefer-h3': false,
        'enhanced-mode': 'fake-ip',
        'fake-ip-range': '198.18.0.1/16',
        'fake-ip-filter': [
          '*.lan',
          '*.local',
          'dns.msftncsi.com',
          'www.msftncsi.com',
          'www.msftconnecttest.com',
          'connectivitycheck.gstatic.com',
          'connectivitycheck.android.com',
          'connectivitycheck.platform.hicloud.com',
          'time.*.com',
          'time.*.gov',
          'time.*.edu.cn',
          'time.*.apple.com',
          'time-ios.apple.com',
          'time1.cloud.tencent.com',
          'ntp.*.com',
          'ntp.aliyun.com',
          'pool.ntp.org',
          '*.ntp.org',
          '+.msftconnecttest.com',
          '+.msftncsi.com',
          '+.srv.nintendo.net',
          '+.stun.playstation.net',
          '+.xboxlive.com',
          '+.ipv6.microsoft.com',
          'rule-set:fakeip_filter',
        ],
        'default-nameserver': ['223.5.5.5', '1.12.12.12'],
        'proxy-server-nameserver': [
          '223.5.5.5',
          '1.12.12.12',
          'https://dns.alidns.com/dns-query',
          'https://doh.pub/dns-query',
        ],
        nameserver: foreignDNS,
        'direct-nameserver': ['223.5.5.5', '119.29.29.29'],
        'direct-nameserver-follow-policy': true,
        'nameserver-policy': {
          'rule-set:private': chinaDNS,
          'rule-set:cn': chinaDNS,
          'rule-set:cn_additional': chinaDNS,
          'rule-set:apple_cn': chinaDNS,
          'rule-set:cloudflare_cn': chinaDNS,
          'rule-set:games_cn': chinaDNS,
          'rule-set:nvidia_cn': chinaDNS,
          'rule-set:gfw': foreignDNS,
        },
      },
    });

    config.proxies.push(
      { name: 'Dual Stack', type: 'direct' },
      { name: 'IPv4 Only', type: 'direct', 'ip-version': 'ipv4' },
      { name: 'IPv6 Only', type: 'direct', 'ip-version': 'ipv6' },
      { name: 'IPv4 Preferred', type: 'direct', 'ip-version': 'ipv4-prefer' },
      { name: 'IPv6 Preferred', type: 'direct', 'ip-version': 'ipv6-prefer' }
    );

    if (tunEnable) {
      config.tun = {
        enable: true,
        stack: 'mixed',
        'auto-route': true,
        'strict-route': true,
        'auto-redirect': false,
        'auto-detect-interface': true,
        'endpoint-independent-nat': true,
        'dns-hijack': ['any:53', 'tcp://any:53'],
        'udp-timeout': 300,
      };
    } else if ('tun' in config) {
      delete config.tun;
    }

    config.rules = [
      ...finalRules,
      'RULE-SET,cn_additional,Direct',
      'RULE-SET,cn,Direct',
      'RULE-SET,cn_ip,Direct,no-resolve',
      'RULE-SET,gfw,Default',
      'DOMAIN-SUFFIX,cn,Direct',
      'DOMAIN-SUFFIX,local,Direct',
      'DOMAIN-SUFFIX,lan,Direct',
      'MATCH,Default',
    ];

    return config;
  } catch (error) {
    return { proxies: [], 'proxy-groups': [], rules: [] };
  }
}
