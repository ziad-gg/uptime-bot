const { CommandBuilder } = require("handler.djs");

module.exports = new CommandBuilder()
  .setName("ping")
  .setDescription("Ping Me")
  .setCooldown("5s")
  .setExecution(Execute);

async function Execute(message) {
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
