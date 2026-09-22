const fs = require('fs');
const path = require('path');
const { commands } = require('./command');
const pluginDir = path.join(__dirname, 'plugins');
const before = commands.length;
const failures = [];

for (const file of fs.readdirSync(pluginDir).filter((name) => name.endsWith('.js')).sort()) {
  try {
    require(path.join(pluginDir, file));
  } catch (error) {
    failures.push(`${file}: ${error.message}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Loaded ${fs.readdirSync(pluginDir).filter((name) => name.endsWith('.js')).length} plugins and ${commands.length - before} commands.`);
