const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Frosty 1.3.2 Secondary Commands List")
    .setColor("#007bff")
    .setThumbnail(bicon)
    .setFooter("Frosty | Page 2/2 | help2 | Made by TCreeper")    
    .addField("report", "Usage: 'report <user> <reason>' Lets you report people (Do NOT abuse it)")
    .addField("say", "MOD | Usage: 'say <word/sentence>' Tells the bot to tell what you tell it (xd)")
    .addField("clear", "MOD | Usage 'clear <1-100>' Clears the channel (bulk delete)")
    .addField("prefix", "MOD | Usage 'prefix <prefix>' Custom prefix. Default f>")
    .addField("serverinfo", "Information about this server")
    .addField("superserverinfo", "Super server information page 1")
    .addField("ssi2", "Super server information page 2")
    .addField("ssi3", "Super server information page 3");
    return message.channel.send(botembed);
}

module.exports.help = {
    name: "help2"
}
