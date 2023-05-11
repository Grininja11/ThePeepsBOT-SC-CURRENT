const { ActivityType } = require('discord.js');
const { Status_Message, Status_Type, Activity_Type } = require('../Config/botPresence.json');


module.exports = {

  name: 'ready',
  once: true,

  execute(client) {

    client.user.setPresence({
      activities: [{

        name: Status_Message,

        type: ActivityType.Playing

      }],

      status: Status_Type,

    });

    console.log(`[CLIENT]: ThePeepsBOT user Presence Set. \n[CLIENT]: Current Verbatim Presence: ${Status_Message} \n[CLIENT]: Current Status: "${Status_Type}".`);
    
  }
};