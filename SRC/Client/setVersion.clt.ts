const { BOT_Version } = require('../../Version.json');


module.exports = {

    name: 'ready',
    once: true,

    execute(client) {

        console.log(`[CLIENT]: Current Bot Version: ${BOT_Version}`);
    
    }
};