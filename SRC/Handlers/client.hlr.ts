function clientHandler(client) {


    const path = require('path');
    const fs = require('fs');

    const clientPath = path.join(__dirname, '../Client');
    const clientFiles = fs.readdirSync(clientPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));


    try {

        for (const file of clientFiles) {

            const filePath = path.join(clientPath, file);
            const buildClient = require(filePath);

            if (buildClient.once) {

                client.once(buildClient.name, (...args) => buildClient.execute(...args));

            }
            else {

                client.on(buildClient.name, (...args) => buildClient.execute(...args));

            };
        };

    }
    catch (err) {

        console.error(err);

        console.log('[X]: clientHandler ran into an Error!')

    };
};



module.exports = {

    clientHandler

};