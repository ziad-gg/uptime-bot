const { Client } = require("discord.js");
const { Application } = require("handler.djs");
const { UptimeBuilder } = require("uptimer-web");
const express = require('express');
const app = express();
const path = require("node:path");
const client = new Client({ intents: 3276799 });
client.app = new Application({
  client,
  commandsPath: path.join(__dirname, "./commands"),
  validationPath: path.join(__dirname, "./validation"),
});
client.app.setPrefix("!");
client.app.setCooldown({
  message: "**{Username}**, Cool down (**{counter}** left)",
  reference: true,
  long: true,
  Mdelete: "3s",
});
const uptimerApp = new UptimeBuilder({
  TYPE: "Database",
  TIMEOUT: 3e4,
  SKIPPED_INVALIED_URL_ERROR: true,
})
client.app.setData({
  uptimerApp
});
uptimerApp.startAll().then(s => console.log('[INFO]', `Uptiming: ${s ? 'Yes' : 'No, Error' }`));
client.once("ready", (client) => {
  //app.listen(3000);
  client.app.build();
  console.log("%s is Ready", client.user.tag);
});

client.login(process.env.token);
