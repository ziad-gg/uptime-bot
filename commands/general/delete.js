const { Command } = require("handler.djs");

module.exports = new Command()
  .setName("delete")
  .setDescription("Delete your link from uptime")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;

  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const URL = args[0];

  if (!uptime.isAlready({ KEY, URL }))
    return message.reply("**❌ This link is not added**");
  uptime.deleteURL({ KEY, URL }).then(() => {
    message.reply("**✅ This bot has been successfully turned off 24 hours**");
  });
}
