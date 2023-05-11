require('dotenv').config({
  
  path: './SRC/Config/.env'

});

const { Collection } = require('discord.js');

const { slashCommandHandler } = require('./Handlers/slashCommand.hlr.js')
const { eventHandler } = require('./Handlers/event.hlr.ts');
const { clientHandler } = require('./Handlers/client.hlr.ts');

const client = require('./Config/IntentBits.ts');



client.commands = new Collection();



eventHandler(client);
slashCommandHandler(client);
clientHandler(client);



module.exports = client;

client.login(process.env.ThePeepsBOT_TOKEN);