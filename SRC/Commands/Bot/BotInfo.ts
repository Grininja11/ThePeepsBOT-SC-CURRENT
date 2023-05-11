const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Bot_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('botinfo')
    .setDescription('About me!'),


  async execute(interaction) {

    
    const botInfoEmbed = new EmbedBuilder()
      .setTitle('BOT INFOMATION')
      .setDescription(`**HELLO!** \n\n\nI am ThePeepsBOT, I was made by Sinrow for ThePeeps and fans! \n\nI only know SlashCommands and I will have some hidden Commands! \n\nI also have my Source Code public! (**/scode**) \n\nLanguages I use is **Typescript** / **Javascript**, I use TS mostly. I also have some **Json** files for config things. \n\n\nBye Bye for now!`)
      .setColor(Bot_Commands_Embed_Color)


    interaction.reply({

      embeds: [botInfoEmbed]

    });
  }
};