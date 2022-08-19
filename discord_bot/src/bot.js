require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`${client.user.tag}  logged in`);
});

client.on('messageCreate', (message) => {
        console.log(message.content);
});

client.login(process.env.TOKEN);