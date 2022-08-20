const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async() => {
        const eventFolders = fs.readdirSync(`./scr/events`);
        for (const folder of eventFolders) {
            const eventFiles = fs
                .readdirSync(`./src/events/${folder}`)
                .filter((file) => file.endsWith(".js"));
            switch(folder){
                case"client":
                break;
                default:
            }
        }
    };
};