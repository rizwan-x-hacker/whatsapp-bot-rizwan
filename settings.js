/**
 * EDIT THIS FILE ONLY for bot identity and external-service credentials.
 * Keep phone numbers in international format without spaces or the leading +.
 * Secrets are intentionally blank by default; never commit real tokens publicly.
 */
module.exports = {
  ownerNumber: process.env.OWNER_NUMBER || "923214019796",
  ownerName: process.env.OWNER_NAME || "𝙍𝙄𝙕𝙒𝘼𝙉 𝙓 𝙃𝘼𝘾𝙆𝙀𝙍",
  developerName: process.env.DEVELOPER_NAME || "CHANGE_ME_DEVELOPER_NAME",
  developerNumber: process.env.DEVELOPER_NUMBER || "𝙍𝙄𝙕𝙒𝘼𝙉 𝙓 𝙃𝘼𝘾𝙆𝙀𝙍",
  botName: process.env.BOT_NAME || "𝙍𝙄𝙕𝙒𝘼𝙉 𝙈𝘿",
  whatsappChannelLink: process.env.WHATSAPP_CHANNEL_LINK || "https://whatsapp.com/channel/0029VbCrRdL3mFXyzT6UeB3G",
  whatsappChannelJid: process.env.WHATSAPP_CHANNEL_JID || "120363426760174833@newsletter",
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "8984944939:AAFGlIlHHiAIrZSYAVH4Sl53Pwf8hk4IopQ",
  telegramId: process.env.TELEGRAM_ID || "8564524260",
  imageLink: process.env.IMAGE_LINK || "https://i.postimg.cc/SRkF6tdw/IMG-20260728-WA3222.jpg",
  pairingApiUrl: process.env.PAIRING_API_URL || "",
  tiktokApiUrl: process.env.TIKTOK_API_URL || "",
  wallpaperApiUrl: process.env.WALLPAPER_API_URL || "",

  // Runtime settings are kept here too so deployment can be controlled from one file.
  sessionId: process.env.SESSION_ID || "",
  prefix: process.env.PREFIX || ".",
  mode: process.env.MODE || "public",
  description: process.env.DESCRIPTION || "Powered by 𝙍𝙄𝙕𝙒𝘼𝙉 𝙈𝘿"
};
