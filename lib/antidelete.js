const fs = require('fs')
const path = require('path')
const config = require('../config')
const { downloadContentFromMessage, generateWAMessageFromContent, proto } = require('@whiskeysockets/baileys')
const { getBuffer } = require('./functions')

const ownerJid = `${String(config.OWNER_NUMBER).replace('+', '')}@s.whatsapp.net`
const antiDeleteEnabled = (process.env.ANTIDELETE || 'true').toLowerCase() === 'true'

async function handleAntidelete(sock, msg) {
    if (!antiDeleteEnabled || !msg?.key?.remoteJid || !msg?.key?.fromMe === false || !msg?.messageStubType === 0) return

    try {
        const chat = msg.key.remoteJid
        const sender = msg.key.participant || msg.key.remoteJid
        const messageID = msg.key.id

        const deletedMsg = await sock.fetchMessagesFromWA(chat, 10)
        const deleted = deletedMsg.find(m => m.key.id === messageID)

        if (!deleted || !deleted.message) return

        let caption = `🚫 *Anti-Delete Alert!*\n`
        caption += `👤 *Deleted By:* ${sender.split('@')[0]}\n`
        caption += `💬 *Chat:* ${chat.endsWith('@g.us') ? 'Group' : 'Private'}\n`
        caption += `🗑️ *Deleted Message:*\n\n`

        await sock.sendMessage(ownerJid, { text: caption })
        await sock.relayMessage(ownerJid, deleted.message, { messageId: deleted.key.id })

    } catch (e) {
        console.error('[❌ AntiDelete Error]:', e)
    }
}

module.exports = { handleAntidelete }
