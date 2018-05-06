const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let superserverembed = new Discord.RichEmbed()
    .setDescription("Super information about this server. >ssi2 for even more info")
    .setColor("#0000ff")
    .setThumbnail(sicon)
    .addField("AFK channel of this server", message.guild.afkChannel)
    .addField("AFK channel id", message.guild.afkChannelID)
    .addField("AFK timeout (seconds)", message.guild.afkTimeout)
    .addField("Application that made this server", message.guild.applicationID)
    .addField("Is this server available", message.guild.available)
    .addField("Channels", message.guild.channels)
    .addField("Client that created this server", message.guild.client)
    .addField("This server was created on", message.guild.createdAt)
    .addField("Creation timestamp", message.guild.createdTimestamp)
    .addField("Default role", message.guild.defaultRole)
    .addField("Embedded Images enabled?", message.guild.embedEnabled)
    .addField("Emojis", message.guild.emojis)
    .addField("Explicit Content Filter", message.guild.explicitContentFilter)
    .addField("Servers Icons Hash", message.guild.icon);

    return message.channel.send(superserverembed);
}

module.exports.help = {
    name: "superserverinfo"
}
