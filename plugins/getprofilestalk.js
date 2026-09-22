const config = require('../config');
const { cmd } = require('../command');

cmd({
    pattern: "getpp",
    desc: "🖼️ Get profile picture of any user",
    react: "📸",
    category: "User",
    filename: __filename
},
async (conn, mek, m, { from, isGroup, mentionByTag, quoted, sender, reply }) => {
    try {
        // 🧠 Identify the target user
        let target;
        if (isGroup) {
            target = mentionByTag?.[0] || quoted?.sender || sender;
        } else {
            target = sender;
        }

        if (!target.includes('@')) target += '@s.whatsapp.net';

        // 🌐 Attempt to get profile picture URL
        let profilePic;
        try {
            profilePic = await conn.profilePictureUrl(target, 'image');
        } catch {
            return reply("🚫 No profile picture found or it's private.");
        }

        // 🎯 Get display name
        const name = await conn.getName(target);

        // 📩 Send the profile picture
        await conn.sendMessage(from, {
            image: { url: profilePic },
            caption: `🖼️ *Profile Picture of ${name}*`,
            contextInfo: {
                mentionedJid: [target],
                forwardingScore: 500,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: config.WHATSAPP_CHANNEL_JID,
                    newsletterName: config.BOT_NAME,
                    serverMessageId: 101
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error("❌ getpp error:", error);
        return reply("⚠️ Unexpected error occurred. Try again.");
    }
});