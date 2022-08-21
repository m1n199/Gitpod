console.log('In bot.js .....(/)');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages

    ] });
client.commands = new Collection();


require(path.join(__dirname, 'handleEvents.js'))(client);
client.handleEvents();

client.login(process.env.TOKEN);