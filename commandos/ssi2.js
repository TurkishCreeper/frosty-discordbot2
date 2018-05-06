const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let ssi2embed = new Discord.RichEmbed()
    .setDescription("Even more information about this server.")
    .setColor("#000950")
    .setThumbnail(sicon)
    .setFooter("Frosty | ssi2 | Made by TCreeper")
    .addField("This servers ID", message.guild.id)
    .addField("You joined at", message.member.joinedAt)
    .addField("You joined at timestamp", message.member.joinedTimestamp)
    .addField("Is this server large?", message.guild.large)
    .addField("Bots name", message.guild.me)
    .addField("Total amount of members", message.guild.memberCount)
    .addField("Members", message.guild.members)
    .addField("Name of this server", message.guild.name)
    .addField("Name acronym of this server", message.guild.nameAcronym)
    .addField("Owner of this server", message.guild.owner)
    .addField("ID of the owner in this server", message.guild.ownerID)
    .addField("Server presences", message.guild.presences)
    .addField("Server Region", message.guild.region)
    .addField("Roles in server", message.guild.roles)


    return message.channel.send(ssi2embed);
}

module.exports.help = {
    name: "ssi2"
}
