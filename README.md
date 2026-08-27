# Mihomo (Clash Meta) 智能预处理脚本

<p align="center">
  <img src="https://img.shields.io/github/stars/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=yellow" alt="Stars">
  <img src="https://img.shields.io/github/license/zzzhhe999/Mihomo-Script-Rules?style=flat-square&color=blue" alt="License">
  <img src="https://img.shields.io/github/languages/top/zzzhhe999/Mihomo-Script-Rules?style=flat-square" alt="Language">
  <img src="https://img.shields.io/badge/Bettbox-QuickJS%20%7C%20ES2020-brightgreen?style=flat-square" alt="Bettbox">
</p>

<p align="center">
  <b>为 Bettbox 深度优化的订阅预处理脚本 · QuickJS 引擎 · ES2020 语法 · GitHub Actions 全自动维护</b>
</p>

---

## 目录

- [1.简介](#1简介)
- [2.快速上手](#2快速上手)
- [3.功能](#3功能)
  - [3.1 服务策略组](#31-服务策略组)
  - [3.2 地区与倍率分组](#32-地区与倍率分组)
- [4.核心特性](#4核心特性)
  - [4.1 节点处理](#41-节点处理)
  - [4.2 策略组架构](#42-策略组架构)
  - [4.3 DNS 防污染](#43-dns-防污染)
  - [4.4 网络特性](#44-网络特性)
- [5.个性化定制](#5个性化定制)
  - [5.1 服务开关](#51-服务开关)
  - [5.2 地区与倍率开关](#52-地区与倍率开关)
  - [5.3 全局开关](#53-全局开关)
  - [5.4 过滤正则](#54-过滤正则)
- [6.规则集与自动更新](#6规则集与自动更新)
- [7.鸣谢](#7鸣谢)
- [8.许可证](#8许可证)

---

## 1.简介

本项目是运行在 **Bettbox**（Mihomo 内核 / QuickJS 引擎）内的 **JavaScript 订阅预处理脚本**。

机场原始订阅普遍存在三类问题：节点名混入广告、过期提醒等杂质；缺少分流策略；DNS 容易泄漏污染。脚本接管订阅后自动完成四件事：

- **节点重命名**：按国家/地区 + 倍率统一命名，自动移除杂质节点
- **策略组分流**：生成地区组、服务组、倍率组，开箱即用
- **DNS 防污染**：Fake-IP + 国内外 DNS 分流，杜绝泄漏
- **按需定制**：每个服务、地区、功能均可独立开关

---

## 2.快速上手

### 2.1 获取脚本链接

**主链接：**

```
https://raw.githubusercontent.com/zzzhhe999/Mihomo-Script-Rules/refs/heads/main/Mihomo-Script-Rules.js
```

**CDN 加速镜像：**

```
https://fastly.jsdelivr.net/gh/zzzhhe999/Mihomo-Script-Rules@main/Mihomo-Script-Rules.js
```

### 2.2 在 Bettbox 客户端中导入

Ⅰ 进入 APP → 点击底部 **更多**

Ⅱ 找到 **脚本** 功能入口 → 点击右下角 **+** → 选择 **通过 URL 导入**

Ⅲ 粘贴上述脚本链接 → 命名 → **保存**

Ⅳ **脚本** 功能页中，将刚保存的脚本 **开关** 打开

Ⅴ 回到 **代理** 页，选择该脚本生成的配置，即可在 **代理** 页选择节点及策略组

---

## 3.功能

### 3.1 服务策略组

脚本为以下 **17 个服务/应用** 创建独立策略组，每个组绑定专属规则集，对应流量自动分流：

| 服务 | 策略组名称 | 规则来源 |
| --- | --- | --- |
| AI 服务 | `AI` | `rule-set:ai` |
| YouTube | `YouTube` | `rule-set:youtube` |
| FCM 推送 | `FCM` | `rule-set:googlefcm` |
| Google | `Google` | `rule-set:google` + `rule-set:google_ip` |
| GitHub | `GitHub` | `rule-set:github` |
| Microsoft | `Microsoft` | `rule-set:microsoft` |
| Apple | `Apple` | `rule-set:apple` |
| Telegram | `Telegram` | `rule-set:telegram` + `rule-set:telegram_ip` |
| Cloudflare | `Cloudflare` | `rule-set:cloudflare` + `rule-set:cloudflare_ip` |
| Steam | `Steam` | `rule-set:steam` + `rule-set:steam_asn` |
| X | `X` | `rule-set:twitter` + `rule-set:twitter_ip` |
| Instagram | `Instagram` | `rule-set:instagram` |
| Spotify | `Spotify` | `rule-set:spotify` |
| TikTok | `TikTok` | `rule-set:tiktok` |
| Netflix | `Netflix` | `rule-set:netflix` + `rule-set:netflix_ip` |
| Emby | `Emby` | `rule-set:emby` + `DOMAIN-SUFFIX,mb3admin.com` + `DOMAIN-KEYWORD,emby` |
| 广告拦截 | `AdBlock` | `rule-set:antiad` |

> 服务策略组默认提供 `Default`（跟随默认出口）、`Direct`、`Auto`、`Balance` 及地区组选项；`AdBlock` 仅提供 `REJECT`（拦截）与 `DIRECT`（放行）。

### 3.2 地区与倍率分组

**16 个国家/地区**自动生成地区分组，未识别地区的节点保留原名并追加序号（如 `示例节点 #01`），统一归入 `Others` 组：

🇭🇰 HK · 🇯🇵 JP · 🇺🇸 US · 🇸🇬 SG · 🇹🇼 TW · 🇰🇷 KR · 🇬🇧 UK · 🇩🇪 DE · 🇫🇷 FR · 🇨🇦 CA · 🇦🇺 AU · 🇮🇳 IN · 🇹🇷 TR · 🇧🇷 BR · 🇦🇷 AR · 🇷🇺 RU

另有两个**倍率分组**，同样生成三层策略组并加入 `Default` 组：

- `Low-Rate`：节点名含 `低倍 / 低倍率 / 省流 / 下载 / 0.0x~0.5x` 等标记
- `High-Rate`：节点名含 `2倍 / 3倍率 / 2x / ×2` 等倍率标记

每个地区（含倍率组）生成三层策略组：**手动选择 → `Auto`（自动测速）→ `Balance`（负载均衡）**。

---

## 4.核心特性

### 4.1 节点处理

**归类与重命名**

根据节点名中的中文、英文、国旗 Emoji 关键词识别所属地区，重命名格式：

- 普通节点：`🇭🇰 HK 01`
- 低倍率节点：`🇯🇵 JP 02 0.5x`
- 高倍率节点：`🇺🇸 US 03 2x`

**倍率识别**

低倍率（0.0x ~ 0.5x）、高倍率（2x+）节点自动标记倍率并进入对应倍率组。

**杂质过滤**

内置 `excludeFilter` 正则，匹配广告、客服、过期、流量、URL 等关键词的节点**整体移除**。

**重名与 `dialer-proxy` 修复**

节点重命名时记录 原名 → 新名 映射；重命名后统一修复 `dialer-proxy` 引用：指向已改名节点则改写为新名，指向被过滤节点则删除该字段，避免悬挂引用导致内核报错。检测到重名节点时输出日志警告。

### 4.2 策略组架构

- **地区三层组**：每个地区/倍率组生成三层嵌套组：
  - `Auto`：url-test 自动测速，间隔 180s、容忍 50ms、3 次失败后切换
  - `Balance`：load-balance（sticky-sessions），同域名固定走同一节点
  - 手动选择组：列出全部节点
- **功能组**：`Default`（默认出口，含全部组选项）、`Auto`、`Balance`、`QUIC`、`Direct`（含 5 个内置直连节点）
- **GLOBAL**：包含全部功能组与地区组，作为顶级出口

### 4.3 DNS 防污染

```
国内域名 → 阿里 / DNSPod (DoH) → Direct
国外域名 → Google / Cloudflare (DoH) → 代理
```

- **Fake-IP 模式**（ARC 缓存）：`fake-ip-filter` 由 `rule-set:private`、`rule-set:fakeip_filter`、`rule-set:geolocation-cn` 及 `geosite:connectivity-check` 构成，国内域名直接返回真实 IP，跳过 Fake-IP 映射
- **`nameserver-policy` 分流**：`rule-set:geolocation-!cn` 走国外 DNS；`rule-set:private`、`cn`、`geolocation-cn`、`apple_cn`、`cloudflare_cn`、`games_cn` 走国内 DNS
- **节点 DNS 感知**：自动提取代理节点 `server` 域名，与用户自定义的 `nameserver-policy` / `proxy-server-nameserver-policy` 交叉匹配后注入 `proxy-server-nameserver-policy`；无匹配时全部节点域名指向私有 DNS
- **Hosts 映射直达**：用户 `hosts` 中与节点 `server` 匹配的映射直接改写节点 server 字段，同时注入默认 hosts
- **纯净默认解析**：默认 `nameserver` 仅保留 Google + Cloudflare DoH，防止国内 DNS 抢答污染境外域名

### 4.4 网络特性

#### 4.4.1 QUIC 管控

> 前提：QUIC 走 UDP 443，Windows 需开启客户端 **TUN 模式**才能劫持（系统代理仅处理 TCP），见 [4.4.2](#442-双栈与-tun-模式)。

```js
'AND,((NETWORK,udp),(DST-PORT,443),(RULE-SET,private_ip,no-resolve)),Direct',
'AND,((NETWORK,udp),(DST-PORT,443),(OR,((RULE-SET,geolocation-cn),(RULE-SET,cn_ip,no-resolve)))),Direct',
'AND,((NETWORK,udp),(DST-PORT,443)),QUIC'
```

- **国内流量（默认放行）**：匹配 `rule-set:geolocation-cn` 或 `rule-set:cn_ip` 的 QUIC 流量直接走 `Direct`，保障国内应用加载速度
- **境外流量（手动管控）**：其余 QUIC 流量统一进入 `QUIC` 策略组：
  - `Default`：允许 QUIC 正常通过代理
  - `REJECT`：强制阻断 QUIC，迫使应用回退到更稳定的 TCP（YouTube / Google 无限转圈时建议开启）

#### 4.4.2 双栈与 TUN 模式

注入 5 个直连节点：`Dual Stack`（自动选择）、`IPv4 Only`、`IPv6 Only`、`IPv4 Preferred`、`IPv6 Preferred`。

TUN 开关由客户端管理。电脑端推荐开启 TUN 模式以全量劫持 UDP 流量（使 QUIC 规则生效）；系统代理仅覆盖 TCP，不适用于游戏、UWP 应用和 QUIC 流量。

#### 4.4.3 其他

- **TLS 指纹**：为 vmess / vless / trojan / anytls 自动补全 `client-fingerprint: chrome`，降低指纹识别风险
- **Sniffer 嗅探**：HTTP / TLS / QUIC 自动嗅探真实域名，跳过 `+.mijia.com`、`+.push.apple.com`、`+.lan`、`+.local` 等
- **NTP 时间同步**：每 30 分钟经阿里 NTP 同步，防止系统时间不准导致证书错误
- **Hosts 硬编码**：DNS 服务器 IP 直写，`cn.bing.com` 重定向 `global.bing.com`，屏蔽哔哩哔哩 PCDN
- **测速与延迟**：国外节点用 Cloudflare 测速、国内用华为；开启 `unified-delay` 与 `tcp-concurrent`

---

## 5.个性化定制

脚本顶部集中定义所有可配置常量，直接编辑即可生效。

### 5.1 服务开关

控制每个服务策略组是否生成，不需要的服务设为 `false` 即可（亦可在**代理页**右上角与**脚本页**规则开关选择关闭）。

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

> 脚本顶部声明 `Compatible_With_Bettbox = { ruleOptionsEnable: true }`，展示规则开关。

### 5.2 地区与倍率开关

控制哪些地区生成独立策略组，不需要的地区设为 `false` 即可。

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

### 5.3 全局开关

| 常量 | 作用 | 默认值 |
| --- | --- | --- |
| `excludeFilterEnable` | 是否开启杂质节点过滤 | `true` |
| `quicEnable` | QUIC 管控开关 | `true` |

### 5.4 过滤正则

匹配到以下关键词的节点会被整体移除，可自行增删：

```javascript
const excludeFilter = /群|返利|循环|官[网址]|客服|网站|网址|获取|订阅|流量|到期|机场|下次|备用|过期|已用|联系|邮箱|工单|通知|防止|国内|地址|频道|无法|说明|使用|提示|特别|访问|教程|关注|更新|作者|加入|超时|收藏|福利|邀请|好友|选择|剩余|公益|发布|通路|登录|禁止|定时|渠道|牢记|永久|余额|阁下|本站|刷新|导航|⚠️|@|Expire|https?:\/\/|www\.|\.com(?:$|[^a-zA-Z0-9])/u;
```

---

## 6.规则集与自动更新

所有分流规则集每 **12 小时**自动更新。

- **bett-rules**（脚本 `BETT` 常量，`https://cdn.jsdelivr.net/gh/appshubcc/bett-rules@meta`）：规则集按 `geo/geosite/*.mrs`、`geo/geoip/*.mrs`、`asn/*.mrs` 路径组织（含 `path-in-bundle`，可打包进内核内置 geo 数据）
- **本仓库自托管**（脚本 `ZZZ` 常量）：`fakeip-filter.mrs`（fake-ip 过滤，源头来自 [ShellCrash](https://github.com/juewuy/ShellCrash)）、`anti-ad.mrs`（广告拦截，源头来自 [anti-AD](https://github.com/privacy-protection-tools/anti-AD)），由 GitHub Actions 每日同步

**更新机制**：规则集经 jsdelivr CDN 分发（缓存最长约 12 小时生效），客户端按 12 小时间隔拉取，实际生效最长约 24 小时。

---

## 7.鸣谢

| 项目 | 用途 |
| --- | --- |
| [Bettbox](https://github.com/appshubcc/Bettbox) | 推荐客户端 |
| [MyClash](https://github.com/AIsouler/MyClash) | 原始代码来源 |
| [Mihomo](https://github.com/MetaCubeX/mihomo) | 内核支持 |
| [Qure](https://github.com/Koolson/Qure) | 图标库 |
| [bett-rules](https://github.com/appshubcc/bett-rules) | 规则集托管源 |
| [ShellCrash](https://github.com/juewuy/ShellCrash) | fakeip 过滤规则源头 |
| [anti-AD](https://github.com/privacy-protection-tools/anti-AD) | 广告拦截规则源头 |

---

## 8.许可证

本项目基于 **MIT License** 开源。详见 [LICENSE](./LICENSE) 文件。

你可以自由使用、修改、分发本项目的代码，只需保留原始版权声明。本项目不提供任何担保。

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://github.com/zzzhhe999">zzzhhe999</a> | 如果觉得好用，给个 ⭐ Star 吧！</sub>
</p>
