require('dotenv').config()
const { AkairoClient, CommandHandler } = require('discord-akairo')

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: ['485890330256998405','282620912287744010','587931530622533652']
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './Commands',
            prefix: '#'
        });

        this.listenerHandler = new this.listenerHandler(this, {
            directory: './Listeners'
        })

        this.listenerHandler.setEmitters({commandHandler:this.commandHandler})
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }
}

const client = new MyClient();

client.login(process.env.TOKEN);

