const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No")
    let rMember =  message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!rMember) return message.reply("User not found.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role.");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Role not found");

    if(rMember.roles.has(gRole.id));
    await(rMember.addRole(gRole.id));

    try{
        await rMember.send(`You have been given the role ${gRole.name}`)
    }catch(e){
       message.channel.send(`<@{rMember.id}> has been given the role ${gRole.name}. Tried DM but DM is locked`)
    }
}

module.exports.help = {
    name: "arole"
}