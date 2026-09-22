const fs = require('fs');
const settings = require('./settings');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function envOr(key, fallback) {
  return process.env[key] !== undefined ? process.env[key] : fallback;
}

module.exports = {
  OWNER_NUMBER: envOr('OWNER_NUMBER', settings.ownerNumber),
  OWNER_NAME: envOr('OWNER_NAME', settings.ownerName),
  DEVELOPER_NAME: envOr('DEVELOPER_NAME', settings.developerName),
  DEVELOPER_NUMBER: envOr('DEVELOPER_NUMBER', settings.developerNumber),
  BOT_NAME: envOr('BOT_NAME', settings.botName),
  WHATSAPP_CHANNEL_LINK: envOr('WHATSAPP_CHANNEL_LINK', settings.whatsappChannelLink),
  WHATSAPP_CHANNEL_JID: envOr('WHATSAPP_CHANNEL_JID', settings.whatsappChannelJid),
  TELEGRAM_BOT_TOKEN: envOr('TELEGRAM_BOT_TOKEN', settings.telegramBotToken),
  TELEGRAM_ID: envOr('TELEGRAM_ID', settings.telegramId),
  IMAGE_LINK: envOr('IMAGE_LINK', settings.imageLink),
  PAIRING_API_URL: envOr('PAIRING_API_URL', settings.pairingApiUrl),
  TIKTOK_API_URL: envOr('TIKTOK_API_URL', settings.tiktokApiUrl),
  WALLPAPER_API_URL: envOr('WALLPAPER_API_URL', settings.wallpaperApiUrl),

  SESSION_ID: envOr('SESSION_ID', settings.sessionId),
  PREFIX: envOr('PREFIX', settings.prefix),
  DESCRIPTION: envOr('DESCRIPTION', settings.description.replace('CHANGE_ME_BOT_NAME', settings.botName)),
  ALIVE_IMG: process.env.ALIVE_IMG || settings.imageLink,
  LIVE_MSG: process.env.LIVE_MSG || `${settings.botName} is active and alive.`,

  MODE: envOr('MODE', settings.mode),
  PUBLIC_MODE: process.env.PUBLIC_MODE || 'true',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true',
  READ_MESSAGE: process.env.READ_MESSAGE || 'false',
  AUTO_TYPING: process.env.AUTO_TYPING || 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING || 'true',
  AUTO_VOICE: process.env.AUTO_VOICE || 'false',
  AUTO_STICKER: process.env.AUTO_STICKER || 'true',
  AUTO_REPLY: process.env.AUTO_REPLY || 'false',
  AUTO_REACT: process.env.AUTO_REACT || 'false',
  HEART_REACT: process.env.HEART_REACT || 'false',
  CUSTOM_REACT: process.env.CUSTOM_REACT || 'false',
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || '💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || 'true',
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || 'true',
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'false',
  AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || `Seen by ${settings.botName}`,
  ANTI_LINK: process.env.ANTI_LINK || 'false',
  ANTI_BAD: process.env.ANTI_BAD || 'false',
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || process.env.ANTI_BAD || 'false',
  ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  ANTI_VV: process.env.ANTI_VV || 'true',
  DELETE_LINKS: process.env.DELETE_LINKS || 'false',
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || 'log'
};
