require('dotenv').config();
const Discord = require('discord.js');
const { Client, Events, GatewayIntentBits, Collection, ActivityType } = require('discord.js');
const { slashCommandHandler } = require('./Handlers/slashCommands.hlr')

const path = require('path');
const fs = require('fs');


const client = new Client({
  intents: [

    GatewayIntentBits.Guilds, // guild

    GatewayIntentBits.GuildMembers, // guild members

    // GatewayIntentBits.GuildBans, // guild bans
    
    //  GatewayIntentBits.GuildEmojisAndStickers, // emojis and stickers
    
    GatewayIntentBits.GuildIntegrations, // discord Integrations
    
    // GatewayIntentBits.GuildWebhooks, // discord webhooks
    
    //  GatewayIntentBits.GuildInvites, // guild invites
    
    // GatewayIntentBits.GuildVoiceStates, // voice
    
    // GatewayIntentBits.GuildPresences, // user presence
    
    GatewayIntentBits.GuildMessages, //guild messages
    
    GatewayIntentBits.GuildMessageReactions, // message reactions
    
    GatewayIntentBits.GuildMessageTyping, // message typing
    
    GatewayIntentBits.DirectMessages, // dm messages
    
    GatewayIntentBits.DirectMessageReactions, // dm message reaction
    
    // GatewayIntentBits.DirectMessageTyping, // dm message typing
    
    GatewayIntentBits.MessageContent, // message content
    
  ]
});



client.commands = new Collection();

const commandsPath = path.join(__dirname, 'Commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}


const eventsPath = path.join(__dirname, 'Events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}


client.once('ready', () => {

  client.user.setPresence({
    activities: [{
      name: '"The Discord Bot that was doomed to fail from the start"',
      type: ActivityType.Watching
    }],
    status: 'online',
  })
});




client.login(process.env.PeepsBot_TOKEN);

slashCommandHandler(client);
module.exports = client;