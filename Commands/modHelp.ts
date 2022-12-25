const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('modhelp')
    .setDescription('Help Command for all Moderation Commands'),


  
  async execute(interaction) {


    const modHelpEmbed = new EmbedBuilder()
      .setDescription('Ok so Mod Commands, lets get this going. \nNOTE: \n$ = REQUIRED \n? = OPTIONAL \n\n\nKick (*To Kick a Member*): \n**/kick *(Username $)* *(Reason ?)***\n\n\n Ban (*To Ban A Member*): \n**/ban *(Username $)* *(Reason ?)*** **!!! NOT FUNCTIONAL !!!**')
      .setColor(0x06c5f0)

    interaction.reply({

      embeds: [modHelpEmbed]

    });
  }
};