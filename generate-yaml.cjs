/**
 * generate-yaml.cjs
 * 作用：运行 Mihomo-Script-Rules.js 的 main()，把输出配置转成 mihomoConfig.yaml
 * 用法：node generate-yaml.cjs
 * 原理：脚本 main(config) 接收一个含 proxies 的 config，返回完整 Mihomo 配置对象，
 *       这里喂一个含示例节点的 config，拿到完整输出后序列化为 YAML。
 * 零依赖：内置 YAML 序列化器，不装 js-yaml。
 */

const fs = require('fs');
const path = require('path');

// ─── YAML 序列化器（零依赖，支持 Mihomo 配置的数据结构）─────────────────
function toYaml(obj, indent = 0) {
  const pad = '  '.repeat(indent);
  if (obj === null || obj === undefined) return 'null';
  if (typeof obj === 'boolean') return obj ? 'true' : 'false';
  if (typeof obj === 'number') return String(obj);
  if (typeof obj === 'string') {
    if (/[:#\-?\[\]{},&*!|>'"%@`#\n]/.test(obj) || /^\s|\s$/.test(obj) || obj === '') {
      return JSON.stringify(obj);
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    if (obj.length === 0) return '[]';
    return '\n' + obj.map(item => {
      const val = toYaml(item, indent + 1);
      if (val.startsWith('\n')) {
        return `${pad}- ${val.trimStart()}`;
      }
      return `${pad}- ${val}`;
    }).join('\n');
  }
  if (typeof obj === 'object') {
    const keys = Object.keys(obj);
    if (keys.length === 0) return '{}';
    return '\n' + keys.map(key => {
      const val = toYaml(obj[key], indent + 1);
      const safeKey = /^[A-Za-z0-9_\-\.]+$/.test(key) ? key : JSON.stringify(key);
      if (val.startsWith('\n')) {
        return `${pad}${safeKey}:${val}`;
      }
      return `${pad}${safeKey}: ${val}`;
    }).join('\n');
  }
  return String(obj);
}

// ─── 示例节点：覆盖各地区+倍率+垃圾节点，让 main() 生成完整策略组 ──────
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
      { name: '🇯🇵 日本 hy2', type: 'hy2', server: '2.2.2.4', port: 443 },
    ],
    mode: 'rule',
  };
}

// ─── 主流程 ──────────────────────────────────────────────────────────
function main() {
  const scriptPath = path.join(__dirname, 'Mihomo-Script-Rules.js');
  const src = fs.readFileSync(scriptPath, 'utf8');
  const exportSrc = src + '\nmodule.exports = { main };\n';
  const tmpPath = path.join(__dirname, '_tmp_script_export.cjs');
  fs.writeFileSync(tmpPath, exportSrc);
  delete require.cache[require.resolve(tmpPath)];
  const { main: scriptMain } = require(tmpPath);
  fs.unlinkSync(tmpPath);

  const config = makeSampleConfig();
  const mihomoConfig = scriptMain(config);
  const yaml = toYaml(mihomoConfig);

  const outPath = path.join(__dirname, 'Config', 'mihomoConfig.yaml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, yaml + '\n', 'utf8');

  console.log('✅ YAML 生成完成: Config/mihomoConfig.yaml');
  console.log('   proxies:', mihomoConfig.proxies.length);
  console.log('   proxy-groups:', mihomoConfig['proxy-groups'].length);
  console.log('   rules:', mihomoConfig.rules.length);
  console.log('   rule-providers:', Object.keys(mihomoConfig['rule-providers']).length);
}

main();
