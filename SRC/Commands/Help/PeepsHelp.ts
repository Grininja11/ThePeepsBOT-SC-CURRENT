const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Help_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('peepshelp')
    .setDescription('For PEEPS related Commands!'),



  async execute(interaction) {
    

    const peepsHelpEmbed = new EmbedBuilder()
      .setTitle('PEEPS HELP')
      .setDescription('PEEPS Commands: \n\n\n**/peepsquotebook** -> *Our infamous Qoutes* **!!! NOT FUNCTIONAL !!!** \n\n**/peepsdiscord** -> *Discord invite to ThePeeps Official Discord Server* \n\n**/peepsmail** -> *An Mailing Address that you can Email too about anything!* \n\n**/peepsmembers** -> *Gets you a info list about ThePeeps* **!!! NOT FUNCTIONAL !!!** \n\n**/peepswebsite** -> *Links you our Website!* **!!! NOT FUNCTIONAL !!!**')
      .setColor(Help_Commands_Embed_Color)


    interaction.reply({

      embeds: [peepsHelpEmbed]

    });
  }
};