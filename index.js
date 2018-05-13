const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let ice = require("./ice.json");
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commandos/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commandos.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commandos/${f}`);
        console.log(`${f} loaded.`);
        bot.commands.set(props.help.name, props);
    });
});



bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);

    //bot.user.setActivity(`to everything | f>help`, {type: "listening"});
  });


  bot.on("message", function(message) {
    console.log(message.content);
    });

  bot.on("message", message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
          prefixes: botconfig.prefix
        };
      }

      if(!ice[message.author.id]){
        ice[message.author.id] = {
          ice: 0
        };
      }

      let iceAmt = Math.floor(Math.random() * 15) + 1;
      let baseAmt = Math.floor(Math.random() * 15) + 1;
      console.log(`${iceAmt} ; ${baseAmt}`);
      if(iceAmt === baseAmt){
        ice[message.author.id] = {
          ice: ice[message.author.id].ice + iceAmt
        };
      fs.writeFile("./ice.json", JSON.stringify(ice));

      //let iceEmbed = new Discord.RichEmbed()
      // .setAuthor(message.author.username)
       //.setcolor("#ffff00")
       //.addField("💸", `${iceAmt} ice added!`);

    //  message.channel.send(iceEmbed).then(msg => {msg.delete(5000)});
      }

      let xpAdd = Math.floor(Math.random() * 7) + 8;
      console.log(xpAdd);

      if(!xp[message.author.id]){
        xp[message.author.id] = {
          xp: 0,
          level: 1,
        };
      }

      let curxp = xp[message.author.id].xp;
      let curlvl = xp[message.author.id].level;
      let nxtLvl = xp[message.author.id].level * 300;
      xp[message.author.id].xp = curxp + xpAdd;

      if(nxtLvl <= xp[message.author.id].xp){
        xp[message.author.id].level = curlvl + 1;
        let lvlup = new Discord.RichEmbed()
        .setTitle("Level Up!")
        .setColor("#59ff00")
        .addField("New Level", curlvl + 1);

        message.channel.send(lvlup).then(msg => {msg.delete(10000)});


      }

      fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if(err) console.log(err)
      });

      let prefix = prefixes[message.guild.id].prefixes;
      if(!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply("Please wait 5 seconds between commands.")
      }
      if(!message.member.hasPermission("ADMINISTRATOR")){
        cooldown.add(message.author.id);
      }

      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);

      let commandfile = bot.commands.get(cmd.slice(prefix.length));
      if(commandfile) commandfile.run(bot, message, args);

      setTimeout(() => {
        cooldown.delete(message.author.id)
      }, cdseconds * 1000)

  });

bot.login(process.env.BOT_TOKEN);
