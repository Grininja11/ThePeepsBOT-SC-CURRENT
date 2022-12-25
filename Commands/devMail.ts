const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('devmail')
    .setDescription('Email the Developer!'),

  
  async execute(interaction) {


    const devMailEmbed = new EmbedBuilder()
      .setDescription('You can Email my creator at: \n**greninja11devcode@gmail.com**')
      .setColor(0x1f06a7)

    interaction.reply({

      embeds: [devMailEmbed]

    });
  }
};