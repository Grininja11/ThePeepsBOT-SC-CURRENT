const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Peeps_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('peepsmail')
    .setDescription('Email us! (Please we are lonely)'),


  async execute(interaction) {


    const peepsMailEmbed = new EmbedBuilder()
      .setTitle('PEEPS EMAIL')
      .setDescription(`Email! \n\n\n**peeps.member.info@gmail.com** \n\n\n\nPlease do **NOT** send all of us Death Threats. That is uncalled for, Also Please don't DOXX any of "ThePeeps", Any member of our Discord and *Most importanlly*, Yourself. \n\nSinrow Checks this Email on a regular basis.`)
      .setColor(Peeps_Commands_Embed_Color)
      

    interaction.reply({

      embeds: [peepsMailEmbed]

    });
  }
};