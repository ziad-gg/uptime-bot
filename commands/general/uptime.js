const { Command } = require("handler.djs");

module.exports = new Command()
  .setName("uptime")
  .setDescription("Uptime your bot 24/7")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;

  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  const URL = getHttpsUrl(args[0]);

  if (uptime.isAlready({ KEY, URL }))
    return message.reply("**❌ This link is already added**");
  uptime
    .add({ KEY, URL })
    .then((e) => {
    console.log(e)
      message.reply("**✅ Your bot has been successfully operated 24 hours**");
    })
    .catch(() => {
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
