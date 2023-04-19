const { Command } = require('handler.djs');

module.exports = new Command()
.setName('urls')
.setDescription("Fetch Urls From Database")
.setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  
}