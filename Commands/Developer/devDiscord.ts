const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Developer_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('devdiscord')
    .setDescription("Get a Discord link to my Creator's Discord"),


  async execute(interaction) {

    
    const devDiscordEmbed = new EmbedBuilder()
      .setDescription("Gren's Server: \nhttps://discord.gg/SydBqhE")
      .setColor(Developer_Commands_Embed_Color)

    interaction.reply({

      embeds: [devDiscordEmbed]

    });
  }
};