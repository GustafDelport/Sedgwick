const { Listener } = require('discord-akairo')

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        console.log("Ready Steady!");
    }
}

module.exports = ReadyListener;