const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Help_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('modhelp')
    .setDescription('Help Command for all Moderation Commands'),


  
  async execute(interaction) {


    const modHelpEmbed = new EmbedBuilder()
      .setDescription('Ok so Mod Commands, lets get this going. \nNOTE: \n$ = REQUIRED \n? = OPTIONAL \n\n**/kick *(Username $)* *(Reason ?)*** -> *To Kick A Guild Member* **!!! NOT FUNCTIONAL !!!** \n\n**/ban *(Username $)* *(Reason ?)*** -> *To Ban A Guild Member* **!!! NOT FUNCTIONAL !!!**')
      .setColor(Help_Commands_Embed_Color)

    interaction.reply({

      embeds: [modHelpEmbed]

    });
  }
};