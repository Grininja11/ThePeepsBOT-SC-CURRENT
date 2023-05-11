const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Help_Commands_Embed_Color } = require('../../Config/colors.json');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('devhelp')
    .setDescription('Help Command for DEV Commands!'),


  async execute(interaction) {


    const devHelpEmbed = new EmbedBuilder()
      .setTitle('DEVELOPER HELP')
      .setDescription("Dev Commands: \n\n\n**/devmail** -> *A mailing address you can use to Email my Creator!* \n\n\n**/devdiscord** -> *An invite to the Dev's Discord Server.* \n\n\n**/devnews** -> *Latest news from the Developer!* **!!! NOT FUNCTIONAL !!!**")
      .setColor(Help_Commands_Embed_Color)


    interaction.reply({

      embeds: [devHelpEmbed]

    });
  }
};