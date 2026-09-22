const assert = require('assert');
const config = require('./config');

const expected = [
  'OWNER_NUMBER', 'OWNER_NAME', 'DEVELOPER_NAME', 'DEVELOPER_NUMBER',
  'BOT_NAME', 'WHATSAPP_CHANNEL_LINK', 'WHATSAPP_CHANNEL_JID',
  'TELEGRAM_BOT_TOKEN', 'TELEGRAM_ID', 'IMAGE_LINK'
];

for (const key of expected) assert.ok(Object.prototype.hasOwnProperty.call(config, key), `Missing config key: ${key}`);
assert.strictEqual(config.BOT_NAME, require('./settings').botName);
assert.strictEqual(config.WHATSAPP_CHANNEL_JID, require('./settings').whatsappChannelJid);
assert.strictEqual(config.IMAGE_LINK, require('./settings').imageLink);
console.log(`Settings smoke test passed (${expected.length} centralized fields).`);
