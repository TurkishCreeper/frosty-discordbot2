const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Frosty 1.3.2")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .addField("The bots name", bot.user.username)
    .addField("Bots creation date", bot.user.createdAt);
    return message.channel.send(botembed);
}

module.exports.help = {
    name: "info"
}
