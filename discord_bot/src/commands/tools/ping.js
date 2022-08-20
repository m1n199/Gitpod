const { SlashCommandBuilder } = require('discord.js');
const { execute } = require('../../events/client/ready');
module.exports = {
    data: new SlashCommandBuilder()
            .setName('ping')
            .setDescription('return my ping !'),
        async execute(interaction, client){
            const msg = await interaction.deferReplay({
                fetchReplay: true
            })
            const newMsg = `API Latency: ${client.ws.ping} 
                            Client Ping: ${msg.createdTimeStamp - interaction.createdTimeStamp}`;
            await interaction.editReplay({
                content: newMsg
            });
        }
        
}