// 节点智能归类（地区/倍率）｜低质节点过滤｜指纹自动补全
// 策略组分流｜广告拦截｜QUIC 管控｜TUN 可选｜双栈直连
// DNS 智能分流（fake-ip）｜远程规则自动更新（mrs）

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
  香港: true,
  日本: true,
  美国: true,
  新加坡: true,
  台湾: true,
  韩国: true,
  英国: true,
  德国: true,
  法国: true,
  加拿大: true,
  澳大利亚: true,
  印度: true,
  土耳其: true,
  巴西: true,
  阿根廷: true,
  俄罗斯: true,
  低倍率节点: true,
  高倍率节点: true,
};

const excludeFilterEnable = true;

const excludeFilter = /群|返利|循环|官[网址]|客服|网站|网址|获取|订阅|流量|到期|机场|下次|备用|过期|已用|联系|邮箱|工单|通知|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|https?:\/\/|www\.|\.com(?:$|[^a-zA-Z0-9])/u;

const tunEnable = false;

const quicRule = 'AND,((NETWORK,UDP),(DST-PORT,443)),QUIC处理';

const rules = [
  'DOMAIN-SUFFIX,mcdn.bilivideo.com,REJECT',
  'DOMAIN-SUFFIX,mcdn.bilivideo.cn,REJECT',
  'DOMAIN-KEYWORD,mcdn.bili,REJECT',
  'RULE-SET,private,直连',
  'RULE-SET,private_ip,直连,no-resolve',
  'DOMAIN-SUFFIX,ibytedtos.com,直连',
  'DOMAIN-SUFFIX,bytecdn.cn,直连',
  'DOMAIN-SUFFIX,snssdk.com,直连',
  'DOMAIN-SUFFIX,iesdouyin.com,直连',
  'DOMAIN-SUFFIX,pstatp.com,直连',
  'DOMAIN-KEYWORD,douyin,直连',
  'RULE-SET,DownloadApps,直连',
  'RULE-SET,games_cn,直连',
  'RULE-SET,nvidia_cn,直连',
  'RULE-SET,cloudflare_cn,直连',
  'RULE-SET,apple_cn,直连',
  'DOMAIN,fsend.cn,直连',
  'DOMAIN-SUFFIX,jlc-jdgf.com,直连',
];

const regionDefinitions = [
  {
    name: '香港',
    regex: /🇭🇰|香港|港(?!口)|\bHK\b|hong\s*kong/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Hong_Kong.png',
    flag: '🇭🇰',
  },
  {
    name: '日本',
    regex: /🇯🇵|日本|东京|大阪|埼玉|\bJP\b|japan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Japan.png',
    flag: '🇯🇵',
  },
  {
    name: '美国',
    regex: /🇺🇸|美国|美区|洛杉矶|圣何塞|西雅图|纽约|芝加哥|达拉斯|\bUS\b|america|united\s*states/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_States.png',
    flag: '🇺🇸',
  },
  {
    name: '新加坡',
    regex: /🇸🇬|新加坡|狮城|\bSG\b|singapore/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Singapore.png',
    flag: '🇸🇬',
  },
  {
    name: '台湾',
    regex: /🇹🇼|台湾|台北|高雄|\bTW\b|taiwan/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Taiwan.png',
    flag: '🇹🇼',
  },
  {
    name: '韩国',
    regex: /🇰🇷|韩国|首尔|春川|\bKR\b|korea/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Korea.png',
    flag: '🇰🇷',
  },
  {
    name: '英国',
    regex: /🇬🇧|英国|伦敦|\bUK\b|\bGB\b|britain|united\s*kingdom/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/United_Kingdom.png',
    flag: '🇬🇧',
  },
  {
    name: '德国',
    regex: /🇩🇪|德国|法兰克福|柏林|\bDE\b|germany/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Germany.png',
    flag: '🇩🇪',
  },
  {
    name: '法国',
    regex: /🇫🇷|法国|巴黎|\bFR\b|france/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/France.png',
    flag: '🇫🇷',
  },
  {
    name: '加拿大',
    regex: /🇨🇦|加拿大|多伦多|温哥华|蒙特利尔|\bCA\b|canada/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Canada.png',
    flag: '🇨🇦',
  },
  {
    name: '澳大利亚',
    regex: /🇦🇺|澳大利亚|澳洲|悉尼|墨尔本|\bAU\b|australia/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Australia.png',
    flag: '🇦🇺',
  },
  {
    name: '印度',
    regex: /🇮🇳|印度|孟买|金奈|\bIN\b|india/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/India.png',
    flag: '🇮🇳',
  },
  {
    name: '土耳其',
    regex: /🇹🇷|土耳其|伊斯坦布尔|\bTR\b|turkey/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Turkey.png',
    flag: '🇹🇷',
  },
  {
    name: '巴西',
    regex: /🇧🇷|巴西|圣保罗|\bBR\b|brazil/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Brazil.png',
    flag: '🇧🇷',
  },
  {
    name: '阿根廷',
    regex: /🇦🇷|阿根廷|布宜诺斯艾利斯|\bAR\b|argentina/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Argentina.png',
    flag: '🇦🇷',
  },
  {
    name: '俄罗斯',
    regex: /🇷🇺|俄罗斯|莫斯科|圣彼得堡|\bRU\b|russia/i,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Russia.png',
    flag: '🇷🇺',
  },
  {
    name: '低倍率节点',
    regex: /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:低倍|低倍率|省流|下载|(?:^|[^\d])0\.[0-5])/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Available_1.png',
  },
  {
    name: '高倍率节点',
    regex: /^(?!.*(?:剩|期|客户端|软件|官网|流量|订阅|v\d(?!ray|less))).*(?:[*×xX✕✖⨉]\s*(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?|(?:^|[^\d.])(?:[2-9]\d*|[1-9]\d+)(?:\.\d+)?\s*(?:倍|倍率|[*×xX✕✖⨉]))/u,
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png',
  },
];

const ruleProviderFormatMrs = { format: 'mrs' };
const ruleProviderCommonDomain = { type: 'http', interval: 86400, behavior: 'domain' };
const ruleProviderCommonIpcidr = { type: 'http', interval: 86400, behavior: 'ipcidr' };
const ruleProviderCommonClassical = { type: 'http', interval: 86400, behavior: 'classical' };

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

function extractLowMultiplier(name) {
  let match = name.match(/(?:^|[^\d])(0\.[0-5])\s*(?:倍|倍率|[xX×])?/u);
  if (match) return match[1] + 'x';
  if (/低倍|低倍率/.test(name)) return '低倍';
  if (/省流/.test(name)) return '省流';
  if (/下载/.test(name)) return '下载';
  return '低倍';
}

function extractHighMultiplier(name) {
  let match = name.match(/(\d+(?:\.\d+)?)\s*[xX×倍]/u);
  if (match) return match[1] + 'x';
  match = name.match(/[×*xX]\s*(\d+(?:\.\d+)?)/u);
  if (match) return match[1] + 'x';
  return '';
}

const serviceConfigs = [
  {
    key: 'ai',
    name: 'AI',
    providers: {
      ai: geositeMrs('category-ai-!cn', 'ai'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/ChatGPT.png',
    rules: ['RULE-SET,ai,AI'],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    providers: {
      youtube: geositeMrs('youtube', 'youtube'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/YouTube.png',
    rules: ['RULE-SET,youtube,YouTube'],
  },
  {
    key: 'googlefcm',
    name: 'FCM',
    providers: {
      googlefcm: geositeMrs('googlefcm', 'googlefcm'),
    },
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
    providers: {
      github: geositeMrs('github', 'github'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/GitHub.png',
    rules: ['RULE-SET,github,GitHub'],
  },
  {
    key: 'microsoft',
    name: 'Microsoft',
    providers: {
      microsoft: geositeMrs('microsoft', 'microsoft'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Microsoft.png',
    rules: ['RULE-SET,microsoft,Microsoft'],
  },
  {
    key: 'apple',
    name: 'Apple',
    providers: {
      apple: geositeMrs('apple', 'apple'),
    },
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
    providers: {
      steam: geositeMrs('steam', 'steam'),
    },
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
    providers: {
      instagram: geositeMrs('instagram', 'instagram'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Instagram.png',
    rules: ['RULE-SET,instagram,Instagram'],
  },
  {
    key: 'spotify',
    name: 'Spotify',
    providers: {
      spotify: geositeMrs('spotify', 'spotify'),
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png',
    rules: ['RULE-SET,spotify,Spotify'],
  },
  {
    key: 'tiktok',
    name: 'TikTok',
    providers: {
      tiktok: geositeMrs('tiktok', 'tiktok'),
    },
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
  {
    key: 'adblock',
    name: '广告拦截',
    proxyMode: 'reject',
    providers: {
      adblockmihomolite: {
        ...geositeMrs('ads', 'adblockmihomolite'),
        interval: 43200,
        url: 'https://fastly.jsdelivr.net/gh/217heidai/adblockfilters@main/rules/adblockmihomolite.mrs',
      },
    },
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Advertising.png',
    rules: ['RULE-SET,adblockmihomolite,广告拦截'],
  },
];

function createRegionGroup(name, icon, proxies) {
  const autoTestName = `${name}-自动选择`;
  const loadBalanceName = `${name}-负载均衡`;

  return [
    {
      ...selectBaseOption,
      name,
      icon,
      proxies: [autoTestName, loadBalanceName, ...proxies],
    },
    {
      ...urlTestBaseOption,
      name: autoTestName,
      proxies,
    },
    {
      ...loadBalanceBaseOption,
      name: loadBalanceName,
      proxies,
    },
  ];
}

function main(config) {
  delete config['global-client-fingerprint'];

  if (!Array.isArray(config.proxies)) {
    config.proxies = [];
  }

  if (excludeFilterEnable) {
    config.proxies = config.proxies.filter((proxy) => {
      if (!proxy || !proxy.name) return false;
      return !excludeFilter.test(proxy.name);
    });
  }

  const fingerprintSupportedProxyTypes = ['vmess', 'vless', 'trojan', 'hysteria2', 'hy2', 'tuic'];
  for (const proxy of config.proxies) {
    const type = proxy.type?.toLowerCase();
    if (fingerprintSupportedProxyTypes.includes(type) && !proxy['client-fingerprint']) {
      proxy['client-fingerprint'] = 'chrome';
    }
  }

  const proxies = config.proxies;

  const allDirectOrReject = proxies.every((p) => {
    const type = p.type?.toLowerCase();
    return type === 'direct' || type === 'reject';
  });

  if (!proxies.length || allDirectOrReject) {
    throw new Error('配置文件中未找到有效代理节点，请使用机场提供的原始订阅配置进行覆写');
  }

  const enabledDefinitions = regionDefinitions.filter((r) => regionDefinitionsEnable[r.name] === true);
  const regionGroups = Object.fromEntries(enabledDefinitions.map((r) => [r.name, { ...r, proxies: [] }]));
  const otherProxies = [];

  const regionFlags = Object.fromEntries(
    enabledDefinitions
      .filter((r) => r.flag)
      .map((r) => [r.name, r.flag])
  );
  const regionCounters = {};
  let otherCounter = 0;

  for (const proxy of proxies) {
    const originalName = proxy.name;
    let matchedNormalRegionName = null;
    let matchedNormalRegion = false;
    let matchedGroups = [];

    for (const region of enabledDefinitions) {
      if (region.regex.test(originalName)) {
        matchedGroups.push(region.name);
        
        if (region.name !== '低倍率节点' && region.name !== '高倍率节点') {
          matchedNormalRegion = true;
          if (!matchedNormalRegionName) {
            matchedNormalRegionName = region.name;
          }
        }
      }
    }
    
    const isLowMultiplier = matchedGroups.includes('低倍率节点');
    const isHighMultiplier = matchedGroups.includes('高倍率节点');

    let newName = originalName;
    if (matchedNormalRegionName) {
      const flag = regionFlags[matchedNormalRegionName] || '🏳️';
      if (!regionCounters[matchedNormalRegionName]) regionCounters[matchedNormalRegionName] = 0;
      regionCounters[matchedNormalRegionName]++;
      const serial = regionCounters[matchedNormalRegionName].toString().padStart(2, '0');
      newName = `${flag} ${matchedNormalRegionName} ${serial}`;
    } else {
      otherCounter++;
      const serial = otherCounter.toString().padStart(2, '0');
      newName = `🌐 其他 ${serial}`;
    }

    if (isLowMultiplier) {
      const low = extractLowMultiplier(originalName);
      if (low) newName += ' ' + low;
    }
    if (isHighMultiplier) {
      const high = extractHighMultiplier(originalName);
      if (high) newName += ' ' + high;
    }

    proxy.name = newName;

    for (const groupName of matchedGroups) {
      if ((isLowMultiplier || isHighMultiplier) && groupName !== '低倍率节点' && groupName !== '高倍率节点') {
        continue;
      }
      regionGroups[groupName].proxies.push(newName);
    }

    if (!matchedNormalRegion) {
      otherProxies.push(newName);
    }
  }

  const generatedRegionGroups = enabledDefinitions
    .filter((r) => regionGroups[r.name].proxies.length > 0)
    .flatMap((r) => createRegionGroup(r.name, r.icon, regionGroups[r.name].proxies));

  if (otherProxies.length > 0) {
    generatedRegionGroups.push(
      ...createRegionGroup(
        '其他节点',
        'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png',
        otherProxies
      )
    );
  }

  const groupNamesOfSelect = generatedRegionGroups
    .filter((g) => g.type === 'select')
    .map((g) => g.name)
    .filter((n) => !n.includes('倍率'));

  const functionalGroups = [];
  const finalRules = [...rules];
  const finalRuleProviders = { ...baseRuleProviders };

  const proxyModes = {
    default: ['默认代理', '直连', '自动选择', '负载均衡', ...groupNamesOfSelect],
    reject: ['REJECT', 'DIRECT'],
  };

  functionalGroups.push(
    {
      ...selectBaseOption,
      name: '默认代理',
      proxies: ['自动选择', '直连', '负载均衡', ...groupNamesOfSelect],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Proxy.png',
    },
    {
      ...urlTestBaseOption,
      name: '自动选择',
      proxies: (() => {
        const names = generatedRegionGroups.filter((g) => g.type === 'url-test' && !g.name.includes('倍率')).map((g) => g.name);
        return names.length > 0 ? names : ['直连'];
      })(),
    },
    {
      ...loadBalanceBaseOption,
      name: '负载均衡',
      proxies: (() => {
        const names = generatedRegionGroups.filter((g) => g.type === 'load-balance' && !g.name.includes('倍率')).map((g) => g.name);
        return names.length > 0 ? names : ['直连'];
      })(),
    },
    {
      ...selectBaseOption,
      name: 'QUIC处理',
      proxies: ['默认代理', 'REJECT'],
      icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Lock.png',
    }
  );

  delete config['sub-rules'];
  
  const orderedServiceConfigs = [
    ...serviceConfigs.filter((s) => s.key === 'adblock'),
    ...serviceConfigs.filter((s) => s.key !== 'adblock'),
  ];

  for (const svc of orderedServiceConfigs) {
    if (!ruleOptionsEnable[svc.key]) continue;
    finalRules.push(...svc.rules);
    const providers = svc.providers || {};
    for (const [providerName, providerConfig] of Object.entries(providers)) {
      finalRuleProviders[providerName] = providerConfig;
    }
  
    functionalGroups.push({
      ...selectBaseOption,
      name: svc.name,
      icon: svc.icon,
      proxies: [...proxyModes[svc.proxyMode || 'default']],
    });
  }

  functionalGroups.push({
    ...selectBaseOption,
    name: '直连',
    proxies: ['🇨🇳 直连 | IPv4优先', '🇨🇳 直连 | IPv6优先', '🇨🇳 直连 | 双栈'],
    url: 'https://connectivitycheck.platform.hicloud.com/generate_204',
    icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/China_Map.png',
  });

  const functionalGroupDisplayOrder = [
    '默认代理',
    '直连',
    '自动选择',
    '负载均衡',
    'QUIC处理',
    '广告拦截',
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

  const functionalGroupsSorted = [...functionalGroups].sort((a, b) => {
    const indexA = functionalGroupDisplayOrder.indexOf(a.name);
    const indexB = functionalGroupDisplayOrder.indexOf(b.name);
    const orderA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
    const orderB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
    if (orderA !== orderB) return orderA - orderB;
    return functionalGroups.indexOf(a) - functionalGroups.indexOf(b);
  });

const regionSelectNames = generatedRegionGroups
  .filter((g) => g.type === 'select')
  .map((g) => g.name);
  
  const globalGroup = {
  ...selectBaseOption,
  name: 'GLOBAL',
  proxies: [...functionalGroupsSorted.map((g) => g.name), ...regionSelectNames],
  icon: 'https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png',
};

  const chinaDNS = [
    'https://dns.alidns.com/dns-query#直连',
    'https://doh.pub/dns-query#直连',
  ];

  const chinaDNSPlain = [
    'https://dns.alidns.com/dns-query',
    'https://doh.pub/dns-query',
  ];

  const foreignDNS = [
    'https://dns.google/dns-query#默认代理',
    'https://dns.cloudflare.com/dns-query#默认代理',
  ];

  const fallbackDNS = chinaDNS;

  config['sniffer'] = {
    enable: true,
    'force-dns-mapping': true,
    'parse-pure-ip': true,
    'override-destination': true,
    sniff: {
      HTTP: {
        ports: [80, '8080-8880'],
      },
      TLS: {
        ports: [443, 8443],
      },
      QUIC: {
        ports: [443, 8443],
      },
    },
    'skip-domain': [
      '+.mijia.com',
      '+.push.apple.com',
      'gs.apple.com',
      'gsp-ssl.ls.apple.com',
      '+.lan',
      '+.local',
    ],
  };

  config['dns'] = {
    enable: true,
    ipv6: true,
    listen: ':1053',
    'cache-algorithm': 'arc',
    'use-hosts': true,
    'use-system-hosts': false,
    'prefer-h3': false,
    'enhanced-mode': 'fake-ip',
    'fake-ip-range': '198.18.0.0/15',
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

    'default-nameserver': [
      '223.5.5.5',
      '1.12.12.12',
    ],

    'proxy-server-nameserver': [
      '223.5.5.5',
      '1.12.12.12',
      ...chinaDNSPlain,
    ],

    nameserver: [
      ...foreignDNS,
      ...fallbackDNS,
    ],

    'nameserver-policy': Object.fromEntries([
      ['rule-set:private', chinaDNS],
      ['rule-set:cn', chinaDNS],
      ['rule-set:cn_additional', chinaDNS],
      ['rule-set:apple_cn', chinaDNS],
      ['rule-set:cloudflare_cn', chinaDNS],
      ['rule-set:games_cn', chinaDNS],
      ['rule-set:nvidia_cn', chinaDNS],
      ['rule-set:gfw', foreignDNS],
    ]),

    'direct-nameserver': [
      '223.5.5.5',
      '119.29.29.29',
    ],
    'direct-nameserver-follow-policy': true,
  };

  config.proxies.push(
    {
      name: '🇨🇳 直连 | IPv4优先',
      type: 'direct',
      'ip-version': 'ipv4-prefer',
    },
    {
      name: '🇨🇳 直连 | IPv6优先',
      type: 'direct',
      'ip-version': 'ipv6-prefer',
    },
    {
      name: '🇨🇳 直连 | 双栈',
      type: 'direct',
    }
  );

  config['proxy-groups'] = [globalGroup, ...functionalGroupsSorted, ...generatedRegionGroups];
  config['rule-providers'] = finalRuleProviders;
  config['mode'] = 'rule';
  config['mixed-port'] = 7890;
  config['allow-lan'] = true;
  config['ipv6'] = true;
  config['bind-address'] = '*';
  config['unified-delay'] = true;
  config['tcp-concurrent'] = true;
  config['keep-alive-idle'] = 30;
  config['keep-alive-interval'] = 15;
  config['find-process-mode'] = 'strict';
  config['geodata-mode'] = false;
  config['external-controller'] = '127.0.0.1:9090';
  config['external-ui'] = 'ui';
  config['external-ui-url'] = 'https://github.com/Zephyruso/zashboard/releases/latest/download/dist.zip';
  
  config['profile'] = {
    'store-selected': true,
    'store-fake-ip': true,
  };

  config['experimental'] = {
    'quic-go-disable-gso': true,
    'quic-go-disable-ecn': true,
    'dialer-ip4p-convert': false,
  };

  config['hosts'] = {
    'dns.alidns.com': ['223.5.5.5', '223.6.6.6', '2400:3200::1', '2400:3200:baba::1'],
    'doh.pub': ['1.12.12.12', '120.53.53.53'],
    'dns.cloudflare.com': ['1.1.1.1', '1.0.0.1'],
    'dns.google': ['8.8.8.8', '8.8.4.4', '2001:4860:4860::8888', '2001:4860:4860::8844'],
    'cn.bing.com': 'global.bing.com',
  };

  config['ntp'] = {
    enable: true,
    'write-to-system': false,
    server: 'ntp.aliyun.com',
    port: 123,
    interval: 30,
    'dialer-proxy': 'DIRECT',
  };

  if (tunEnable) {
    config['tun'] = {
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
  } else {
    delete config['tun'];
  }
  
  config['rules'] = [
    ...finalRules,
    'RULE-SET,cn_additional,直连',
    'RULE-SET,cn,直连',
    'RULE-SET,cn_ip,直连,no-resolve',
    'GEOIP,CN,直连,no-resolve',
    'RULE-SET,gfw,默认代理',
    'DOMAIN-SUFFIX,cn,直连',
    'DOMAIN-SUFFIX,local,直连',
    'DOMAIN-SUFFIX,lan,直连',
    'GEOIP,LAN,直连,no-resolve',
    quicRule,
    'MATCH,默认代理',
  ];

  return config;
}
