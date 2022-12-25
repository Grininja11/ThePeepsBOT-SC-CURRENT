module.exports = {

  name: 'interactionCreate',

  async execute(interaction) {

    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.log(`[!]: Command ${interaction.commandName} does not exist.`);
      return;
    }
  
    try {
      await command.execute(interaction);
    }
    catch (error) {
  
      console.error(error);
      console.log(`[X]: A error was encounterd while trying to execute command: ${interaction.commandName}.`);
  
      await interaction.reply({
        content: `Oops, I just ran into an error while trying to execute the "***${interaction.commandName}***" command, try to execute the command again!`,
        ephemeral: true
      });
    }
  }
  
};