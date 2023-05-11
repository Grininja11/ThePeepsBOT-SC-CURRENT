const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');
const { ERROR_Embed_Color, SUCCESS_Embed_Color, WARNING_Embed_Color } = require('../../Config/colors.json');


module.exports = {

  data: new SlashCommandBuilder()

    .setName('kick')
    .setDescription('Kicks a Member from this Guild (Server)')

    .addUserOption((options) => 
      options

        .setName('victim')
        .setDescription('The Member to Kick.')
        .setRequired(true)

    )

    .addStringOption((options) =>
      options

        .setName('reason')
        .setDescription('A Reason for this kick? (NOT REQUIRED)')
        .setMaxLength(500)

    ),



    async execute(interaction) {

      const cmdVictim = interaction.guild.members.cache.get(interaction.options.getUser('victim').id);
      const reason = interaction.options.getString('reason');
      const cmdCaller = interaction.guild.members.cache.get(interaction.user.id);
      const guildName = interaction.guild.name;
    



      if (!cmdVictim) {

        const victimDoesNotExistEmbed = new EmbedBuilder()
          .setTitle("What A Shame")
          .setDescription(`The member: **${cmdVictim}** Does Not exist within this guild or They just fled the guild to avoid Ultimate Judgement. \n\nWhat a shame.`)
          .setColor(ERROR_Embed_Color)


        return interaction.reply({

          embeds: [victimDoesNotExistEmbed]

        });
      };



      if (!cmdCaller.permissions.has(PermissionsBitField.Flags.KickMembers)) {

        const canNotKickGuildMembersEmbed = new EmbedBuilder()
          .setTitle('Check Again')
          .setDescription(`\nOK So! \n\nYour judgement has **Failed** because you do Not have permissions to Kick Guild Members. \n\nThe person that was watching this channel thinking they was about to get kicked from this Guild is probaly rolling on their floor laughing... \nIm sorry.`)
          .setColor(ERROR_Embed_Color)


        return interaction.reply({

          embeds: [canNotKickGuildMembersEmbed]

        });
      };



      if (cmdVictim.user.bot) {

        const victimIsBotEmbed = new EmbedBuilder()
          .setTitle('This Is A Bot')
          .setDescription(`Huh. I thought I was cold-hearted. Apparently Not, I refuse to kick Bots... \n\nIt so happeneds that **${cmdVictim}** is a Bot...`)
          .setColor(ERROR_Embed_Color)

        
        return interaction.reply({

          embeds: [victimIsBotEmbed]

        });
      };



      if (cmdCaller.user.bot) {

        return interaction.reply('HOW?? HOW THE FUCK?? YOU ARE A BOT HOW CAN YOU... WHAT????? HOW CAN Y- You know what... Imma take 10.')

      };



      if (cmdVictim === cmdCaller) {
        
        const bruhEmbed = new EmbedBuilder()
          .setTitle('Bruh')
          .setDescription('Did... Did you just really tried to Kick yourself? \n\nWhy? \n\nWhy did you think that it was going to work?')
          .setColor(WARNING_Embed_Color)


        return interaction.reply({

          embeds: [bruhEmbed]

        });
      };



      if (!cmdVictim.kickable) {

        const canNotKickHigherRoleEmbed = new EmbedBuilder()
          .setTitle('Cant Kick This User')
          .setDescription(`Your judgement has **Failed** on *${cmdVictim}* because They are the Owner of this Guild or they have a Higher Role than me.`)
          .setColor(ERROR_Embed_Color)


        return interaction.reply({

          embeds: [canNotKickHigherRoleEmbed]

        });
      };



      const kickEmbed = new EmbedBuilder()
        .setTitle(`Kicked a Member`)
        .setDescription(`A Guild member was kicked from **${guildName}**`)
        .addFields([

          {
            name: "*Command Caller*:",
            value: `**${cmdCaller}**`
          },

          {
            name: "*Command Victim*:",
            value: `**${cmdVictim}**`
          },

          {
            name: "*Reason*:",
            value: `**${reason || "No Reason Given by Command Caller."}**`
          },

        ])
        .setColor(SUCCESS_Embed_Color)
        .setTimestamp();


      interaction.reply({

        embeds: [kickEmbed]

      });


      cmdVictim.kick({

        reason: `${cmdCaller} - ${reason || "No Reason Given by Command Caller."}`
      
      });
    },
};