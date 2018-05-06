const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("User Not Found.");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report Menu")
    .setColor("#007bff")
    .addField("User Reported", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);

    let moderationchannel = message.guild.channels.find(`name`, "mod");
    if(!moderationchannel) return message.channel.send("Need #mod channel to work. If #reports already exists give the bot permission.");

    message.delete().catch(O_o=>{});
    moderationchannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}