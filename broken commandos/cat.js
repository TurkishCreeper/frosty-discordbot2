const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (bot,message,args) => {

  let {body} = superagent
  .get(`http://aws.random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setColor("#473011")
  .setTitle("Random Cat")
  .setImage(body.file);

  message.channel.send(catembed);

}

module.exports.help = {
    name: "cat"
}
