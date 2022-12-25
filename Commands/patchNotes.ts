const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  
  data: new SlashCommandBuilder()

    .setName('patchnotes')
    .setDescription('Newest PatchNotes for this Bot!'),


  async execute(interaction) {


    const patchNotesEmbed = new EmbedBuilder()
      .setDescription('Date: 12-24-2022 \nNo new PatchNotes nor any PatchNotes.')
      .setColor(0xffffff)

    interaction.reply({

      embeds: [patchNotesEmbed]

    });
  }
};