const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { Bot_Commands_Embed_Color } = require('../../Config/colors.json');
const { BOT_Version } = require('../../../Version.json');

module.exports = {

    data: new SlashCommandBuilder()

        .setName('version')
        .setDescription('My Current Version!'),


    async execute(interaction) {

        const versionEmbed = new EmbedBuilder()
            .setTitle(`BOT VERSION: ${BOT_Version}`)
            .setDescription(`\n\nLegend Key: \n**PB** = "Public Build" \n**FB** = "Fix Build" \n**TB** = "Test Build" \n**DB** = "Dev Build"`)
            .setColor(Bot_Commands_Embed_Color)


        interaction.reply({

            embeds: [versionEmbed]

        });
    }
};