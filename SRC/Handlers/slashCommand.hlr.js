function slashCommandHandler(client) {


  require('dotenv').config({
  
    path: './SRC/Config/.env'
  
  });

  const fs = require('fs');
  const { REST, Routes } = require('discord.js');

  const {

    ThePeepsBOT_ID,
    ThePeepsBOT_DEVBUILD_ID,

    PeepsServer_ID,
    TEST_SERVER,

  } = require('../Hardcode/hardcoded-Ids.json');



  const commands = [];

  const commandFolders = fs.readdirSync('./SRC/Commands');

  commandFolders.forEach(Folder => {
    const commandFiles = fs.readdirSync(`./SRC/Commands/${Folder}/`).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

    commandFiles.forEach(commandFile => {
      const command = require(`../Commands/${Folder}/${commandFile}`);
      const properties = {Folder, ...command};

      client.commands.set(command.data.name, properties);
      commands.push(command.data.toJSON());
    });
  });



  const rest = new REST({

    version: '10'

  }).setToken(process.env.ThePeepsBOT_TOKEN);


  (async () => {

    try {

      console.log(`[/]: Loading ${commands.length} Application Commands using the "SlashCommand" Handler.`);

      const data = await rest.put(
        Routes.applicationGuildCommands(ThePeepsBOT_ID, PeepsServer_ID),
        { 

          body: commands
          
        },
      );

      console.log(`[/]: Loaded ${commands.length} Application Commands using the "SlashCommand" Handler.`);
      

    }
    catch (err) {

      console.error(err);

      console.log('[X]: Bot Application Commands ran into an Error!')

    };
  })();


};



module.exports = {

  slashCommandHandler

};