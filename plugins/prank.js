const { cmd } = require('../command');

cmd({
  pattern: "hack",
  desc: "Simulates a stylish hacking animation (for fun).",
  category: "fun",
  react: "💻",
  filename: __filename
},
async (conn, mek, m, { from, reply }) => {
  try {
    const steps = [
      '🧠 *Initializing BotCore Intelligence...*',
      '💻 *WhatsApp Bot – HackSim Engine v4.0*',
      '',
      '🔐 *Bypassing Multi-Layered Encryption...*',
      '🌐 *Connecting to Quantum Secure Network...*',
      '🛠️ *Injecting Dynamic Root Access Tools...*',
      '',
      '```[▓▓                    ] 10%``` ⏳ Loading Modules...',
      '```[▓▓▓▓▓                ] 30%``` ⏳ Processing Payload...',
      '```[▓▓▓▓▓▓▓▓▓           ] 50%``` ⏳ Infiltrating Protocol...',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓       ] 70%``` ⏳ Breaching Firewalls...',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] 90%``` ⏳ Data Decryption...',
      '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%``` ✅ System Access Granted!',
      '',
      '🖥️ *Accessing Confidential Databases...*',
      '📂 *Extracting Sensitive Intel...*',
      '',
      '📦 ```[DATA CAPTURED: 3.2 GB]```',
      '🔒 ```[ENCRYPTING & SECURING FILES]```',
      '',
      '🚀 *OPERATION COMPLETE* – All systems functional.',
      '',
      '⚠️ _This is a simulation. No systems were harmed._',
      '🧠 _Stay ethical. Stay secure. Stay smart._',
      '',
      '💡 *POWERED BY WhatsApp Bot* 🔥'
    ];

    for (const step of steps) {
      await conn.sendMessage(from, { text: step }, { quoted: mek });
      await new Promise(resolve => setTimeout(resolve, 1100)); // Smooth delay for realism
    }
  } catch (err) {
    console.error('[HackSim Error]', err);
    reply(`❌ *Hack simulation failed:* ${err.message}`);
  }
});