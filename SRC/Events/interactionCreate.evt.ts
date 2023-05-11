const { EmbedBuilder } = require('discord.js');
const { ERROR_Embed_Color } = require('../Config/colors.json');


module.exports = {


  name: 'interactionCreate',


  async execute(interaction) {

    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.log(`[!]: Command "${interaction.commandName}" does not exist OR is not registered as a Command using the "SlashCommand" Handler.`);
      return;
    }

  
    try {

      await command.execute(interaction);

    }
    catch (error) {
  
      console.error(error);
      console.log(`[X]: An Error was encounterd while trying to execute Command: ${interaction.commandName}.`);
  

      const interactionCreateErrorMessage = new EmbedBuilder()
        .setDescription(`Oops, I just ran into an error while trying to execute the "***${interaction.commandName}***" command, try to execute the command again!`)
        .setColor(ERROR_Embed_Color)

      await interaction.reply({

        embeds: [interactionCreateErrorMessage], 

        ephemeral: true

      });
    };
  }
};