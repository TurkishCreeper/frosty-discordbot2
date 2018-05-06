const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
  if(!args[2]) return message.reply("Please ask a full question.");
  let replies = ["Yes.", "No", "I have no idea", "Probably", "Probably not", "Ask again later", "Maybe"];

  let result = Math.floor((Math.random() * replies.length))
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#9800ff")
  .setThumbnail("https://openclipart.org/image/2400px/svg_to_png/17834/lemmling-8ball.png")
  .setFooter("Frosty | 8ball | Made by TCreeper")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed);
}

module.exports.help = {
  name: "8ball"
}
