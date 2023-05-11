const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Bot_Commands_Embed_Color } = require('../../Config/colors.json');
const { BOT_Version } = require('../../../Version.json');

const fs = require('node:fs');
//const pathToPatchnotes = require('../../../Patchnotes.txt');

const PNupdateDate = '00/00/0000';


module.exports = {
  
  data: new SlashCommandBuilder()

    .setName('patchnotes')
    .setDescription('Newest PatchNotes for ME! (kill me)'),


  async execute(interaction) {

    

    const patchNotesEmbed = new EmbedBuilder()
      .setTitle(`Date: ${PNupdateDate} | Version: ${BOT_Version}`)
      .setDescription('Kill me, i fucking hate coding this fucking command.... \n\n**PatchNotes is in the GitHub repo *( /scode )* **')
      .setColor(Bot_Commands_Embed_Color)

    interaction.reply({

      embeds: [patchNotesEmbed]

    });
  }
};

/*


Legit kill me, I fucking hate coding this dumb command...


*/