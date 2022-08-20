require("dotenv").config();
// const { Client, GatewayIntentBits } = require('discord.js');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: GatewayIntentBits.Guilds });

const fs = require("fs");

client.commands = new Collection();
client.commandArray = [];

const functionFolders = fs.readdirSync(`./scr/functions`);
for(const folder of functionFolders){
    const functionFiles = fs
            .readdirSync(`./src/functions/${folder}`)
            .filter((file)=>file.endsWith(".js"));

    for(const file of functionFiles)
        require(`./src/functions/${folder}/${file}`)(client);
}






// client.on('ready', () => {
//     console.log(`${client.user.tag}  logged in`);
// });


client.login(process.env.TOKEN);