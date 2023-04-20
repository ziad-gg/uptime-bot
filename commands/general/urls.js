const { Command } = require("handler.djs");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command()
  .setName("urls")
  .setDescription("Get all urls by user")
  .setExecution(Execute);

var Counter = 0;

async function Execute() {
  const { message, args } = this;
  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const DATA = uptime.get({ KEY });
  Counter = 0;
  const embed = new EmbedBuilder()
    .setTitle(`مجموعة الروابط المضافة (${DATA?.urls.length || 0})`)
    .setDescription(DATA?.urls.map(getDomainLink).join("\n") || " ");
  message.reply({ embeds: [embed] });
}

function getDomainLink(url) {
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  let domain = url.replace(/^https?:\/\//, "");
  domain = domain.split("/")[0];
  domain = domain.split(".").slice(-2).join(".");
  ++Counter;
  return `[**#${Counter}** ${domain}](${url})`;
}
