function slashCommandHandler(client) {


  require('dotenv').config();
  const fs = require('fs');
  const { REST, Routes } = require('discord.js');

  const { PeepsBot_ID, TEST_SERVER } = require('../id.json');



  const commands = [];

  const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js') || file.endsWith('.ts'));

  for (const file of commandFiles) {
    const command = require(`../Commands/${file}`);
    commands.push(command.data.toJSON());
  }



  const rest = new REST({
    version: '10'
  }).setToken(process.env.PeepsBot_TOKEN);


  (async () => {

    try {
      console.log(`[/]: Loading ${commands.length} application commands using the "SlashCommand" Handler.`);

      const data = await rest.put(
        Routes.applicationGuildCommands(PeepsBot_ID, TEST_SERVER),
        { 
          body: commands
        },
      );

      console.log(`[/]: Loaded ${commands.length} application commands using the "SlashCommand" Handler`);
    }
    catch (error) {
      console.error(error);
      console.log('[X]: Bot application commands ran into an Error!')
    }
  })();


};
module.exports = { slashCommandHandler };