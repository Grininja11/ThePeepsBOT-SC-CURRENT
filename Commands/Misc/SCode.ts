const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Misc_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('scode')
    .setDescription('Link to the Source Code of this bot!'),



  async execute(interaction) {


    const linkSCodeEmbed = new EmbedBuilder()
      .setDescription('ThePeepsBOT (MY) Source Code, *Courtesy of **Greninja11** (Dev)*. \nhttps://github.com/TheCoolPeeps/ThePeepsBOT-SC-CURRENT')
      .setColor(Misc_Commands_Embed_Color)

    interaction.reply({

      embeds: [linkSCodeEmbed]

    });
  }
}