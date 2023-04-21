const { Client } = require("discord.js");
const { Application } = require("handler.djs");
const { UptimeBuilder } = require("uptimer-web");
const express = require('express');
const app = express();
const path = require("node:path");
const client = new Client({ intents: 3276799 });

const App = new Application({
  client,
  commandsPath: path.join(__dirname, "./commands"),
  validationPath: path.join(__dirname, "./validation"),
});

App.setPrefix("!");

App.setCooldown({
  message: "**{Username}**, Cool down (**{counter}** left)",
  reference: true,
  long: true,
  Mdelete: "5s",
});

const uptimerApp = new UptimeBuilder({
  TYPE: "Database",
  TIMEOUT: 1000,
  SKIPPED_INVALIED_URL_ERROR: false,
});

App.setData({
  uptimerApp
});

client.app = App

uptimerApp.startAll().then(s => console.log('[INFO]', `Uptiming: ${s ? 'Yes' : 'No, Error' }`));
client.once("ready", (client) => {
  App.build();
  console.log("%s is Ready", client.user.tag);
});

client.login(process.env.token);
