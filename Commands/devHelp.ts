const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('devhelp')
    .setDescription('Help Command for DEV Commands!'),


  async execute(interaction) {


    const devHelpEmbed = new EmbedBuilder()
      .setDescription("Dev Commands: \n\n\nDevMail (*If you need to Email the Dev*): \n**/devmail** \n\n\nDevDiscord (*The Dev's Discord Server*): \n**/devdiscord** \n\n\nDevNews (*News from the Developer!*): \n**/devnews** **!!! NOT FUNCTIONAL !!!**")
      .setColor(0x06c5f0)


    interaction.reply({

      embeds: [devHelpEmbed]

    });
  }
};