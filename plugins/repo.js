const config = require('../config');
const fs = require('fs');
const os = require('os');
const { cmd } = require('../command');
const packageInfo = require('../package.json');

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}

cmd({
  pattern: 'repo',
  alias: ['runtime', 'systeminfo', 'botstats'],
  desc: 'Show local bot runtime information',
  category: 'main',
  react: '🧭',
  filename: __filename
}, async (conn, mek, m, { from, reply }) => {
  try {
    const commandFiles = fs.readdirSync('./plugins').filter((file) => file.endsWith('.js')).length;
    const message = `╭━━〔 *${config.BOT_NAME}* 〕━━┈⊷\n┃\n┃ 🧠 *Runtime:* ${formatUptime(process.uptime())}\n┃ 📦 *Version:* ${packageInfo.version}\n┃ 🧩 *Plugin Files:* ${commandFiles}\n┃ 🖥️ *Platform:* ${os.platform()} ${os.arch()}\n┃ 🔣 *Prefix:* ${config.PREFIX}\n┃ ⚡ *Mode:* ${config.MODE}\n┃\n╰━━━⊷ *${config.DESCRIPTION}*`;
    await conn.sendMessage(from, { text: message }, { quoted: mek });
  } catch (error) {
    console.error('[RUNTIME INFO]', error);
    reply(`Unable to read runtime information: ${error.message}`);
  }
});
