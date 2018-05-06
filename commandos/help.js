const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Frosty 1.3.2 Primary Commands List")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .setFooter("Frosty | Page 1/2 | help | Made by TCreeper")
    .addField("help", "Displays what you are seeing right now")
    .addField("help2", "Displays more commands")
    .addField("info", "Information about this bot")
    .addField("8ball", "Usage: '8ball <question>'Classic 8ball game")
    .addField("ice", "Shows amount of ice you have.")
    .addField("transferice", "Usage: 'transferice <user> <amount>' Give blocks of ice to people")
    .addField("level", "Views your XP, Level status")

    return message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
