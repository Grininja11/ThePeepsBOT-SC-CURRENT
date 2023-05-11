const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Legal_Commands_Embed_Color } = require('../../Config/colors.json');


module.exports = {

    data: new SlashCommandBuilder()

        .setName('legal')
        .setDescription('Legal Crap, read if you want.'),


    async execute(interaction) {

        const legalEmbed = new EmbedBuilder()
            .setDescription('e')
            .setColor(Legal_Commands_Embed_Color)


        interaction.reply({

            embeds: [legalEmbed]

        });
    }
};