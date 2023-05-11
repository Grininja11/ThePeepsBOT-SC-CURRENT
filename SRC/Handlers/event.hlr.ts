function eventHandler(client) {


    const path = require('path');
    const fs = require('fs');

    const eventPath = path.join(__dirname, '../Events');
    const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.ts') || file.endsWith('.js'));

    try {

        for (const file of eventFiles) {

            const filePath = path.join(eventPath, file);
            const event = require(filePath);
        
            if (event.once) {
        
                client.once(event.name, (...args) => event.execute(...args));
        
            }
            else {
        
                client.on(event.name, (...args) => event.execute(...args));
            
            };
        };

    }
    catch (err) {

        console.error(err);

        console.log('[X]: eventHandler ran into an Error!');

    };
    

};



module.exports = {

    eventHandler

};