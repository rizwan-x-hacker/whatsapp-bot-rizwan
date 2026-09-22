# Custom WhatsApp Bot Setup

This copy preserves the original repository's plugin commands and adds a single source of truth for bot identity.

## 1. Edit one file

Open [`settings.js`](./settings.js) and replace the `CHANGE_ME_...` values:

| Setting | What to enter |
|---|---|
| `ownerNumber` | Owner WhatsApp number, international format, digits only |
| `ownerName` | Owner display name |
| `developerName` | Developer or team name |
| `developerNumber` | Developer WhatsApp number |
| `botName` | Name shown by the bot |
| `whatsappChannelLink` | Full WhatsApp channel URL |
| `whatsappChannelJid` | Channel JID ending in `@newsletter` |
| `telegramBotToken` | Telegram bot token, if a Telegram integration is added |
| `telegramId` | Telegram chat or user ID |
| `imageLink` | Public image URL used in menus and owner information |
| `pairingApiUrl` | Your pairing API endpoint; `{phone}` is replaced automatically |
| `tiktokApiUrl` | Optional TikTok downloader endpoint |
| `wallpaperApiUrl` | Optional image-search endpoint |

The bot reads these values through `config.js`; owner checks, vCards, newsletter metadata, welcome text, menus, startup browser name, and notification recipients update automatically.

## 2. Install and run

```bash
npm install
npm start
```

For a fresh login, scan the QR shown in the terminal. The `sessions/` directory stores the WhatsApp multi-file session and should not be committed or shared.

## 3. Optional environment overrides

For hosting platforms, copy `config.env.example` to `config.env` and set values there. Environment variables override `settings.js`, which allows deployment secrets to stay out of the repository.

## Security

Do not publish `settings.js` after adding real Telegram tokens or session credentials. Keep `config.env` and the `sessions/` directory private.
