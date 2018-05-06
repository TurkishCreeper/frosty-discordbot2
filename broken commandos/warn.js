const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports.run = (bot, message, args) => {
    
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("No");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("User not found.");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't warn that");
    let reason = args.join(" ").slice(22)

    if(!warns[wUser.id]) warns [wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err)  =>  {
        if (err) console.log(err);
    });

    let warnEmbed = new Discord.RichEmbed()
     .setDescription("Warning Menu")
     .setAuthor(message.author.username)
     .setColor("#fffa00")
     .addField("User warned", wUser.tag)
     .addField("Warned In Channel", message.channel)
     .addField("Number of warnings", warns[wUser.id].warns)
     .addField("Reason", reason);

    let warnchannel = message.guild.channels.find(`name`, "mod");
    if(!warnchannel) return message.reply("#mod not found. Please create one and make sure that the bot has permission to read it");
    
    warnchannel.send(warnEmbed);

    if(warns[wUser.id].warns == 2){
        message.guild.member(wUser).kick(reason);
        message.channel.send(`${wUser.tag} has been kicked automatically because he/she has over 3 warnings.`)
    }
}

module.exports.help = {
    name: "warn"
}