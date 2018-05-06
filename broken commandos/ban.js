const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("User not found");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.channel.send("Add a reason");

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No");
    if(bUser.hasPermission("MANAGE_ROLES")) return message.channel.send("That person cannot be banned.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban Menu")
    .setColor("#ff0000")
    .addField("User Banned", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let banchannel = message.guild.channel.find(`name`, "mod")
    if(!banchannel) return message.channel.send("Need #mod channel to work. If #reports already exists give the bot permission.");

    message.guild.member(bUser).ban(bReason);
    moderationchannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}