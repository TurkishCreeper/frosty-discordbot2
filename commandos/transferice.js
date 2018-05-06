const Discord = require("discord.js");
const fs = require("fs");;
let ice = require("../ice.json");

module.exports.run = (bot, message, args) => {

  if(!ice[message.author.id]){
    return message.reply("You don't have any blocks of ice.")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!args[1]) return message.reply("Usage f>transferto <user> <amount>")
  if(!ice[pUser.id]){
    ice[pUser.id] = {
      ice: 0
    };
  }

  let pice = ice[pUser.id].ice;
  let sice = ice[message.author.id].ice;

  if(sice < args[0]) return message.reply("Not enough blocks of ice.");

  ice[message.author.id] = {
    ice: sice - parseInt(args[1])
  };

  ice[pUser.id] = {
    ice: pice + parseInt(args[1])
  };

  message.channel.send(`${message.author}, ${pUser} has received your ${args[1]} block(s) of ice.`)

  fs.writeFile("./ice.json", JSON.stringify(ice), (err) => {
    if(err) console.log(err)
  });
}

module.exports.help = {
  name: "transferice"
}
