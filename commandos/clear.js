const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  let x = args[0]
  if (x > 100) return message.channel.send("Please choose a value lower than 101.");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
  if(!args[0]) return message.channel.send("Please specify amount of messages to clear");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${x} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
