const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = (bot,message,args) => {

  let {body} = superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor("#473011")
  .setTitle("Random Dog")
  .setImage(body.url);

  message.channel.send(dogembed);

}

module.exports.help = {
    name: "dog"
}
