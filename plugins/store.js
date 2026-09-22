const { cmd } = require("../command");

// Helper function for animated messages
async function sendAnimatedMessage(m, sock, { 
  initialText, 
  frames, 
  frameDelay = 1000, 
  reactEmoji = '✨'
}) {
  try {
    // Add reaction to show command was received
    if (reactEmoji) await m.react(reactEmoji);

    // Send initial message
    const sentMsg = await sock.sendMessage(m.from, { text: initialText });
    if (!sentMsg?.key) {
      return m.reply("❌ Failed to send initial message");
    }

    // Send each frame with delay
    for (const frame of frames) {
      await new Promise(resolve => setTimeout(resolve, frameDelay));
      await sock.sendMessage(m.from, {
        text: frame,
        edit: sentMsg.key
      }).catch(e => console.error("Frame error:", e.message));
    }

  } catch (error) {
    console.error("Animation error:", error);
    m.reply(`❌ Error: ${error.message}`);
  }
}

// Hand Animation Command
cmd({
  pattern: "hand",
  desc: "Hand animation (NSFW)",
  category: "fun",
  react: '✊'
}, async (m, sock) => {
  const frames = [
    '8✊️===D', "8=✊️==D", "8==✊️=D", "8===✊️D", 
    "8==✊️=D", "8=✊️==D", "8✊️===D", "8=✊️==D", 
    "8==✊️=D", '8===✊️D', "8==✊️=D", "8=✊️==D", 
    '8✊️===D', "8=✊️==D", "8==✊️=D", "8===✊️D", 
    "8==✊️=D", '8=✊️==D', "8✊️===D", '8=✊️==D', 
    "8==✊️=D", "8===✊️D 💦", "8==✊️=D💦 💦", "8=✊️==D 💦💦 💦"
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "✊🏻 STARTED... 💦",
    frames,
    frameDelay: 800,
    reactEmoji: '✊'
  });
});

// Happy Animation Command
cmd({
  pattern: "hpy",
  desc: "Happy faces animation",
  category: "fun",
  react: '😁'
}, async (m, sock) => {
  const frames = [
    '😃', '😄', '😁', '😊', '😎', '🥳', '😸', '😹', 
    '🌞', '🌈', '😃', '😄', '😁', '😊', '😎', '🥳', 
    '😸', '😹', '🌞', '🌈', '😃', '😄', '😁', '😊'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '😂',
    frames,
    frameDelay: 300
  });
});

// Heart Animation Command
cmd({
  pattern: "hrt",
  desc: "Heart animation",
  category: "fun",
  react: '🫀'
}, async (m, sock) => {
  const frames = [
    '💖', '💗', '💕', '❤️', '💛', '💚', '🫀', '💙', 
    '💜', '🖤', '♥️', '🤍', '🤎', '💗', '💞', '💓', 
    '💘', '💝', '♥️', '💟', '🫀', '❤️'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '❤️',
    frames,
    frameDelay: 250
  });
});

// Anger Animation Command
cmd({
  pattern: "anger",
  desc: "Angry faces animation",
  category: "fun",
  react: '🤡'
}, async (m, sock) => {
  const frames = [
    '😡', '😠', '🤬', '😤', '😾', '😡', '😠', '🤬', '😤', '😾'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🤡',
    frames,
    frameDelay: 800
  });
});

// Sad Animation Command
cmd({
  pattern: "sad",
  desc: "Sad faces animation",
  category: "fun",
  react: '😫'
}, async (m, sock) => {
  const frames = [
    '🥺', '😟', '😕', '😖', '😫', '🙁', '😩', '😥', 
    '😓', '😪', '😢', '😔', '😞', '😭', '💔', '😭', '😿'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '😭',
    frames,
    frameDelay: 800
  });
});

// Shy Animation Command
cmd({
  pattern: "shy",
  desc: "Shy faces animation",
  category: "fun",
  react: '😳'
}, async (m, sock) => {
  const frames = [
    '😳', '😊', '😶', '🙈', '🙊', '😳', '😊', '😶', '🙈', '🙊'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "> bot",
    frames,
    frameDelay: 800
  });
});

// Moon Animation Command
cmd({
  pattern: "mon",
  desc: "Moon phases animation",
  category: "fun",
  react: '🌙'
}, async (m, sock) => {
  const frames = [
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', 
    '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌕', "🌚🌝"
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🌙',
    frames,
    frameDelay: 800
  });
});

// Confused Animation Command
cmd({
  pattern: "confused",
  desc: "Confused faces animation",
  category: "fun",
  react: '🙀'
}, async (m, sock) => {
  const frames = [
    '😕', '😟', '😵', '🤔', '😖', '😲', '😦', '🤷', 
    "🤷‍♂️", '🤷‍♀️'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '🙀',
    frames,
    frameDelay: 800
  });
});

// Kiss Animation Command
cmd({
  pattern: "kiss",
  desc: "Kissy faces animation",
  category: "fun",
  react: '♥️'
}, async (m, sock) => {
  const frames = [
    '🥵', '❤️', '💋', '😫', '🤤', '😋', '🥵', '🥶', 
    '🙊', '😻', '🙈', '💋', '🫂', '🫀', '👅', '👄', '💋'
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: '♥️',
    frames,
    frameDelay: 800
  });
});

// "Nikal" Animation Command (ASCII Art)
cmd({
  pattern: "nikal",
  desc: "Funny ASCII art animation",
  category: "fun",
  react: '🗿'
}, async (m, sock) => {
  const frames = [
    `⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
 ⠀⣴⠿⠏⠀⠀⠀⠀⠀     ⢳⡀⠀⡏⠀⠀⠀   ⠀  ⢷
⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀   ⣧⠀⢸⠀⠀⠀  ⠀    ⡇
⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲     ⣿  ⣸   Nikal   ⡇
 ⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀      ⣿  ⢹⠀          ⡇
  ⠙⢿⣯⠄⠀⠀⠀⠀   ⠀   ⡿ ⠀⡇⠀⠀⠀⠀    ⡼
⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀   ⠘⠤⣄⣠⠞⠀
⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀ ⠀⣄⢸⠀⠀⠀⠀⠀⠀`,
    // Other ASCII frames...
  ];
  
  await sendAnimatedMessage(m, sock, {
    initialText: "WhatsApp Bot🗿",
    frames,
    frameDelay: 1500
  });
});