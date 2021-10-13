require('dotenv').config()

const { AkairoClient, CommandHandler } = require('discord-akairo')
const { Intents } = require('discord.js');

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: '485890330256998405'
        }, {
            disableMentions: 'everyone',
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_BANS,
                Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
                Intents.FLAGS.GUILD_INTEGRATIONS,
                Intents.FLAGS.GUILD_WEBHOOKS,
                Intents.FLAGS.GUILD_INVITES,
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.GUILD_PRESENCES,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.GUILD_MESSAGE_TYPING,
                Intents.FLAGS.GUILD_MESSAGES,
                Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                Intents.FLAGS.DIRECT_MESSAGES,
                Intents.FLAGS.DIRECT_MESSAGE_TYPING
            ]
        });

        this.CommandHandler = new CommandHandler(this, {
            directory: './Command/',
            prefix: '!'
        })

        this.CommandHandler.loadAll()
    }
}

const client = new MyClient();

client.login(process.env.TOKEN);