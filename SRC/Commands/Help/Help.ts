const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Help_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('help')
    .setDescription('I can Help!'),


  async execute(interaction) {


    const helpEmbed = new EmbedBuilder()
      .setTitle('God Save Us All...')
      .setDescription('Ah the infamous Help command every Discord Bot tends to have... \nImma just cut the crap and tell you everything. \n\n\n\n**OTHER HELP COMMANDS:** \n\n**/modhelp** -> *For Mod / Admin related Commands* \n**/peepshelp** -> *For Peeps Related Commands* \n**/devhelp** -> *For DEV related Commands* \n**/setuphelp** -> *For Setup related Commands* **!!! NOT FUNCTIONAL !!!** \n**/musichelp** -> *For Music Related Commands* **!!! NOT FUNCTIONAL !!!** \n\n\n\n**SIMPLE BOT COMMANDS:** \n\n**/scode** -> *My Source Code* :) \n**/patchnotes** -> *Recent PatchNotes related to me* \n**/botinfo** -> *If you want to learn a bit more about me!* \n**/version** -> *My Current Version* \n\n\n\n **BOT WELLBEING COMMANDS:** \n\n**/bug** -> *To Report any Bugs I can have...* **!!! NOT FUNCTIONAL !!!** \n**/conn** -> *To Test my Connection to the Discord servers / API and to the Hosting server* **!!! NOT FUNCTIONAL !!!** \n\n\n\n\nBot commands will be expanding all the time, check Patchnotes for new commands and Command fixes!')
      .setColor(Help_Commands_Embed_Color)

    interaction.reply({

      embeds: [helpEmbed]

    });
  }
};