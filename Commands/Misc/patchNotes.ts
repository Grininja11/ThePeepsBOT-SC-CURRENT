const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Misc_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {
  
  data: new SlashCommandBuilder()

    .setName('patchnotes')
    .setDescription('Newest PatchNotes for this Bot!'),


  async execute(interaction) {


    const patchNotesEmbed = new EmbedBuilder()
      .setDescription('Date: 12-24-2022 \nNo new PatchNotes nor any PatchNotes.')
      .setColor(Misc_Commands_Embed_Color)

    interaction.reply({

      embeds: [patchNotesEmbed]

    });
  }
};