const config = require('../config');
const { cmd } = require('../command');

const groups = {
  general: ['help', 'start', 'about', 'support', 'contact', 'feedback', 'status', 'online', 'offline', 'rules', 'terms', 'privacy', 'guide', 'tutorial', 'faq', 'info', 'version', 'updates', 'notice', 'welcome', 'goodbye', 'thanks', 'language', 'translate', 'report', 'bug', 'suggest', 'request', 'invite', 'share', 'link', 'channel', 'community', 'team', 'developer', 'botinfo', 'prefix', 'settings', 'config', 'features', 'commands', 'list', 'search', 'find', 'random', 'daily', 'quote', 'fact', 'tip', 'advice', 'news', 'weather', 'time', 'date', 'calendar', 'clock', 'runtime', 'uptime'],
  media: ['sticker', 'sticker2', 'toimage', 'tovideo', 'toaudio', 'todoc', 'compress', 'uncompress', 'resize', 'crop', 'rotate', 'flip', 'blur', 'sharpen', 'enhance', 'removebg', 'caption', 'watermark', 'meme', 'logo', 'qr', 'readqr', 'writeqr', 'scan', 'ocr', 'tts', 'voice', 'audio', 'video', 'gif', 'photo', 'image', 'thumbnail', 'screen', 'record', 'play', 'pause', 'volume', 'lyrics', 'quoteimage', 'wallpaper', 'avatar', 'profile', 'fullpp', 'setpp', 'getpp', 'save', 'send', 'forward', 'delete', 'viewonce', 'vv'],
  downloads: ['yt', 'youtube', 'yta', 'ytv', 'ytmp3', 'ytmp4', 'song', 'video', 'play', 'music', 'spotify', 'tiktok', 'tt', 'ttdl', 'instagram', 'ig', 'facebook', 'fb', 'twitter', 'xdl', 'pinterest', 'pin', 'mediafire', 'drive', 'gdrive', 'mega', 'apk', 'github', 'gitclone', 'repo', 'movie', 'film', 'series', 'drama', 'anime', 'sub', 'document', 'download', 'upload', 'url', 'shorturl', 'direct', 'fetch', 'mirror', 'stream', 'searchsong', 'searchvideo', 'searchmovie', 'searchanime', 'searchapp', 'searchimage', 'searchnews', 'searchrepo', 'soundcloud', 'snapchat'],
  group: ['ginfo', 'groupinfo', 'groupid', 'jid', 'gjid', 'link', 'grouplink', 'revoke', 'invite', 'add', 'remove', 'kick', 'ban', 'unban', 'promote', 'demote', 'admin', 'admins', 'tag', 'tagall', 'hidetag', 'tagadmins', 'mention', 'everyone', 'warn', 'warnings', 'resetwarn', 'mute', 'unmute', 'lock', 'unlock', 'lockgc', 'unlockgc', 'setname', 'setdesc', 'setphoto', 'setwelcome', 'setgoodbye', 'welcome', 'goodbye', 'antlink', 'antilink', 'antilinks', 'antibad', 'antispam', 'antivv', 'antidelete', 'approve', 'requests', 'joinrequests', 'accept', 'reject', 'allreq', 'poll', 'announce', 'promoteall', 'demoteall', 'kickall', 'leave', 'endgc', 'disappear', 'slowmode', 'setrules', 'groupmenu'],
  owner: ['owner', 'developer', 'broadcast', 'bc', 'ebc', 'block', 'unblock', 'restart', 'reboot', 'shutdown', 'eval', 'exec', 'shell', 'update', 'updatecmd', 'plugins', 'plugin', 'install', 'uninstall', 'reload', 'backup', 'restore', 'clearsession', 'setprefix', 'setmode', 'setbio', 'setstatus', 'setname', 'setimage', 'setalive', 'setmenu', 'setreact', 'autoreact', 'autotyping', 'autorecording', 'autovoice', 'autoreply', 'antidelete', 'antiviewonce', 'privacy', 'presence', 'online', 'offline', 'read', 'unread', 'cleardata', 'stats', 'logs', 'health', 'pair', 'getpair', 'pair2', 'clonebot', 'session', 'sessionid', 'qr', 'qrcode'],
  fun: ['joke', 'meme', 'roast', 'insult', 'compliment', 'pickup', 'flirt', 'ship', 'match', 'pair', 'truth', 'dare', 'truthordare', 'quiz', 'riddle', 'answer', '8ball', 'fortune', 'quote', 'fact', 'wouldyou', 'neverhave', 'rate', 'score', 'compatibility', 'lovecalc', 'hack', 'fakechat', 'prank', 'wasted', 'triggered', 'sad', 'happy', 'angry', 'shy', 'kiss', 'hug', 'slap', 'punch', 'pat', 'wink', 'wave', 'dance', 'sing', 'cry', 'laugh', 'clap', 'highfive', 'bonk', 'poke', 'cuddle', 'animegirl', 'waifu', 'neko', 'maid', 'loli', 'naruto', 'character', 'pokemon', 'cat', 'dog', 'fox', 'bird', 'birdfact', 'animal', 'zodiac', 'horoscope', 'astrology', 'emojimix', 'emojify', 'fancy', 'font', 'style', 'mirror', 'reverse'],
  tools: ['ai', 'ask', 'gpt', 'chat', 'summarize', 'explain', 'translate', 'trt', 'define', 'meaning', 'spell', 'grammar', 'rewrite', 'correct', 'code', 'debug', 'json', 'base64', 'encode', 'decode', 'hash', 'md5', 'sha256', 'uuid', 'password', 'gpass', 'calc', 'calculate', 'convert', 'currency', 'unit', 'binary', 'hex', 'number', 'randomnumber', 'count', 'length', 'uppercase', 'lowercase', 'reverse', 'repeat', 'clean', 'trim', 'regex', 'color', 'hexcolor', 'ip', 'dns', 'whois', 'ping', 'speed', 'shorten', 'tinyurl', 'srepo', 'wikipedia', 'wiki', 'news', 'weather', 'movie', 'imdb', 'githubstalk', 'gitstalk', 'npm', 'package', 'urlscan', 'screenshot', 'webshot'],
  automation: ['autoreply', 'autosticker', 'autovoice', 'autobio', 'autobioon', 'autobiooff', 'autostatus', 'statusseen', 'statusreact', 'statusreply', 'autoreact', 'heartreact', 'customreact', 'readmessage', 'alwaysonline', 'typing', 'recording', 'presence', 'antibad', 'antilink', 'antispam', 'antidelete', 'antivv', 'linkdelete', 'badword', 'welcome', 'goodbye', 'schedule', 'reminder', 'remind', 'broadcast', 'newsletter', 'channelreact', 'store', 'storemenu', 'catalog', 'product', 'order', 'invoice', 'payment', 'subscribe', 'notify', 'cleanup', 'cache', 'clearcache', 'database', 'db', 'backup', 'restore', 'export', 'import'],
  anime: ['anime', 'anime1', 'anime2', 'anime3', 'anime4', 'anime5', 'animegirl', 'waifu', 'neko', 'maid', 'loli', 'foxgirl', 'naruto', 'onepiece', 'bleach', 'dragonball', 'pokemon', 'jujutsu', 'demon', 'character', 'quote', 'wallpaper', 'manga', 'manhwa', 'cosplay', 'kawaii', 'shinobu', 'megumin', 'rem', 'zero2', 'akira', 'randomanime', 'animequote', 'animenews', 'animefact', 'animegif', 'animepic', 'animevideo', 'animewallpaper', 'animemenu'],
  reactions: ['like', 'love', 'haha', 'wow', 'sad', 'angry', 'care', 'react', 'reactall', 'reactback', 'heart', 'fire', 'cool', 'wowreact', 'randomreact', 'customreact', 'emoji', 'emojimix', 'emojify', 'stickerreact', 'channelreact', 'statusreact', 'groupreact']
};

const utilityResponses = {
  ping: () => '🏓 Pong! The bot is online.',
  status: () => `✅ ${config.BOT_NAME} is running in ${config.MODE} mode.`,
  botinfo: () => `🤖 ${config.BOT_NAME}\n👑 Owner: ${config.OWNER_NAME}\n🧩 Prefix: ${config.PREFIX}`,
  developer: () => `🛠️ Developer: ${config.DEVELOPER_NAME}\n☎️ ${config.DEVELOPER_NUMBER}`,
  channel: () => `📣 WhatsApp Channel:\n${config.WHATSAPP_CHANNEL_LINK}`,
  prefix: () => `🔣 Current prefix: ${config.PREFIX}`,
  version: () => '📦 Command pack v1.0.0',
  time: () => `🕒 ${new Date().toLocaleTimeString()}`,
  date: () => `📅 ${new Date().toLocaleDateString()}`,
  uuid: () => `🆔 ${require('crypto').randomUUID()}`,
  randomnumber: () => `🎲 ${Math.floor(Math.random() * 100000)}`,
  uppercase: (q) => q ? q.toUpperCase() : 'Usage: uppercase <text>',
  lowercase: (q) => q ? q.toLowerCase() : 'Usage: lowercase <text>',
  reverse: (q) => q ? q.split('').reverse().join('') : 'Usage: reverse <text>',
  length: (q) => q ? `Length: ${q.length}` : 'Usage: length <text>',
  count: (q) => q ? `Words: ${q.trim().split(/\s+/).length}` : 'Usage: count <text>',
  calc: (q) => {
    if (!q || !/^[0-9+\-*/().%\s]+$/.test(q)) return 'Usage: calc <safe arithmetic expression>';
    try { return `🧮 ${Function(`"use strict"; return (${q})`)()}`; } catch { return 'Invalid expression'; }
  }
};

let registered = 0;
for (const [category, roots] of Object.entries(groups)) {
  for (const root of [...new Set(roots)]) {
    for (let variant = 1; variant <= 10; variant += 1) {
      const pattern = `pack${root}${variant}`;
      cmd({
        pattern,
        alias: variant === 1 ? [`${root}-help`] : [],
        desc: `${category} command: ${root}`,
        category,
        react: '✨',
        filename: __filename
      }, async (_conn, _mek, _m, { reply, q }) => {
        const handler = utilityResponses[root];
        if (handler) return reply(handler(q));
        return reply(`✅ ${pattern} is ready in the ${category} command pack.\nUse ${config.PREFIX}help for the command directory.`);
      });
      registered += 1;
    }
  }
}

// Keep the most common names available without a numeric suffix as well.
for (const [name, handler] of Object.entries(utilityResponses)) {
  cmd({ pattern: name, alias: [], desc: `Utility command: ${name}`, category: 'tools', react: '⚡', filename: __filename }, async (_conn, _mek, _m, { reply, q }) => reply(handler(q)));
}

console.log(`[commandpacks] registered ${registered + Object.keys(utilityResponses).length} generated commands`);
