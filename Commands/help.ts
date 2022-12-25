const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('help')
    .setDescription('I can Help!'),


  async execute(interaction) {


    const helpEmbed = new EmbedBuilder()
      .setDescription('Ah the infamous Help command every Discord Bot tends to have... \nImma just cut the crap and tell you everything. \n\n\n\n**OTHER HELP COMMANDS:** \n\n**/modhelp** (*For Mod / Admin related Commands*) \n**/peepshelp** (*For Peeps Related Commands*) **!!! NOT FUNCTIONAL !!!** \n**/devhelp** (*For DEV related Commands*) \n\n\n\n**SIMPLE BOT COMMANDS:** \n\n**/scode** (*My Source Code* :) ) \n**/patchnotes** (*Recent PatchNotes related to me*) \n\n\n\n **BOT WELLBEING COMMANDS:** \n\n**/bug** (*To Report any Bugs I can have...*) **!!! NOT FUNCTIONAL !!!** \n**/conn** (*To Test my Connection to the Discord servers / API and to the Hosting server*) **!!! NOT FUNCTIONAL !!!** \n\n\n\n\n This commands will be expanding all the time, check patchnotes for new commnds!')
      .setColor(0x06c5f0)

    interaction.reply({

      embeds: [helpEmbed]

    });
  }
};