const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientId, guildId , TOKEN} = process.env;
 
// const commands = [
//     new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
//     new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
//     new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
// ]
//     .map(command => command.toJSON());
    
    
const rest = new REST({ version: '10' }).setToken(TOKEN);
    
    // for guild-based commands
    rest.delete(Routes.applicationGuildCommand(clientId, guildId, '1010693632984096879'))
        .then(() => console.log('Successfully deleted guild command'))
        .catch(console.error);
    
    // for global commands
    // rest.delete(Routes.applicationCommand(clientId, 'commandId'))
    //     .then(() => console.log('Successfully deleted application command'))
    //     .catch(console.error);

// rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
//     .then(() => console.log('Successfully registered application commands.'))
//     .catch(console.error);