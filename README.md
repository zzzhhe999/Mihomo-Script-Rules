# Mihomo (Clash Meta) 智能预处理脚本

<p align="center">
  <img src="https://img.shields.io/github/stars/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=yellow" alt="Stars">
  <img src="https://img.shields.io/github/license/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/zzzhhe999/Mihomo-Script-Rules?style=flat-square" alt="Language">
  <img src="https://img.shields.io/badge/Mihomo-v1.19%2B-brightgreen?style=flat-square" alt="Mihomo">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square" alt="PRs Welcome">
</p>

<p align="center">
  <b>🚀 一键接管机场原始订阅，自动重命名、过滤、分流、DNS 防污染，开箱即用，支持自行选择功能。</b>
</p>

<p align="center">
  <b>📦 提供「脚本」与「纯配置」两种形态，适配不同客户端 · GitHub Actions 全自动化维护</b>
</p>

---

## 目录

- [1.简介](#1简介)
- [2.效果对比](#2效果对比)
- [3.支持的服务/应用](#3支持的服务应用)
- [4.支持的国家/地区](#4支持的国家地区)
- [5.核心特性](#5核心特性)
- [6.快速上手](#6快速上手)
- [7.客户端兼容性](#7客户端兼容性)
- [8.个性化定制](#8个性化定制)
- [9.脚本维护与更新](#9脚本维护与更新)
- [10.鸣谢](#10鸣谢)
- [11.许可证](#11许可证)

---

## 1.简介

这是一个为 **Mihomo (Clash Meta)** 内核设计的 **JavaScript 订阅预处理脚本**，同时提供自动生成的 **YAML 纯配置文件**。

大多数机场的原始订阅配置节点名称带有广告尾巴、过期通知混在节点列表里、缺少分流策略，DNS 容易泄漏污染，无法满足较高的使用需求。

本项目主要用于接管机场的原始订阅配置，通过自动执行**节点重命名、无效节点过滤、精细化策略组分流、智能 DNS 配置**，彻底解决原始订阅杂乱无章的问题，提供开箱即用的网络体验。

> **核心工程优势：**
> 本脚本基于 ES2020 现代语法深度重构，完美兼容 QuickJS 引擎。采用防御性编程与无损合并（Merge）机制，能安全隔离机场下发的脏数据（如空节点、缺失协议），并在保留用户原有自定义规则的前提下进行配置挂载，彻底杜绝引擎崩溃与客户端假死，保障高频执行下的绝对稳定。

> **两种模式：**
> - **脚本**（`Mihomo-Script-Rules.js`）：根据节点名动态生成地区策略组，自动化程度最高，推荐大多数用户使用。
> - **纯配置**（`Config/mihomoConfig.yaml`）：静态配置，适用于不支持 JS 脚本的客户端，需自行填入节点。

---

## 2.效果对比

### 2.1 策略组：处理前 vs 处理后

| 维度 | 处理前 | 处理后 |
| --- | --- | --- |
| 顶级分组 | 列表杂乱 | 按国家/地区 → 按应用 |
| 地区分组 | 无 | 共 16 个国家/地区 |
| 应用分组 | 无 | 16 个独立应用策略组 |
| 节点选择 | 手动选择 | 按地区自动测速 → 自动选最快节点 |
| 节点命名 | 信息杂乱 | `香港 01` `日本 03 0.5x` |

### 2.2 节点命名：处理前 vs 处理后

```
处理前：
  香港 | 高速节点 | 官网 | 剩余流量
  日本 0.5x | 联系客服
  美国 | 到期时间
  某机场专线 | VIP节点 | 客服@xxx

处理后：
  🇭🇰 香港 01
  🇯🇵 日本 01 0.5x
  🇺🇸 美国 01 2.0x
  某机场专线 | VIP节点 | 客服@xxx  → 保留原名，归入 `Others` 策略组
```

---

## 3.支持的服务/应用

脚本为以下 **16 个服务/应用** 自动创建独立策略组，各自使用专属规则集精准分流：

| 服务 | 策略组名称 | 规则来源 | 特殊处理 |
| --- | --- | --- | --- |
| AI 服务 | `AI` | `geosite:anthropic/openai` | ChatGPT、Claude 等 |
| YouTube | `YouTube` | `geosite:youtube` | — |
| FCM 推送 | `FCM` | `geosite:googlefcm` | 保障 Android 推送 |
| Google | `Google` | `geosite:google` + `geoip:google` | 域名 + IP 双重匹配 |
| GitHub | `GitHub` | `geosite:github` | — |
| Microsoft | `Microsoft` | `geosite:microsoft` | — |
| Apple | `Apple` | `geosite:apple` | — |
| Telegram | `Telegram` | `geosite:telegram` + `geoip:telegram` | 域名 + IP 双重匹配 |
| Cloudflare | `Cloudflare` | `geosite:cloudflare` + `geoip:cloudflare` | 域名 + IP 双重匹配 |
| Steam | `Steam` | `geosite:steam` | — |
| X | `X` | `geosite:twitter` + `geoip:twitter` | 域名 + IP 双重匹配 |
| Instagram | `Instagram` | `geosite:instagram` | — |
| Spotify | `Spotify` | `geosite:spotify` | — |
| TikTok | `TikTok` | `geosite:tiktok` | — |
| Netflix | `Netflix` | `geosite:netflix` + `geoip:netflix` | 域名 + IP 双重匹配 |
| 广告拦截 | `AdBlock` | `adblockmihomolite` | 默认 REJECT，可切换直连 |

> 常规服务策略组提供 `Default`（跟随系统）、`Direct`（直连）、`Auto`（自动测速）、`Balance`（负载均衡）及各地地区组选项；`AdBlock` 提供 `REJECT`（拦截）和 `DIRECT`（放行）。

---

## 4.支持的国家/地区

脚本为以下 **16 个国家/地区** 自动创建地区分组，未识别到的放入 `Others` 策略组：

🇭🇰 香港 · 🇯🇵 日本 · 🇺🇸 美国 · 🇸🇬 新加坡 · 🇹🇼 台湾 · 🇰🇷 韩国 · 🇬🇧 英国 · 🇩🇪 德国 · 🇫🇷 法国 · 🇨🇦 加拿大 · 🇦🇺 澳大利亚 · 🇮🇳 印度 · 🇹🇷 土耳其 · 🇧🇷 巴西 · 🇦🇷 阿根廷 · 🇷🇺 俄罗斯

每个地区自动生成三个策略组：**手动选择** → **自动测速** → **负载均衡**。

---

## 5.核心特性

### 5.1 节点智能归类与统一命名

- 根据节点名称中的关键词（中文、英文、国旗 Emoji）自动识别所属国家/地区

- 自动剥离机场广告、联系方式、流量信息等杂余内容（内置 50+ 条过滤正则）

- 倍率自动识别：低倍率（0.1x ~ 0.5x）、高倍率（2x+）节点自动标记

- 统一命名格式：`[国旗] [地区名] [序号] [倍率]`

  - 普通节点：`🇭🇰 香港 01`
  - 低倍率节点：`🇯🇵 日本 02 0.5x`
  - 高倍率节点：`🇺🇸 美国 03 3x`

- 无法识别地区的节点保留原名，统一归入 `Others` 策略组

### 5.2 低质节点过滤

内置强力正则 `excludeFilter`，自动过滤包含以下关键词的无效条目：

`群` `返利` `循环` `官网` `客服` `网址` `获取` `订阅` `流量` `到期` `机场` `备用` `过期` `联系` `邮箱` `工单` `通知` `频道` `教程` `福利` `邀请` `剩余` `公益` `Expire` `⚠️` `@` 以及 URL 等

### 5.3 策略组分流

- 每个地区生成 3 层策略组：**手动选择 (Select)** → **自动测速 (URL-Test)** → **负载均衡 (Load-Balance)**

- 自动测速间隔 180 秒，延迟容忍度 50ms，3 次失败后切换

- 负载均衡采用 `sticky-sessions` 策略，同域名固定走同一节点

- 全局 GLOBAL 组包含所有功能组和地区组

### 5.4 DNS 防污染

```
国内域名 → 阿里 DNS / DNSPod (DoH) → 直连
国外域名 → Google DNS / Cloudflare (DoH) → 代理
```

- **Fake-IP 模式**，缓存算法 ARC

- `nameserver-policy` 精准分流：gfw 列表走国外 DNS，cn/private 列表走国内 DNS

- `proxy-server-nameserver` 兜底：避免代理服务器 DNS 请求走代理本身

- `direct-nameserver-follow-policy`：直连请求跟随策略选择 DNS

- **纯净默认解析**：从默认 `nameserver` 数组中彻底剥离国内 DNS，防止并发查询时遭 GFW 抢答污染，确保未知境外域名的解析绝对安全。

### 5.5 AdBlock（广告拦截）

- 深度集成 [adblockmihomolite](https://github.com/217heidai/adblockfilters) 规则集

- 每 24 小时自动更新一次规则

- 策略组 `AdBlock` 默认 REJECT，可切换到 DIRECT 放行

- **强制远程更新**：通过显式抹除配置中的 `path-in-bundle` 属性，强制内核无视本地老旧的内置规则库，确保每次均从 GitHub 远端精准拉取最新规则。

### 5.6 自动补全客户端指纹

针对 'vmess'、'vless'、'trojan'、'anytls' 协议，自动补全 'client-fingerprint: chrome'，降低 'TLS' 指纹被识别和阻断的风险。

> **为什么不包括 Hysteria2 / TUIC？** Hysteria2 使用独立的 `fingerprint`（证书钉扎）字段，TUIC 不涉及 TLS 指纹，两者均不支持 uTLS 指纹机制，注入无效字段会被内核静默忽略。

### 5.7 QUIC 管控

```
'AND,((NETWORK,udp),(DST-PORT,443),(OR,((RULE-SET,cn_additional),(RULE-SET,cn_ip,no-resolve)))),Direct',
'AND,((NETWORK,udp),(DST-PORT,443)),QUIC'
```

- **流量集中管控：** UDP 443 (QUIC) 流量集中拦截到独立策略组，默认走代理。可手动切换到 REJECT 彻底阻断 QUIC，解决部分环境下 QUIC 导致网页加载卡顿的问题。
- **国内外差异化处理：**
  - **🇨🇳 国内流量（默认放行）**：匹配到国内域名或 IP 的 QUIC 流量会直接走 **直连**，保障国内应用（如淘宝、抖音、微信等）的极致加载速度。
  - **🌐 境外流量（手动管控）**：未匹配到国内规则的 QUIC 流量统一进入 `QUIC` 策略组，提供两种选项：
    - `Default`（默认代理）：允许 QUIC 流量正常通过代理服务器。
    - `REJECT`：强制阻断 QUIC。如果你在观看 YouTube 或使用 Google 搜索时遇到无限转圈、加载卡顿，建议选此项，迫使应用回退到更稳定的 TCP 连接。

### 5.8 双栈 & TUN 模式

- 注入三个直连节点：
  - `Direct | IPv4 Preferred` → 优先使用 IPv4
  - `Direct | IPv6 Preferred` → 优先使用 IPv6
  - `Direct | Dual Stack` → IPv4/IPv6 自动选择

- TUN 模式一键开关（`tunEnable` 常量），电脑端推荐开启

### 5.9 规则自动更新

所有分流规则集每 **24 小时**自动更新，来源包括：

- [MetaCubeX/meta-rules-dat](https://github.com/MetaCubeX/meta-rules-dat)（geosite/geoip 核心规则）
- [wwqgtxx/clash-rules](https://github.com/wwqgtxx/clash-rules)（直连/GFW 规则）
- [217heidai/adblockfilters](https://github.com/217heidai/adblockfilters)（广告拦截规则）
- [AIsouler/MyClash](https://github.com/AIsouler/MyClash)（下载类应用规则）

### 5.10 极致的防御性架构与无损接管

- **防崩溃兜底**：每一处外部输入都经过显式类型校验 —— `typeof` 检查确保非对象输入不崩溃、`Array.isArray()` 保障数组操作安全、`== null` 兜底处理缺失字段。整个主流程包裹在 `try/catch` 中，极端异常下返回最小可用配置（空代理 + 空规则），确保网络绝不因脚本报错而断连。

- **全量显式校验链**：节点对象遍历时依次校验 `proxy` 非空、`proxy.name` 为字符串、`proxy.type` 为字符串，任意一项不符即跳过，绝不抛出 `TypeError`。

- **无损配置合并**：摒弃粗暴的顶层字段覆盖，采用 `Object.assign` 与扩展运算符 (`...`)，在注入策略组的同时，完美保留用户在客户端内自定义的直连规则、前置代理等个性化配置。

- **QuickJS 兼容**：严格限制在 ES2020 语法子集内，不使用 `?.`、`??`、`??=`、`class`、`async/await` 等 QuickJS 不支持或行为不一致的语法，确保在各客户端（Bettbox、FlClash 等）的 QuickJS 引擎中稳定执行。

### 5.11 其他

- **Sniffer 域名嗅探**：HTTP/TLS/QUIC 自动嗅探真实域名

- **NTP 时间同步**：每 30 分钟通过阿里 NTP 同步，防止系统时间不准导致证书错误

- **Hosts 硬编码**：防止 DNS 污染导致 DNS 服务器本身解析失败

- **节点图标**：每个策略组配有 Qure 精美图标

- **测速 URL 国内外分流**：国外节点用 Cloudflare，国内节点用华为

- **统一延迟测试**：`unified-delay` 开启，TCP 并发测试

---

## 6.快速上手

提供两种使用方式，根据客户端支持情况选择：

### 6.1 脚本（推荐）

适用于支持 JS 预处理的客户端（Bettbox / FlClash / Clash Verge Rev 等）。脚本会根据节点名动态生成地区策略组，自动化程度最高。

#### 6.1.1 获取脚本链接

**主链接（GitHub Raw）：**

```
https://raw.githubusercontent.com/zzzhhe999/Mihomo-Script-Rules/refs/heads/main/Mihomo-Script-Rules.js
```

**CDN 加速镜像（推荐国内用户使用）：**

```
https://fastly.jsdelivr.net/gh/zzzhhe999/Mihomo-Script-Rules@main/Mihomo-Script-Rules.js
```

#### 6.1.2 在客户端中导入

**Bettbox / FlClash：**

Ⅰ 进入 APP → 点击底部 **更多**

Ⅱ 找到 **脚本** 功能入口 → 点击右下角 **+** → 选择 **通过 URL 导入**

Ⅲ 粘贴上述脚本链接 → 命名 → **保存**

Ⅳ **脚本** 功能页中，将刚保存的脚本 **开关** 打开

Ⅴ **代理** 页可选择节点及策略

**Clash Verge / Clash Nyanpasu / Clash Verge Rev：**

Ⅰ 进入 **配置** 页面 → 找到你的订阅配置

Ⅱ 点击编辑 → 在 **预处理脚本** 处填入脚本链接

Ⅲ 保存并更新订阅

### 6.2 纯配置文件

适用于不支持 JS 脚本的客户端，或不想用脚本的用户。配置文件由脚本自动生成，但**不含动态地区分组**（需手动填入节点）。

#### 6.2.1 获取配置文件链接

**主链接：**

```
https://raw.githubusercontent.com/zzzhhe999/Mihomo-Script-Rules/refs/heads/main/Config/mihomoConfig.yaml
```

**CDN 加速镜像：**

```
https://fastly.jsdelivr.net/gh/zzzhhe999/Mihomo-Script-Rules@main/Config/mihomoConfig.yaml
```

#### 6.2.2 使用方式

1. 下载上述 yaml 文件

2. 将文件中 `proxies` 部分替换为你自己的节点（从机场订阅获取）

3. 导入到客户端，手动填入节点

> **纯配置与脚本的差异**：纯配置无法根据节点名自动生成地区策略组，未匹配到节点的策略组会回退到 REJECT。如果客户端支持脚本，强烈建议用方式一。

---

## 7.客户端兼容性

| 客户端 | 兼容性 | 备注 |
| --- | --- | --- |
| [Bettbox](https://github.com/appshubcc/Bettbox) | 完美 | **强烈推荐**，原生支持 JS 脚本，完美契合本脚本的 QuickJS 防御性架构 |
| [FlClash](https://github.com/chen08209/FlClash) | 完美 | 推荐，原生支持 JS 脚本预处理，执行效率极高 |
| [Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev) | 兼容 | 需在配置编辑中手动设置预处理脚本 |
| [Clash Nyanpasu](https://github.com/libnyanpasu/clash-nyanpasu) | 兼容 | 同上 |
| [Clash Verge](https://github.com/clash-verge-rev/clash-verge-rev) | 旧版 | 旧版可能不支持，建议升级到 Verge Rev |
| Stash / Shadowrocket | 不兼容 | JS 预处理语法不同，建议用 sub-store 中转或使用纯配置 |
| Surge / Quantumult X | 不兼容 | 同上 |

### 7.1 Stash / Shadowrocket / Surge 等其他客户端

> ⚠️ 这些客户端不完全兼容 Mihomo 的 JS 预处理语法。建议改用 **订阅转换工具**（如 sub-store），将脚本挂载在转换流程中，或直接使用上方的纯配置文件。

---

## 8.个性化定制

脚本开头定义了所有可配置常量，直接编辑即可自定义。

### 8.1 策略组开关 (`ruleOptionsEnable`)

控制每个应用策略组是否开启。设为 `false` 可禁用不需要的服务，减少策略组数量。

```javascript
const ruleOptionsEnable = {
  ai: true,           // AI 服务 (ChatGPT, Claude, Gemini…)
  youtube: true,      // YouTube
  googlefcm: true,    // FCM 推送 (Android 必备)
  google: true,       // Google 搜索
  github: true,       // GitHub
  microsoft: true,    // Microsoft 服务
  apple: true,        // Apple 服务
  telegram: true,     // Telegram
  twitter: true,      // X (Twitter)
  instagram: true,    // Instagram
  steam: true,        // Steam
  cloudflare: true,   // Cloudflare
  spotify: true,      // Spotify
  tiktok: true,       // TikTok
  netflix: true,      // Netflix
  adblock: true,      // 广告拦截
};
```

### 8.2 地区策略组开关 (`regionDefinitionsEnable`)

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
  'Low-Rate': true,   // 自动识别 0.1x ~ 0.5x 的低倍率节点
  'High-Rate': true,  // 自动识别 2x+ 的高倍率节点
};
```

### 8.3 全局开关

| 常量 | 作用 | 默认值 | 推荐 |
| --- | --- | --- | --- |
| `excludeFilterEnable` | 是否开启杂质节点过滤 | `true` | 始终开启 |
| `tunEnable` | TUN 模式开关 | `false` | 电脑端建议 `true`，手机端保持 `false` |

### 8.4 杂质过滤正则 (`excludeFilter`)

如果你想自定义过滤规则，修改此正则。匹配到以下关键词的节点会被自动移除：

```javascript
const excludeFilter = /群|返利|循环|官[网址]|客服|网站|网址|获取|订阅|流量|到期|机场|下次|备用|过期|已用|联系|邮箱|工单|通知|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|https?:\/\/|www\.|\.com(?:$|[^a-zA-Z0-9])/u;
```

---

## 9.脚本维护与更新

- 本脚本持续维护

- 规则集（geosite/geoip/广告拦截）由上游项目自动更新，脚本本身无需频繁改动

- 如果你发现某个服务的分流规则过时或有更好的替代规则集，欢迎提 **Issue**

---

## 10.鸣谢

本项目的诞生离不开以下优秀开源项目：

| 项目 | 用途 |
| --- | --- |
| [MyClash](https://github.com/AIsouler/MyClash) | 原始代码来源，核心逻辑参考 |
| [Mihomo](https://github.com/MetaCubeX/mihomo) | 内核支持 |
| [Qure](https://github.com/Koolson/Qure) | 精美图标库 |
| [Meta 规则集](https://github.com/MetaCubeX/meta-rules-dat) | geosite / geoip 规则数据 |
| [Clash 规则集](https://github.com/wwqgtxx/clash-rules) | 直连 / fakeip / GFW 规则 |
| [广告过滤规则](https://github.com/217heidai/adblockfilters) | Mihomo 广告拦截规则 |
| [Bettbox](https://github.com/appshubcc/Bettbox) | 推荐客户端 |

---

## 11.许可证

本项目基于 **MIT License** 开源。详见 [LICENSE](./LICENSE) 文件。

你可以自由使用、修改、分发本项目的代码，只需保留原始版权声明。本项目不提供任何担保。

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/zzzhhe999">zzzhhe999</a> | 如果觉得好用，给个 ⭐ Star 吧！</sub>
</p>

