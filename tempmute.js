//*const Discord = require("discord.js");
//const ms = require("ms");
//let args = messageArray.slice(1);
//let messageArray = message.content.split(" ");
//module.exports.run = (bot, message, args) => {

  //  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    //if (!tomute) return message.reply("User not found.");
    //if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("User cannot be muted.");
   // let muterole = message.guild.roles.find(`name`, "mute");
   // if(!muterole) return message.channel.send("Need a role called 'mute' Also need permission 'manage roles' "); 
     //   }


   // let mutetime = args[1];
  //  if(!mutetime) return message.reply("You did not specify the time.");
//
//    await(tomute.addRole(muterole.id));
  //  message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)}`);
//
  //  setTimeout(function(){
    //    tomute.removeRole(muterole.id);
  //      message.channel.send(`<@${tomute.id}> has been unmuted.`);
//
  //  })
//
//
//module.exports.help = {
  //  name: "tempmute"
//}