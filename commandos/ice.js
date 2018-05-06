const Discord = require("discord.js");
let ice = require("../ice.json");
module.exports.run = (bot, message, args) => {

  if(!ice[message.author.id]){
    ice[message.author.id] = {
      ice: 0
    };
  }

  let uice = ice[message.author.id].ice;

  let iceEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#ffff00")
  .addField("💸", uice);

  message.channel.send(iceEmbed).then(msg => {msg.delete(5000)});
}

module.exports.help = {
  name: "ice"
}
