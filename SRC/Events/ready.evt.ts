module.exports = {

  name: 'ready',
  once: true,

  execute(client) {

    console.log(`[DISCORD]: Logged in as "${client.user.tag}".`);

  }
};