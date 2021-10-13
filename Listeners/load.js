const { Listener } = require('discord-akairo')

class LoadListener extends Listener {
    constructor() {
        super('load', {
            emitter: 'commandHandler',
            event: 'load'
        });
    }

    exec(command,isReload) {
        console.log(command.id);

        if (isReload) {
            console.log(command.id + " Reloaded");
        }
    }
}

module.exports = LoadListener;