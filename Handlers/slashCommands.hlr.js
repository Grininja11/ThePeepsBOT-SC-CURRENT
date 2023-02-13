function slashCommandHandler(client) {


  require('dotenv').config();
  const fs = require('fs');
  const { REST, Routes } = require('discord.js');
  const { PeepsBot_ID, PeepsServer_ID } = require('../Hardcode/hardcoded-Ids.json');



  const commands = [];

  const commandFolders = fs.readdirSync('./Commands');

  commandFolders.forEach(Folder => {
    const commandFiles = fs.readdirSync(`./Commands/${Folder}/`).filter(file => file.endsWith('.js') || file.endsWith('.ts'));

    commandFiles.forEach(commandFile => {
      const command = require(`../Commands/${Folder}/${commandFile}`);
      const properties = {Folder, ...command};

      client.commands.set(command.data.name, properties);
      commands.push(command.data.toJSON());
    });
  });



  const rest = new REST({

    version: '10'

  }).setToken(process.env.PeepsBot_TOKEN);


  (async () => {

    try {
      console.log(`[/]: Loading ${commands.length} Application Commands using the "SlashCommand" Handler.`);

      const data = await rest.put(
        Routes.applicationGuildCommands(PeepsBot_ID, PeepsServer_ID),
        { 
          body: commands
        },
      );

      console.log(`[/]: Loaded ${commands.length} Application Commands using the "SlashCommand" Handler.`);
    }
    catch (error) {
      console.error(error);
      console.log('[X]: Bot Application Commands ran into an Error!')
    }
  })();


};



module.exports = {

  slashCommandHandler

};