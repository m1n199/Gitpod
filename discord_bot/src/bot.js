const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    console.log(`${client.user.tag}  logged in`);
});

client.on('messageCreate', (message) => {
    if (message.content == 'ping') 
        console.log("KO");
});

client.login(process.env.TOKEN);