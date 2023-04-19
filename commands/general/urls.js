const { Command } = require("handler.djs");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command()
  .setName("urls")
  .setDescription("Get all urls by user")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const DATA = uptime.get({ KEY });
  const embed = new EmbedBuilder()
    .setTitle(`مجموعة الروابط المضافة (${DATA?.urls.length || 0})`)
    .setDescription(DATA?.urls.join("\n") || " ");
  message.reply({ embeds: [embed] });
}
