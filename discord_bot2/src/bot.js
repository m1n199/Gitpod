const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

require(path.join(__dirname, 'handleEvents.js'))(client);
client.handleEvents();
client.login(process.env.TOKEN);