const { Command } = require('handler.djs');

module.exports = new Command()
.setName('delete')
.setDescription("Delete Url From Database")
.setExecution(Execute);

async function Execute() {
  const { message, args } = this;
  
}