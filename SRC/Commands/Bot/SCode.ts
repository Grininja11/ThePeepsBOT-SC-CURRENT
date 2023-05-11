const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Bot_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('scode')
    .setDescription('Link to the Source Code of this bot!'),



  async execute(interaction) {


    const linkSCodeEmbed = new EmbedBuilder()
      .setTitle('SOURCE CODE')
      .setDescription('ThePeepsBOT (MY) Source Code, *Courtesy of **Sinrow** (Dev)*. \n\nhttps://github.com/TheCoolPeeps/ThePeepsBOT-SC-CURRENT (CURRENT) \n\nhttps://github.com/Grininja11/ThePeepsBOT-SC-DEPRECATED (DEPRECATED)')
      .setColor(Bot_Commands_Embed_Color)

    interaction.reply({

      embeds: [linkSCodeEmbed]

    });
  }
}