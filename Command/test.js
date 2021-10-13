const { Command } = require('discord-akairo')

class TestCommand extends Command {
    constructor() {
        super('hello', {
            aliases: ['hello']
        });
    }

    exec(message) {
        return message.reply('Hello');
    }
}

module.exports = TestCommand