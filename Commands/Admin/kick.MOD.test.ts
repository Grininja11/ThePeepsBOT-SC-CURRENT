const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('kick')
    .setDescription('Kicks a member from this Guild (server).')
    .addUserOption(option =>
      option
        .setName('victim')
        .setDescription('Member to kick.')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('reason')
        .setDescription('A reason?')
    ),

  async execute(interaction, client) {

    const kickUser = interaction.options.getUser('victim');
    const kickMember = await interaction.guild.members.fetch(kickUser.id);
    const channel = interaction.channel;



    const noPermissionsKickEmbed = new EmbedBuilder()
      .setDescription('It looks like you **Do Not** have the power to kick Guild Members...')
      .setColor(0xc72c3b)

    if (!interaction.member.permissions.has(
      PermissionsBitField.Flags.KickMembers
    )) return await interaction.reply({

      embeds: [noPermissionsKickEmbed],
      ephemeral: true

    });


    const userLeftServerKickEmbed = new EmbedBuilder()
      .setDescription(`Uh... **${kickMember.username}** is no longer is in this Guild... \n What now?`)
      .setColor(0xc72c3b)

    if (!kickMember) return await interaction.reply({

      embeds: [userLeftServerKickEmbed],
      ephemeral: true

    });


    const higherOrEqualRoleKickEmbed = new EmbedBuilder()
      .setDescription(`Your judgement has failed on **${kickMember.tag}**. \n This is because they have an Higher or Equal role than you...`)
      .setColor(0xc72c3b)

    if (!kickMember.kickable) return await interaction.reply({

      embeds: [higherOrEqualRoleKickEmbed],

    });

    
    
    let reason = interaction.options.getString('reason');
    if (!reason) reason = 'No reason given.';



    const dmKickedEmbed = new EmbedBuilder()
      .setDescription(`Uh, it looks like you were just kicked from ${interaction.guild.name}. \n Reason: ${reason}`)
      .setColor(0x0000ff)

    await kickMember.send({

      embeds: [dmKickedEmbed]

    }).catch(err => {
      console.log(`[!]: Direct Message not sent. \n[!]: ${kickMember.username}'s Direct Messages's are Closed or has ThePeepsBOT blocked... \n[DEV]: What a Shame.`)
      return;
    });



    const errorKickMemberEmbed = new EmbedBuilder()
      .setDescription(`There was an error while trying to kick **${kickMember.username}**... \n Try to execute the command again.`)
      .setColor(0xff0000)


    await kickMember.kick({
          reason: reason
    }).catch(err => {
      interaction.reply({

        embeds: [errorKickMemberEmbed],
        ephemeral: true

      })      
    })



    const succesfullyKickEmbed = new EmbedBuilder()
      .setDescription(`Succesfully kicked ${kickUser.tag}. \n Reason? **${reason}**`)
      .setColor(0x16d943)

    await interaction.reply({

      embeds: [succesfullyKickEmbed]

    });

  }
};