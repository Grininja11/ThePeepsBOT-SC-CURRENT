const { ActivityType } = require('discord.js');
const { Status_Message, Status } = require('../Config/botPresence.json');


module.exports = {

  name: 'ready',
  once: true,

  execute(client) {

    client.user.setPresence({
      activities: [{

        name: Status_Message,

        type: ActivityType.Playing

      }],

      status: Status,

    });

    console.log(`[BOT]: ThePeepsBOT user Presence Set. \n[CONFIG]: Current Verbatim Presence: ${Status_Message} \n[CONFIG]: Current Status: "${Status}".`);
    
  }
};