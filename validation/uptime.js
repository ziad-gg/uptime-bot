const { Validation } = require("handler.djs");

module.exports = new Validation()
  .setCommnads(["uptime", 'delete'])
  .setExecution((message, next) => {
    const args = message.content
      .slice(message.client.app.prefix.length)
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    if (!args[0]) return message.reply("**❌ Please type the link**");
    else next();
  });
