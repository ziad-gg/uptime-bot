const { Command } = require("handler.djs");

module.exports = new Command()
  .setName("uptime")
  .setDescription("Uptime your bot 24/7")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  
  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const URL = args[0];
  
  
  if (uptime.isAlready({ KEY, URL })) return message.reply('** 
  uptime.add({ KEY, URL }).then(() => {
    message.reply('**✅ Your bot has been successfully operated 24 hours**');
  }).catch(() => {
    message.reply('**❌ This link is incorrect **');
  });
}
