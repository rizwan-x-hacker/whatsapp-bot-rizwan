FROM node:22-bookworm-slim

ENV NODE_ENV=production
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends ffmpeg imagemagick webp \
  && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-audit --no-fund \
  && npm install --global pm2@6 \
  && npm cache clean --force

COPY . .

# Railway provides PORT at runtime; index.js reads process.env.PORT.
EXPOSE 9090
CMD ["pm2-runtime", "index.js"]
