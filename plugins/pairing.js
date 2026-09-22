const config = require('../config');
const { cmd } = require('../command');

function normalizePhone(value) {
  return String(value || '').replace(/\D/g, '');
}

async function requestPairingCode(phone) {
  if (!config.PAIRING_API_URL) throw new Error('Pairing service is not configured. Set PAIRING_API_URL in settings.js.');
  const endpoint = config.PAIRING_API_URL.includes('{phone}')
    ? config.PAIRING_API_URL.replace('{phone}', encodeURIComponent(phone))
    : `${config.PAIRING_API_URL}${config.PAIRING_API_URL.includes('?') ? '&' : '?'}phone=${encodeURIComponent(phone)}`;
  const response = await fetch(endpoint, { headers: { accept: 'application/json' } });
  const data = await response.json();
  if (!response.ok || !data.code) throw new Error(data.error || 'Pairing service did not return a code.');
  return data.code;
}

async function pairCommand(conn, mek, m, { from, q, reply }) {
  const phone = normalizePhone(q);
  if (!/^\d{8,15}$/.test(phone)) return reply(`Usage: ${config.PREFIX}pair 923001234567`);
  try {
    await reply('Generating your pairing code…');
    const code = await requestPairingCode(phone);
    await conn.sendMessage(from, { image: { url: config.IMAGE_LINK }, caption: `🔐 *Pairing code ready*\n\n${config.BOT_NAME} generated a secure link code for your number.\n\n*Code:* ${code}\n\nOpen WhatsApp → Linked devices → Link with phone number, then enter the code.` }, { quoted: mek });
    await reply(String(code));
  } catch (error) {
    await reply(`⚠️ ${error.message}`);
  }
}

for (const pattern of ['pair', 'getpair', 'pair2', 'clonebot']) {
  cmd({ pattern, alias: [], desc: 'Generate a WhatsApp pairing code', category: 'owner', react: '🔐', filename: __filename }, pairCommand);
}
