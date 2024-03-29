const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Help_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('modhelp')
    .setDescription('Help Command for all Moderation Commands'),


  
  async execute(interaction) {


    const modHelpEmbed = new EmbedBuilder()
      .setTitle('MODERATOR HELP')
      .setDescription('Ok so Mod Commands, lets get this going. \nNOTE: \n$ = REQUIRED \n? = OPTIONAL \n\n**/kick *(Username $)* *(Reason ?)*** -> *To Kick A Guild Member* \n\n**/ban *(Username $)* *(Reason ?)*** -> *To Ban A Guild Member*')
      .setColor(Help_Commands_Embed_Color)

    interaction.reply({

      embeds: [modHelpEmbed]

    });
  }
};