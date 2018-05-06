const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let ssi3embed = new Discord.RichEmbed()
    .setDescription("Even more information about this server.")
    .setColor("#000420")
    .setThumbnail(sicon)
    .setFooter("Frosty | ssi3 | Made by TCreeper")
    .addField("Server splash image hash", message.guild.splash)
    .addField("URL of splash image", message.guild.splashURL)
    .addField("System channel of this server", message.guild.systemChannel)
    .addField("System channel ID", message.guild.systemChannelID)
    .addField("Server Verification Level", message.guild.verficationLevel)
    .addField("Which voice channel are you connected to?", message.guild.voiceConnection);

    return message.channel.send(ssi3embed);
}

module.exports.help = {
    name: "ssi3"
}
