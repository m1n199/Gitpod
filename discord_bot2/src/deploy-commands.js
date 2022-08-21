const fs = require('node:fs');
const path = require('node:path');
const { clientId, guildId, TOKEN } = process.env;
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const rest = new REST({ version: '10' }).setToken(TOKEN);

// setting-commands--------------------------------------------------------------------------------------------------
// const commands = [
    //     new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    //     new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
    //     new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    // ].map(command => command.toJSON());
    
    const commands = [];
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles)
        commands.push(require(path.join(commandsPath, file)).data.toJSON());

// inseart-commands--------------------------------------------------------------------------------------------------
    rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);


// const commandId = '1010665155039875208';
// Delete-one-command-using-ID--------------------------------------------------------------------------------------------------
    // for guild-based commands
        // rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
        //             .then(() => console.log('Successfully deleted guild command'))
        //             .catch(console.error);

// for global commands--------------------------------------------------------------------------------------------------

        // rest.delete(Routes.applicationCommand(clientId, commandId))
        //     .then(() => console.log('Successfully deleted application command'))
        //     .catch(console.error);
        
// Delete-all-commands-at-once-------------------------------------------------------------------------------------------------
    // for guild-based commands
        // rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
        //     .then(() => console.log('Successfully deleted all guild commands.'))
        //     .catch(console.error);

    // for global commands
        // rest.put(Routes.applicationCommands(clientId), { body: [] })
        //     .then(() => console.log('Successfully deleted all application commands.'))
        //     .catch(console.error);