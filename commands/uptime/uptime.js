const { CommandBuilder } = require("handler.djs");

module.exports = new CommandBuilder()
  .setName("uptime")
  .setDescription("Uptime your bot 24/7")
  .setCooldown("10s")
  .setCategory("uptime")
  .setExecution(Execute);

async function Execute(message) {

  const uptime = message.getData("uptimerApp");
  const KEY = message.author.id;
  const URL = getHttpsUrl(message[0]);

  if (uptime.isAlready({ KEY, URL }))
    return message.reply("**❌ This link is already added**");
  uptime
    .add({ KEY, URL })
    .then((e) => {
      message.reply("**✅ Your bot has been successfully operated 24 hours**");
    })
    .catch((e) => {
      message.reply("**❌ This link is incorrect**");
    });
}

function getHttpsUrl(url) {
  const validUrlRegex = /^(ftp|http|https|ftps):\/\/[^ "]+$/;
  if (validUrlRegex.test(url)) {
    if (url.startsWith("https://") || url.startsWith("http://")) {
      return url.replace(/^http(s?):\/\//i, "https://").replace(/^www\./i, "");
    } else {
      return "https://" + url.replace(/^www\./i, "");
    }
  } else {
    return "https://" + url;
  }
}
