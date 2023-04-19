const { Command } = require('handler.djs');
const { EmbedBuilder } = require('discord.js');

module.exports = new Command()
.setName('urls')
.setDescription("Fetch Urls From Database")
.setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const DATA = uptime.get({ KEY });
  const embed = new EmbedBuilder()
  .setTitle('مجموعة الروابط المضافة') 
  .setDescription(DATA.urls.join('\n') || )
 message.reply({ embeds: [embed] });
}