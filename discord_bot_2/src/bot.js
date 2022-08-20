require("dotenv").config();
const fs = require("fs");
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: GatewayIntentBits.Guilds });
// ---------------------------------------------------------------
client.once('ready', () => {
        console.log('Ready!');
});
// ---------------------------------------------------------------
client.on('interactionCreate', async interaction => {
        if (!interaction.isChatInputCommand()) return;

        const { commandName } = interaction;

        if (commandName === 'ping') {
                await interaction.reply('Pong!');
        } else if (commandName === 'server') {
                await interaction.reply(`
                  Server name: ${interaction.guild.name}
                  Total members: ${interaction.guild.memberCount}
                  Created at: ${interaction.guild.createdAt}
                  Verification Level:${interaction.guild.verificationLevel}
                `)
                                         ;
        } else if (commandName === 'user') {
                await interaction.reply(`
                  Your tag: ${interaction.user.tag}
                  Your id: ${interaction.user.id}
                `);
        }
});
// -------------------------------------------------------------------
client.login(process.env.TOKEN);