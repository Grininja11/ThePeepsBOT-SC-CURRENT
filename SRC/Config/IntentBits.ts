const { GatewayIntentBits, Client } = require('discord.js');


const client = new Client({
  
    intents: [

  
      GatewayIntentBits.Guilds, // Guilds
  
      GatewayIntentBits.GuildMembers, // Guild Members
  
      GatewayIntentBits.GuildBans, // Guild Bans
      
      // GatewayIntentBits.GuildEmojisAndStickers, // Emoji(s) and Sticker(s)
      
      GatewayIntentBits.GuildIntegrations, // Discord & Guild Integration(s)

      // GatewayIntentBits.GuildWebhooks, // Discord & Guild Webhook(s)
      
      // GatewayIntentBits.GuildInvites, // Guild Invites
      
      GatewayIntentBits.GuildVoiceStates, // Voice

      // GatewayIntentBits.GuildPresences, // Guild Member Presence
      
      GatewayIntentBits.GuildMessages, // Guild Messages

      // GatewayIntentBits.GuildMessageReactions, // Message Reaction(s)
      
      GatewayIntentBits.GuildMessageTyping, // Message Typing
      
      GatewayIntentBits.DirectMessages, // Direct BOT Message(s)

      // GatewayIntentBits.DirectMessageReactions, // Direct BOT Message Reaction(s)

      // GatewayIntentBits.DirectMessageTyping, // Direct BOT Message Typing

      GatewayIntentBits.MessageContent, // Message Content

      
    ]

});



module.exports = client