const { CommandBuilder } = require("handler.djs");

module.exports = new CommandBuilder()
  .setName("delete")
  .setDescription("Delete your link from uptime")
  .setCooldown("15s")
  .setCategory("uptime")
  .setExecution(Execute);

async function Execute(message) {

  const uptime = message.getData("uptimerApp");
  const KEY = message.author.id;
  if (message[0]?.toLowerCase() === "all") {
    if (!uptime.get({ KEY }).urls.length) return message.reply("**❌ I can't find links**");
    uptime.deleteAll_URLS({ KEY }).then(() => {
      message.reply(
        "**✅ All bots have been turned off 24 hours successfully**"
      );
    });
  } else {
    const URL = getHttpsUrl(message[0]);

    if (!uptime.isAlready({ KEY, URL }))
      return message.reply("**❌ This link is not added**");
    uptime.deleteURL({ KEY, URL }).then(() => {
      message.reply(
        "**✅ This bot has been successfully turned off 24 hours**"
      );
    });
  }
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
