const Discord = require("discord.js");
const botconfig = require("../botconfig");
let xp = require("../xp.json");

module.exports.run = (bot, message, args) => {
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#59ff00")
  .addField("Level", curlvl, true)
  .addField("Experience", curxp, true)
  .setFooter(`${difference} XP till level up.`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed).then(msg => {msg.delete(20000)});

}

module.exports.help = {
  name: "level"
}
