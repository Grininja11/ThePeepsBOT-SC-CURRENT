const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('scode')
    .setDescription('Link to the Source Code of this bot!'),



  async execute(interaction) {


    const linkSCodeEmbed = new EmbedBuilder()
      .setDescription('ThePeepsBOT (MY) Source Code, *Courtesy of **Greninja11** (Dev)*. \nhttps://github.com/Grininja11/ThePeepsBOT-SC-CURRENT')
      .setColor(0xffffff)

    interaction.reply({

      embeds: [linkSCodeEmbed]

    });
  }
}