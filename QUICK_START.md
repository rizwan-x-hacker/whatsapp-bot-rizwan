# Quick Start

## Install

```bash
npm install
```

## Configure

Edit `settings.js` and replace every `CHANGE_ME_...` value. For hosted deployments, copy `config.env.example` to `config.env` and keep it private.

## Run

```bash
npm start
```

The server uses `PORT` when provided and defaults to `9090`. When no session exists, a QR code appears in the terminal. The bot saves its multi-file session in `sessions/`.

## Pairing website

Open `/pairing` on the bot server, or deploy the standalone React site. Enter a WhatsApp number with its country code and follow the status instructions. Do not share pairing codes or session IDs.

## First commands

```text
.menu       Main menu
.listcmd    Command directory
.owner      Owner contact card
.pair       Pairing helper
.alive      Health message
.ping       Latency check
```

## PM2

```bash
npm install -g pm2
pm2 start index.js --name custom-whatsapp-bot
pm2 save
pm2 logs custom-whatsapp-bot
```
