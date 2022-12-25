const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('devdiscord')
    .setDescription("Get a Discord link to my Creator's Discord"),


  async execute(interaction) {

    
    const devDiscordEmbed = new EmbedBuilder()
      .setDescription("Gren's Server: \nhttps://discord.gg/SydBqhE")
      .setColor(0x1f06a7)

    interaction.reply({

      embeds: [devDiscordEmbed]

    });
  }
};