# Mihomo (Clash Meta) 智能预处理脚本

<p align="center">
  <img src="https://img.shields.io/github/stars/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=yellow" alt="Stars">
  <img src="https://img.shields.io/github/license/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/zzzhhe999/Mihomo-Script-Rules?style=flat-square" alt="Language">
  <img src="https://img.shields.io/badge/Bettbox-QuickJS%20%7C%20ES2020-brightgreen?style=flat-square" alt="Bettbox">
</p>

<p align="center">
  <b>为 Bettbox 深度优化的订阅预处理脚本 · QuickJS 引擎 · ES2020 语法 · 一键接管机场原始订阅</b>
</p>

<p align="center">
  <b>自动重命名、过滤、分流、DNS 防污染，开箱即用，支持自行选择功能。</b>
</p>

<p align="center">
  <b>GitHub Actions 全自动化维护</b>
</p>

---

## 目录

- [1.简介](#1简介)
- [2.快速上手](#2快速上手)
- [3.效果对比](#3效果对比)
- [4.支持的服务/应用](#4支持的服务应用)
- [5.支持的国家/地区](#5支持的国家地区)
- [6.核心特性](#6核心特性)
- [7.个性化定制](#7个性化定制)
- [8.鸣谢](#8鸣谢)
- [9.许可证](#9许可证)

---

## 1.简介

这是一个为 **Bettbox（Mihomo 内核 / QuickJS 引擎）** 深度优化的 **JavaScript 订阅预处理脚本**。

大多数机场的原始订阅配置节点名称带有广告尾巴、过期通知混在节点列表里、缺少分流策略，DNS 容易泄漏污染，无法满足较高的使用需求。

本项目主要用于接管机场的原始订阅配置，通过自动执行**节点重命名、无效节点过滤、精细化策略组分流、智能 DNS 配置**，彻底解决原始订阅杂乱无章的问题，提供开箱即用的网络体验。

> **脚本**（`Mihomo-Script-Rules.js`）：根据节点名动态生成地区策略组，自动化程度最高，推荐 Bettbox 用户使用。

---

## 2.快速上手

提供两种使用方式，根据客户端支持情况选择：

### 2.1 脚本（推荐）

适用于支持 JS 预处理的客户端（Bettbox / FlClash 等）。脚本会根据节点名动态生成地区策略组，自动化程度最高。

> **Bettbox 用户优先使用脚本模式**：本脚本针对 Bettbox 的 QuickJS 引擎做了全面的语法兼容和防御性处理，是推荐的最佳搭配。

#### 2.1.1 获取脚本链接

**主链接（GitHub Raw）：**

```
https://raw.githubusercontent.com/zzzhhe999/Mihomo-Script-Rules/refs/heads/main/Mihomo-Script-Rules.js
```

**CDN 加速镜像（推荐国内用户使用）：**

```
https://fastly.jsdelivr.net/gh/zzzhhe999/Mihomo-Script-Rules@main/Mihomo-Script-Rules.js
```

#### 2.1.2 在客户端中导入

**Bettbox**

Ⅰ 进入 APP → 点击底部 **更多**

Ⅱ 找到 **脚本** 功能入口 → 点击右下角 **+** → 选择 **通过 URL 导入**

Ⅲ 粘贴上述脚本链接 → 命名 → **保存**

Ⅳ **脚本** 功能页中，将刚保存的脚本 **开关** 打开

Ⅴ **代理** 页可选择节点及策略

---

## 3.效果对比

### 3.1 策略组：处理前 vs 处理后

| 维度  | 处理前 | 处理后 |
| --- | --- | --- |
| 顶级分组 | 列表杂乱 | 按国家/地区 → 按应用 |
| 地区分组 | 无   | 共 16 个国家/地区（另有 `Others` 兜底组） |
| 应用分组 | 无   | 17 个独立应用策略组 |
| 节点选择 | 手动选择 | 按地区自动测速 → 自动选最快节点 |
| 节点命名 | 信息杂乱 | `HK 01` `JP 03 0.5x` |

### 3.2 节点命名：处理前 vs 处理后

```
处理前：
  香港 | 高速节点 | 官网 | 剩余流量
  日本 0.5x | 联系客服
  美国 | 到期时间

处理后：
  🇭🇰 HK 01
  🇯🇵 JP 01 0.5x
  🇺🇸 US 01 2.0x
  无法识别地区的节点 → 保留原名并追加序号（如 `示例节点 #01`），统一归入 `Others` 策略组
```

---

## 4.支持的服务/应用

脚本为以下 **17 个服务/应用** 自动创建独立策略组，各自使用专属规则集精准分流：

| 服务  | 策略组名称 | 规则来源 | 特殊处理 |
| --- | --- | --- | --- |
| AI 服务 | `AI` | `rule-set:ai`（geosite/category-ai-!cn） | 覆盖全部 AI 站点（ChatGPT、Claude 等） |
| YouTube | `YouTube` | `rule-set:youtube` | —   |
| FCM 推送 | `FCM` | `rule-set:googlefcm` | 保障 Android 推送 |
| Google | `Google` | `rule-set:google` + `rule-set:google_ip` | 域名 + IP 双重匹配 |
| GitHub | `GitHub` | `rule-set:github` | —   |
| Microsoft | `Microsoft` | `rule-set:microsoft` | —   |
| Apple | `Apple` | `rule-set:apple` | —   |
| Telegram | `Telegram` | `rule-set:telegram` + `rule-set:telegram_ip` | 域名 + IP 双重匹配 |
| Cloudflare | `Cloudflare` | `rule-set:cloudflare` + `rule-set:cloudflare_ip` | 域名 + IP 双重匹配 |
| Steam | `Steam` | `rule-set:steam` | —   |
| X   | `X` | `rule-set:twitter` + `rule-set:twitter_ip` | 域名 + IP 双重匹配 |
| Instagram | `Instagram` | `rule-set:instagram` | —   |
| Spotify | `Spotify` | `rule-set:spotify` | —   |
| TikTok | `TikTok` | `rule-set:tiktok` | —   |
| Netflix | `Netflix` | `rule-set:netflix` + `rule-set:netflix_ip` | 域名 + IP 双重匹配 |
| Emby | `Emby` | `rule-set:emby`（geosite/category-emby）+ `DOMAIN-SUFFIX,mb3admin.com` + `DOMAIN-KEYWORD,emby` | 域名 + 关键词多重匹配 |
| 广告拦截 | `AdBlock` | `rule-set:antiad` | 默认 REJECT，可切换直连 |

> 常规服务策略组提供 `Default`（跟随系统）、`Direct`（直连）、`Auto`（自动测速）、`Balance`（负载均衡）及各地地区组选项；`AdBlock` 提供 `REJECT`（拦截）和 `DIRECT`（放行）。

---

## 5.支持的国家/地区

脚本为以下 **16 个国家/地区** 自动创建地区分组，未识别到的放入 `Others` 策略组：

🇭🇰 HK · 🇯🇵 JP · 🇺🇸 US · 🇸🇬 SG · 🇹🇼 TW · 🇰🇷 KR · 🇬🇧 UK · 🇩🇪 DE · 🇫🇷 FR · 🇨🇦 CA · 🇦🇺 AU · 🇮🇳 IN · 🇹🇷 TR · 🇧🇷 BR · 🇦🇷 AR · 🇷🇺 RU

每个地区自动生成三个策略组：**Auto**、**Balance**、**手动选择节点**。

---

## 6.核心特性

### 6.1 节点智能归类与统一命名

- 根据节点名称中的关键词（中文、英文、国旗 Emoji）自动识别所属国家/地区
  
- 自动剥离机场广告、联系方式、流量信息等杂余内容（内置 50+ 条过滤正则）
  
- 倍率自动识别：低倍率（0.0x ~ 0.5x）、高倍率（2x+）节点自动标记
  
- 统一命名格式：`[国旗] [地区名（世界各国和地区名称代码）] [序号] [倍率]`
  
  - 普通节点：`🇭🇰 HK 01`
  - 低倍率节点：`🇯🇵 JP 02 0.5x`
  - 高倍率节点：`🇺🇸 US 03 3x`
- 无法识别地区的节点保留原名并追加序号（如 `示例节点 #01`），统一归入 `Others` 策略组
  

### 6.2 低质节点过滤

内置强力正则 `excludeFilter`，自动过滤包含以下关键词的无效条目：

`群` `返利` `循环` `官网` `客服` `网址` `获取` `订阅` `流量` `到期` `机场` `备用` `过期` `联系` `邮箱` `工单` `通知` `频道` `教程` `福利` `邀请` `剩余` `公益` `Expire` `⚠️` `@` 以及 URL 等

### 6.3 策略组分流

- 每个地区生成 3 层策略组：**手动选择节点** → **Auto** → **Balance**
  
- 自动测速间隔 180 秒，延迟容忍度 50ms，3 次失败后切换
  
- Balance 采用 `sticky-sessions` 策略，同域名固定走同一节点
  
- 全局 GLOBAL 组包含所有功能组和地区组
  

### 6.4 DNS 防污染

```
国内域名 → 阿里 DNS / DNSPod (DoH) → 直连
国外域名 → Google DNS / Cloudflare (DoH) → 代理
```

- **Fake-IP 模式**，缓存算法 ARC
  
- **Fake-IP 过滤**：`fake-ip-filter` 由 `rule-set:private`、`rule-set:fakeip_filter`、`rule-set:geolocation-cn` 构成。国内域名（geolocation-cn）直接返回真实 IP，跳过 Fake-IP 映射
  
- `nameserver-policy` 精准分流：`rule-set:gfw` 走国外 DNS；`rule-set:private`、`rule-set:cn`、`rule-set:geolocation-cn`、`rule-set:apple_cn`、`rule-set:cloudflare_cn`、`rule-set:games_cn` 走国内 DNS
  
- `proxy-server-nameserver` 动态拼接：在默认阿里 DNS + DNSPod（doh.pub）基础上，自动提取用户私有 DNS 服务器并注入，确保代理节点的域名解析使用正确的 DNS 通道
  
- `direct-nameserver-follow-policy`：直连请求跟随策略选择 DNS
  
- **纯净默认解析**：`nameserver` 数组仅保留 Google + Cloudflare DoH，杜绝国内 DNS 参与默认解析，防止 GFW 抢答污染未知境外域名
  
- **代理节点 DNS 感知**：自动提取代理节点的 `server` 域名，与用户自定义的 `nameserver-policy` / `proxy-server-nameserver-policy` 做交叉匹配，将匹配到的策略注入 `proxy-server-nameserver-policy`；同时将相关 hosts 映射注入到全局 hosts 中，确保代理节点域名的解析完全遵循用户意图

### 6.5 AdBlock（广告拦截）

- 覆盖国内外主流广告、统计、恶意追踪站点
  
- 策略组 `AdBlock` 默认 REJECT，可切换到 DIRECT 放行

### 6.6 自动补全客户端指纹

针对 'vmess'、'vless'、'trojan'、'anytls' 协议，自动补全 'client-fingerprint: chrome'，降低 'TLS' 指纹被识别和阻断的风险。

### 6.7 QUIC 管控

> **前提**：QUIC 走 UDP 443，**Windows**必须开启客户端 **TUN 模式**才能劫持（系统代理只处理 TCP）。详见 [6.8](#68-双栈--客户端-tun-模式)。

```js
'AND,((NETWORK,udp),(DST-PORT,443),(RULE-SET,private_ip,no-resolve)),Direct',
'AND,((NETWORK,udp),(DST-PORT,443),(OR,((RULE-SET,geolocation-cn),(RULE-SET,cn_ip,no-resolve)))),Direct',
'AND,((NETWORK,udp),(DST-PORT,443)),QUIC'
```

- **流量集中管控：** UDP 443 (QUIC) 流量集中拦截到独立策略组，默认走代理。可手动切换到 REJECT 彻底阻断 QUIC，解决部分环境下 QUIC 导致网页加载卡顿的问题。
- **国内外差异化处理：**
  - **国内流量（默认放行）**：匹配到 `rule-set:geolocation-cn` 或 `rule-set:cn_ip` 的 QUIC 流量直接走 **Direct**，保障国内应用（如淘宝、抖音、微信等）的极致加载速度。
  - **境外流量（手动管控）**：未匹配到国内规则的 QUIC 流量统一进入 `QUIC` 策略组，提供两种选项：
    - `Default`（默认代理）：允许 QUIC 流量正常通过代理服务器。
    - `REJECT`：强制阻断 QUIC。如果你在观看 YouTube 或使用 Google 搜索时遇到无限转圈、加载卡顿，建议选此项，迫使应用回退到更稳定的 TCP 连接。

### 6.8 双栈 & Windows 客户端 TUN 模式

- 注入五个直连节点：
  - `Dual Stack` → IPv4/IPv6 自动选择
  - `IPv4 Only` → 强制仅使用 IPv4
  - `IPv6 Only` → 强制仅使用 IPv6
  - `IPv4 Preferred` → 优先使用 IPv4
  - `IPv6 Preferred` → 优先使用 IPv6

- **TUN 模式由客户端管理**：Bettbox Windows 客户端内置 TUN 开关（系统代理 / TUN 模式）。电脑端推荐开启 TUN 模式以全量劫持 UDP 流量（使 QUIC 规则生效）。系统代理仅覆盖 TCP，不适用于游戏、UWP 应用和 QUIC 流量
  

### 6.9 规则自动更新

所有分流规则集每 **24 小时**自动更新，来源包括：

- [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat)（geosite/geoip .mrs 规则集，含 `path-in-bundle` 打包）
- [ShellCrash](https://github.com/juewuy/ShellCrash)（fakeip 过滤规则源头）
- [anti-AD](https://github.com/privacy-protection-tools/anti-AD)（广告拦截规则源头）

> **强制远程更新**：`fakeip_filter` （Fake-IP 过滤）与`antiad` （广告拦截）不声明 `path-in-bundle`，规则集不打包进内核内置 geo 数据，由本仓库 GitHub Actions 每日自动同步为自托管，每次更新均按更新间隔（24 小时）从远端精准拉取最新规则。

### 6.10 防御性架构与无损接管

- **防崩溃兜底**：每一处外部输入都经过显式类型校验 —— `typeof` 检查确保非对象输入不崩溃、`Array.isArray()` 保障数组操作安全、`== null` 兜底处理缺失字段。整个主流程包裹在 `try/catch` 中，极端异常下返回最小可用配置（空代理 + 空规则），确保网络绝不因脚本报错而断连。异常时除返回兜底配置外，会通过 `print()` 向 mihomo 日志输出错误信息，便于排查问题。
  
- **全量显式校验链**：节点对象遍历时依次校验 `proxy` 非空、`proxy.name` 为字符串、`proxy.type` 为字符串，任意一项不符即跳过，绝不抛出 `TypeError`。DNS 配置读取时对 `nameserver`、`proxy-server-nameserver` 做 `Array.isArray()` 守卫，防止字符串被 spread 拆成字符数组。
  
- **不可变配置合并**：采用浅拷贝 (`{ ...config }`) + 显式属性赋值，在注入策略组的同时完美保留用户在客户端内自定义的直连规则、前置代理等个性化配置，且**不修改原始 `config` 对象**，避免副作用污染调用方。
  
- **QuickJS / ES2020 兼容**：严格限制在 ES2020 语法子集内，使用 `print()` / `console.log()` 等 QuickJS 内置全局函数输出日志，不使用 `require` / `fetch` / `Buffer` 等 Node.js API，杜绝 `??=` / `String.replaceAll` / `Array.at` 等 ES2021+ 语法，确保在 Bettbox 的 QuickJS 引擎中稳定执行。

### 6.11 代理重命名追踪与 `dialer-proxy` 修复

- 节点按地区/倍率重命名时，自动记录 **原名称 → 新名称** 的映射关系
  
- 主流程结束后统一检查所有代理的 `dialer-proxy` 字段：
  - 指向**已改名**的代理 → 自动改写为新名称
  - 指向**存活且未改名**的代理 → 保持不变
  - 指向**被过滤移除**的代理 → 删除该字段，避免悬挂引用导致内核报错

### 6.12 其他

- **Sniffer 域名嗅探**：HTTP/TLS/QUIC 自动嗅探真实域名，跳过 `+.mijia.com`、`+.push.apple.com`、`+.lan`、`+.local` 等
  
- **NTP 时间同步**：每 30 分钟通过阿里 NTP 同步，防止系统时间不准导致证书错误
  
- **Hosts 硬编码**：DNS 服务器 IP 直写（阿里/DNSPod/Google/Cloudflare），`cn.bing.com` 重定向至 `global.bing.com`，并屏蔽哔哩哔哩 PCDN（`+.mcdn.bilivideo.com` 等 → `0.0.0.0`），防止 DNS 污染导致解析失败
  
- **节点图标**：每个策略组和地区组配有 Qure 图标
  
- **测速 URL 国内外分流**：国外节点用 Cloudflare，国内节点用华为
  
- **统一延迟测试**：`unified-delay` 开启，TCP 并发测试（`tcp-concurrent`）
  

---


---

## 7.个性化定制

脚本开头定义了所有可配置常量，直接编辑即可自定义。

### 7.1 策略组开关 (`ruleOptionsEnable`)

控制每个应用策略组是否开启。设为 `false` 可禁用不需要的服务，减少策略组数量。

```javascript
const ruleOptionsEnable = {
  AI: true,           // AI 服务 (ChatGPT, Claude)
  YouTube: true,      // YouTube
  FCM: true,          // FCM 推送
  Google: true,       // Google
  GitHub: true,       // GitHub
  Microsoft: true,    // Microsoft
  Apple: true,        // Apple
  Telegram: true,     // Telegram
  X: true,            // X (Twitter)
  Instagram: true,    // Instagram
  Steam: true,        // Steam
  Cloudflare: true,   // Cloudflare
  Spotify: true,      // Spotify
  TikTok: true,       // TikTok
  Netflix: true,      // Netflix
  AdBlock: true,      // 广告拦截
  Emby: true,         // Emby
};
```

### 7.2 地区策略组开关 (`regionDefinitionsEnable`)

控制哪些国家/地区生成独立的节点策略组。不需要的地区设为 `false` 即可。

```javascript
const regionDefinitionsEnable = {
  HK: true,           // 香港
  JP: true,           // 日本
  US: true,           // 美国
  SG: true,           // 新加坡
  TW: true,           // 台湾
  KR: true,           // 韩国
  UK: true,           // 英国
  DE: true,           // 德国
  FR: true,           // 法国
  CA: true,           // 加拿大
  AU: true,           // 澳大利亚
  IN: true,           // 印度
  TR: true,           // 土耳其
  BR: true,           // 巴西
  AR: true,           // 阿根廷
  RU: true,           // 俄罗斯
  'Low-Rate': true,   // 自动识别 0.0x ~ 0.5x 的低倍率节点
  'High-Rate': true,  // 自动识别 2x+ 的高倍率节点
};
```

### 7.3 全局开关

| 常量  | 作用  | 默认值 |
| --- | --- | --- |
| `excludeFilterEnable` | 是否开启杂质节点过滤 | `true` |
| `quicEnable` | QUIC 管控开关 | `true` |

### 7.4 杂质过滤正则 (`excludeFilter`)

如果你想自定义过滤规则，修改此正则。匹配到以下关键词的节点会被自动移除：

```javascript
const excludeFilter = /群|返利|循环|官[网址]|客服|网站|网址|获取|订阅|流量|到期|机场|下次|备用|过期|已用|联系|邮箱|工单|通知|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|https?:\/\/|www\.|\.com(?:$|[^a-zA-Z0-9])/u;
```

---

## 8.鸣谢

本项目的诞生离不开以下优秀开源项目：

| 项目  | 用途  |
| --- | --- |
| [Bettbox](https://github.com/appshubcc/Bettbox) | 推荐客户端 |
| [MyClash](https://github.com/AIsouler/MyClash) | 原始代码来源 |
| [Mihomo](https://github.com/MetaCubeX/mihomo) | 内核支持 |
| [Qure](https://github.com/Koolson/Qure) | 图标库 |
| [Meta 规则集](https://github.com/MetaCubeX/meta-rules-dat) | geosite / geoip .mrs 规则集 |
| [ShellCrash](https://github.com/juewuy/ShellCrash) | fakeip 过滤规则源头 |
| [anti-AD](https://github.com/privacy-protection-tools/anti-AD) | 广告拦截规则源头 |

---

## 9.许可证

本项目基于 **MIT License** 开源。详见 [LICENSE](./LICENSE) 文件。

你可以自由使用、修改、分发本项目的代码，只需保留原始版权声明。本项目不提供任何担保。

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/zzzhhe999">zzzhhe999</a> | 如果觉得好用，给个 ⭐ Star 吧！</sub>
</p>
