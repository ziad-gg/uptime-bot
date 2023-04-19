const { Client } = require('discord.js');
const { Application } = require('handler.djs');
const Web = require('uptimer-web');
const path = require('node:path');

const client = new Client({ intents: 3276799 });

client.app = new Application({
  client,
  commandsPath: path.join(__dirname, './commands'),
})

client.app.setPrefix('!');


client.once("ready", async (client) => {
 client.app.build();
 console.log("%s is Ready", client.user.tag);
});

client.login(process.env.token);