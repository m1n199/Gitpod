module.exports = {
    name: 'interaction',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;
            try {
                await command.execute(interaction, client)
            } catch (error) {
                console.log(error);
                await interaction.replay({
                    content: 'hey something went wrong while executiong is command... !',
                    ephemeral: true

                })
            }
        }
    }
}