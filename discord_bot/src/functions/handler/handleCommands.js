const { REST } = require('@discordjs/rest');
const { routes } = require('discord-api-types/v9');
const { Routes } = require('discord.js');

const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async() => {
        const commandFolders = fs.readdirSync(`./src/commands`);
        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./src/commands/${folder}`)
                .filter((file) => file.endsWith(".js"));
            const {commands , commandArray } = client;
            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);
                commands.set(command.data.name, command);
                commandArray.push(command.data.toJSON());
                console.log(`command: ${command.data.name} has been passed through the command handler !`);
            }
        }
        const clientId = '967852926355795969';
        const guildId = '967808235048423484';
        const rest = new REST({ version: 9 }).setToken(process.env.TOKEN);
        try {
            console.log('started refreshing app (/) commands..');
            await rest.put(Routes.applicationGuildCommands(clientId, guildId),{ body: client.commandArray})
        } catch(error){ console.log(error) }

    };
};