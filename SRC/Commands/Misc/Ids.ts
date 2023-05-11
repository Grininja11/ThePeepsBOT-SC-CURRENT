const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Misc_Commands_Embed_Color } = require('../../Config/colors.json');

const {

    ThePeepsBOT_ID,
    ThePeepsBOT_DEVBUILD_ID,
    Sinrow_ID,
    LoganSlinderman_ID,
    ElijahPerry_ID,
    SuperKamiGotanks_ID

} = require('../../Hardcode/hardcoded-Ids.json');


module.exports = {

    data: new SlashCommandBuilder()

        .setName('ids')
        .setDescription("Lists all ID's Hardcoded within me."),


    async execute(interaction) {


        const idsEmbed = new EmbedBuilder()
            .setTitle("ID List")
            .setDescription(`This is just a list of ID's I was Hardcoded with: \n\n\n**The Peeps ID's** \n*Sinrow:* **${Sinrow_ID}** \n*LoganSlinderman:* **${LoganSlinderman_ID}** \n*Elijah Perry:* **${ElijahPerry_ID}** \n*SuperKamiGotanks:* **${SuperKamiGotanks_ID}** \n\n\n**My ID's** \n*Public-Build Bot:* **${ThePeepsBOT_ID}** \n*Developer-Build Bot:* **${ThePeepsBOT_DEVBUILD_ID}**`)
            .setColor(Misc_Commands_Embed_Color)
        
        interaction.reply({

            embeds: [idsEmbed]

        });
    }
};