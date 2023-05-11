const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Peeps_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('peepsdiscord')
    .setDescription('Discord Invite to a VERY COOL Discord Server!'),


  async execute(interaction) {

    const peepsDiscordInviteEmbed = new EmbedBuilder()
      .setTitle('PEEPS DISCORD')
      .setDescription('Join this **VERY COOL** Discord Server! \n\nCOOL SERVER => @ https://discord.gg/QvPp85TawF @ <= VERY COOL')
      .setColor(Peeps_Commands_Embed_Color)


    interaction.reply({

      embeds: [peepsDiscordInviteEmbed],

    });
  }
};