const { Command } = require("handler.djs");

module.exports = new Command()
  .setName("delete")
  .setDescription("Delete your link from uptime")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;

  const uptime = message.data.get("uptimerApp");
  const KEY = message.author.id;
  if (args[0]?.toLowerCase() === "all") {
    if (!uptime.get({ KEY }).urls.length) return message.reply("**❌ I can't find links**");
    uptime.deleteAll_URLS({ KEY }).then(() => {
      message.reply(
        "**✅ All bots have been turned off 24 hours successfully**"
      );
    });
  } else {
    const URL = getHttpsUrl(args[0]);

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
