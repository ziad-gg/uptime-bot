const { Command } = require("handler.djs");

module.exports = new Command()
  .setName("ping")
  .setDescription("Ping Me")
  .setCooldown("5s")
  .setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  message
    .reply({
      content: "Pong!",
    })
    .then((msg) => {
      msg
        .edit(
          `Pong! (${msg.createdTimestamp - message.createdTimestamp}ms)`
        )
        .catch(() => {});
    })
    .catch(() => {});
}
