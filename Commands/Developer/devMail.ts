const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Developer_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('devmail')
    .setDescription('Email the Developer!'),

  
  async execute(interaction) {


    const devMailEmbed = new EmbedBuilder()
      .setDescription('You can Email my creator at: \n**greninja11devcode@gmail.com**')
      .setColor(Developer_Commands_Embed_Color)

    interaction.reply({

      embeds: [devMailEmbed]

    });
  }
};