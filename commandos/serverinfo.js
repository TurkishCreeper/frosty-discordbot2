const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Information about this server. >superserverinfo for more info")
    .setColor("#007bff")
    .setThumbnail(sicon)
    .setFooter("Frosty | serverinfo | Made by TCreeper")
    .addField("This servers Name", message.guild.name)
    .addField("This server was created on", message.guild.createdAt)
    .addField("You joined this server at", message.member.joinedAt)
    .addField("Total members", message.guild.memberCount);


    return message.channel.send(serverembed);
}

module.exports.help = {
    name: "serverinfo"
}
