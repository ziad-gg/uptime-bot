const { UptimeBuilder } = require('
const { Command } = require('handler.djs');


module.exports = new Command()
.setName('uptime')
.setDescription("Uptime your bot 24/7")
.setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  
}