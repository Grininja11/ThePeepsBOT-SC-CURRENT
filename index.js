require('dotenv').config();
const Discord = require('discord.js');
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { slashCommandHandler } = require('./Handlers/slashCommands.hlr')

const path = require('path');
const fs = require('fs');



const client = new Client({
  intents: [

    GatewayIntentBits.Guilds, // Guilds

    GatewayIntentBits.GuildMembers, // Guild Members

    // GatewayIntentBits.GuildBans, // Guild Bans
    
    // GatewayIntentBits.GuildEmojisAndStickers, // Emoji(s) and Sticker(s)
    
    GatewayIntentBits.GuildIntegrations, // Discord & Guild Integration(s)
    
    // GatewayIntentBits.GuildWebhooks, // Discord & Guild Webhook(s)
    
    // GatewayIntentBits.GuildInvites, // Guild Invites
    
    // GatewayIntentBits.GuildVoiceStates, // Voice
    
    // GatewayIntentBits.GuildPresences, // Guild Member Presence
    
    GatewayIntentBits.GuildMessages, // Guild Messages
    
    GatewayIntentBits.GuildMessageReactions, // Message Reaction(s)
    
    GatewayIntentBits.GuildMessageTyping, // Message Typing
    
    GatewayIntentBits.DirectMessages, // Direct BOT Message(s)
    
    GatewayIntentBits.DirectMessageReactions, // Direct BOT Message Reaction(s)
    
    // GatewayIntentBits.DirectMessageTyping, // Direct BOT Message Typing
    
    GatewayIntentBits.MessageContent, // Message Content
    
  ]
});




client.commands = new Collection();




const eventsPath = path.join(__dirname, 'Events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
  
	if (event.once) {

		client.once(event.name, (...args) => event.execute(...args));

	}
  else {

		client.on(event.name, (...args) => event.execute(...args));
    
	}
};



client.login(process.env.PeepsBot_TOKEN);

slashCommandHandler(client);
module.exports = client;