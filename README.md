# Custom WhatsApp Bot

A modular multi-device WhatsApp automation bot with group tools, media utilities, moderation, downloads, fun commands, owner controls, and a centralized identity layer.

## Highlights

- **1,000+ command triggers** through organized generated command packs plus functional plugins.
- **Single-file identity settings** in `settings.js`.
- **QR and pairing-code login support**.
- **Group administration, moderation, media conversion, AI utilities, status tools, and download helpers**.
- **Standalone pairing website** in `pairing-site/` and a polished React version in `/home/ubuntu/whatsapp-pairing-site`.

## Quick start

```bash
npm install
# edit settings.js
npm start
```

Scan the terminal QR code for a first login, or use the pairing website. Keep `sessions/`, `config.env`, Telegram credentials, and pairing responses private.

## Configure once

Edit [`settings.js`](settings.js). It contains the owner, developer, bot, channel, Telegram, image, session, prefix, mode, and description settings used throughout the bot. Environment variables from `config.env` override these values for hosting platforms.

## Command packs

`plugins/commandpacks.js` registers more than 1,000 generated triggers under the `pack` prefix so it never shadows original functional commands. Examples:

```text
.packhelp1
.packgroupinfo1
.packuppercase1 hello world
.packanime1
```

The original commands remain available with their normal names. Use `.menu` and `.listcmd` to browse the catalog.

## Pairing page

The local pairing interface lives at `pairing-site/`. It calls the bot's `/api/pair` endpoint and can be served by the same Express process. A separate responsive React interface is also available in the initialized web project.

## Safety

Replace all placeholders in `settings.js` before deployment. Never publish real session IDs, phone numbers, or bot tokens.

## License

MIT
