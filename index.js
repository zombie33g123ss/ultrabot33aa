const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = "$"
const developers = ""

///bot حاله
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");

  client.user.setActivity(`${prefix}help | ${prefix}cmd`, { type: "WATCHING" });
});


      client.on("message", message => {
    if (message.content.toLowerCase() === prefix + "cmd") {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('green')
        .setTitle('Check Your DM’s')
     const embed = new Discord.RichEmbed()
         .setColor('green')
         .setTitle('Click To Join Support Server')
         .setURL('https://discord.gg/PxZjN3g')
         .setDescription(`
:emoji_1: أوامر الحماية:emoji_1: 
:arrow_down:

$antihack on × off   لتفعيل وتعطيل الحماية من الاختراق

$limitbans لتحديد الحد الاقصى للباند

$limitkicks  لتحديد الحد الاقصى للكيك

$limitkicks لتحديد الحد الاقصى من حذف الرولات

$limitchannelDelete الحد الاقصى لحذف الرومات

$antibots on ×  -  لمنع دخول لبوتات

$antibots off لايقاف منع دخمل البوتات

$limittime 1000 تكتبها بعد متكمل
─━━━━━━⊱✿⊰━━━━━━─ء─━━━━━━⊱✿
 :emoji_2:  أوامر المميزة:emoji_2:
 
$bc  رساله جماعيه لاعضاء السيرفر برودكاست

$room1 لعمل روم التقديمات

$room2 لعمل روم القبول والرفض

$تقديم

$قبول

$رفض

$new لعمل تكت

$closet لغلق التكت

$sug لاضافه اقتراح

$Devs لعرض مطورين البوت 
─━━━━━━⊱✿⊰━━━━━━─ء─━━━━━━⊱✿
 :emoji_3:  رومات البوت:emoji_3: 

روم الترحيب = welcome 

روم التوديع = goodbye

روم الانفايت = invites

روم الاقتراحات = suggestions
─━━━━━━⊱✿⊰━━━━━━─ء─━━━━━━⊱✿


         
`)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('Your DM’s is CLosed'))
   
   }
   });



client.on("message", m => {
  if (m.content === "$help") {
    let Dashboard = "https://UltraBot.zombie33g123ss.repl.co";
    var addserver ="https://discord.com/api/oauth2/authorize?client_id=742128946853969950&permissions=8&scope=bot ";
    var SUPPORT = "https://discord.gg/b94ecGz";
    let embed = new Discord.RichEmbed().setTitle(`روابط مساعدة`)
      .setDescription(`                                                                                                               
**[رابط أضافه البوت | 🤖 ](${addserver})** 

**[رابط موقع البوت | 🌎](${Dashboard})**

**[ رابط سيرفر الدعم الفني | 👦](${SUPPORT})**`);
    m.react("📩");
    
    m.author.send(embed);
  }
});

client.on('message', message => {
    if (message.content.startsWith("$Devs")) {
    message.channel.send({
    embed: new Discord.RichEmbed()

       .setThumbnail('https://cdn.discordapp.com/attachments/742414004495974512/743567888526606487/23.jpg')

       .setColor('RANDOM')
       .setTitle('``Developer`` ')
       .addField("Name |زومبـــي | 𝘿𝙑𝙋#9234",)

      
   
       .addField("year | 15",)
       .addField("Country | 🇮🇶",)

    })
    }
    });

client.on('message', message => {
    if (message.content.startsWith("$Devs")) {
    message.channel.send({
    embed: new Discord.RichEmbed()

       .setThumbnail('https://cdn.discordapp.com/avatars/607717392294084615/41d45fa69ee5be10935ef6acaaaea09f.png?size=2048')

       .setColor('RANDOM')
       .setTitle('``Designer`` ')
       .addField("Name |Net... 𝐕𝐄𝐑𝐘𝐋𝐎𝐖 #4449",)
      
   
       .addField("year | 15",)
       .addField("Country | 🇮🇶",)

    })
    }
    });
  
    client.on('message', message => {
      if (message.content.startsWith("$Devs")) {
      message.channel.send({
      embed: new Discord.RichEmbed()
  
         .setThumbnail('https://cdn.discordapp.com/avatars/727002099963002910/98168b491a4d2a0ca44610128954cfa9.png?size=2048')
  
         .setColor('RANDOM')
         .setTitle('``Designer`` ')
         .addField("Name |𝗡𝗘𝗧•𝗥𝘂𝘀𝘀𝗶#4559",)
         
     
         .addField("year | 15",)
         .addField("Country | 🇮🇶",)
  
      })
      }
      });
    

      
    client.on('message', message => {
      if (message.content.startsWith("$Devs")) {
      message.channel.send({
      embed: new Discord.RichEmbed()
  
         .setThumbnail('https://cdn.discordapp.com/avatars/649921399271456769/23cc518bb8bc89977108037437a2b492.png?size=2048')
  
         .setColor('RANDOM')
         .setTitle('``helper`` ')
         .addField("Name | ꧁RAYAN꧂Z-R#6945",)
      
         
     
         .addField("year | 15",)
         .addField("Country | 🇮🇶",)
  
      })
      }
      });
    

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
  client.on('message', message => {
    
      if(message.content.startsWith(prefix + "antibots on")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'On',
  }
  message.channel.send(`**AntiBots Join Is On**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
    
          })

  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots off")) {
          if(!message.channel.guild) return;
          if(!message.member.hasPermission('ADMINISTRATOR')) return;
  antibots[message.guild.id] = {
  onoff: 'Off',
  }
  message.channel.send(`**AntiBots Join Is Off**`)
            fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
              if (err) console.error(err)
              .catch(err => {
                console.error(err);
            });
              });
            }
  
          })
  
  client.on("guildMemberAdd", member => {
    if(!antibots[member.guild.id]) antibots[member.guild.id] = {
  onoff: 'Off'
  }
    if(antibots[member.guild.id].onoff === 'Off') return;
  if(member.user.bot) return member.kick()
  })
  
  fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
  .catch(err => {
  console.error(err);
  });
  
  })
  
  
  
  
  
  //btrolie




//الحمايه



let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));//btrolie
let config = JSON.parse(fs.readFileSync("./config.json", "UTF8"));
client.on("message", message => {
    if(!message.channel.guild) return;
    let user = anti[message.guild.id+message.author.id]
    let num = message.content.split(" ").slice(1).join(" ");
    if(!anti[message.guild.id+message.author.id]) anti[message.guild.id+message.author.id] = {
        actions: 0
    }//btrolie
    if(!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,//btrolie
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
if(message.content.startsWith(prefix + "limit")) {//btrolie

 
    if(!message.member.hasPermission('MANAGE_GUILD')) return;
    if(message.content.startsWith(prefix + "limitbans")) {
        if(!num) return message.channel.send("**→ | Supply a number !");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");//btrolie
        config[message.guild.id].banLimit = num;
        message.channel.send(`**→ | Changed bans limit to : ${config[message.guild.id].banLimit}.**`)//btrolie
    }
    if(message.content.startsWith(prefix + "limitkicks")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");//btrolie 
        config[message.guild.id].kickLimits = num;
        message.channel.send(`**→ | Changed kicks limit to : ${config[message.guild.id].kickLimits}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleDelLimit = num;
        message.channel.send(`**→ | Changed Role Deleting limit to : ${config[message.guild.id].roleDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limitroleCreate")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");//btrolie
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].roleCrLimits = num;
        message.channel.send(`**→ | Changed Role Creation limit to : ${config[message.guild.id].roleCrLimits}.**`)
    }//Zine , Mohamed Tarek , Kbosh
    if(message.content.startsWith(prefix + "limitchannelDelete")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].chaDelLimit = num;
        message.channel.send(`**→ | Changed Channel Deleting limit to : ${config[message.guild.id].chaDelLimit}.**`)
    }
    if(message.content.startsWith(prefix + "limittime")) {
        if(!num) return message.channel.send("**→ | Supply a number !**");
        if(isNaN(num)) return message.channel.send("**→ | Supply a number !**");
        config[message.guild.id].time = num;//btrolie//btrolie
        message.channel.send(`**→ | Changed Times limit to : ${config[message.guild.id].time}.**`)
    }
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
        if(e) throw e;
    });//btrolie
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
        if(e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor//btrolie
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3//btrolie
    }
    if (!anti[channel.guild.id + entry.id]) {//btrolie
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)//btrolie
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)//btrolie
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Channles__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {//btrolie
                if (e) throw e;
            });//btrolie
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }//btrolie
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});//btrolie

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,//btrolie
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {//btrolie
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , Deleted many __Roles__!**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }//btrolie

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,//btrolie
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");//btrolie
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**→ | ${entry.username} , is creating many __Rooms__.**`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
//btrolie


let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        });
        
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});


client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const welcome = member.guild.channels.find(channel => channel.name === "invites");
    welcome.send(` ${member} invited by ${inviter}  ( invites  ${invite.uses} ) `)
  });
});




client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":running_shirt_with_sash: | name :  ", `${member}`)
    .addField(
      ":loudspeaker: | نورت السيرفر يا قلبي",
      `Welcome to the server, ${member}`
    )
    .addField(":id: | user :", "**[" + `${member.id}` + "]**")
    .addField("➡| انت العضو رقم", `${member.guild.memberCount}`)

    .addField("Name:", `<@` + `${member.id}` + `>`, true)

    .addField(" الـسيرفر", `${member.guild.name}`, true)

    .setFooter(`${member.guild.name}`)
    .setTimestamp();

  channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
    .setDescription(
      `مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `
    )
    .addField(
      ":bust_in_silhouette:   تبقي",
      `**[ ${member.guild.memberCount} ]**`,
      true
    )
    .setColor("RED")
    .setFooter(
      `==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`,
      "https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png"
    );

  var channel = member.guild.channels.find("name", "goodbye");
  if (!channel) return;
  channel.send({ embed: embed });
});


client.on("message", message => {

                      if(message.content === 'رابط' ) {
                          
						  message.channel.send('**شيك الخاص يحلو 😉**').then(msg => {
							    
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});


client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (message.member.hasPermission(0x2000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .send(
                " " +
                  "**```fix\n" +
                  messagesDeleted +
                  " " +
                  ": عدد الرسائل التي تم مسحها" +
                  "```**"
              )
              .then(m => m.delete(5000));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .send(
              " " +
                "**```fix\n" +
                args[1] +
                " " +
                ": عدد الرسائل التي تم مسحها" +
                "```**"
            )
            .then(m => m.delete(5000));
          message.delete(60000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount}
رابط سيرفر الدعم الفني للبوت = https://discord.gg/b94ecGz `) 
}).catch(console.error)
});




client.on("message", (message) => {
     
   if (message.content.startsWith("$new")) {
        const reason = message.content.split(" ").slice(1).join(" ");      
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);     
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });     
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$closet")) {
        if (!message.channel.name.startsWith(`ticket$`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`$confirm\`. This will time out in 10 seconds and be cancelled.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })     
                   .then((collected) => {
                       message.channel.delete();
                   })     
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});






client.on("message", message => {
  if (message.content.startsWith(prefix + "تقديم")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.find(gg => gg.name === "التقديمات");
    if (!channel)
      return message.reply(
        "**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسمك الحقيقى  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            maxMatches: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **كم عمرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  maxMatches: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **هل تتفاعل في الرتبه🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          maxMatches: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هل ستحترم القوانين ؟ 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { maxMatches: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { maxMatches: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....جارى جمع البيانات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.RichEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**تقديم على رتبه** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`هل سوف يتفاعل ؟`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`هل سوف يحترم القوانين ؟`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Name : ${message.author.username}\nID User : ${message.author.id}`,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "room1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("التقديمات", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**");
  }
});




client.on("message", async message => {
  if (!message.guild) return;
  let mention = message.mentions.members.first();
  let role = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  let mySupport = message.guild.roles.find(gg => gg.name === role);
  if (message.content.startsWith(prefix + "قبول")) {
    let acRoom = message.guild.channels.find(gg => gg.name === "القبول-الرفض");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (acRoom) {
      if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
        return;
      if (!mention) return message.reply("منشن شخص");
      if (!role) return message.reply("ادخل اسم رتبة");
      if (!mySupport) return message.reply("هذه الرتبة غير موجودة");
      if (mention.roles.has(mySupport))
        return message.reply("هذا الشخص معه الرتبة مسبقا");
      if (mySupport.position >= message.member.highestRole.position)
        return message.channel.send(
          "انت لا تمتلك الصلاحيات الكافية :rolling_eyes:"
        );

      mention.addRole(mySupport).then(() => {
        acRoom.send(
          `**[ ${mySupport} ] واعطائك رتبة ${mention} تم قبولك بنجاح**`
        );
      });
    }
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "رفض")) {
    if (!message.channel.guild) return;

    let mention = message.mentions.members.first();
    let acRoom = message.guild.channels.find("name", "القبول-الرفض");
    let rrrr = message.content.split(/ +/).slice(2);
    let reason = rrrr.join(" ");
    if (!acRoom)
      return message.reply(
        `${prefix}room2 من فضلك انشاء روم **القبول-الرفض** او اكتب الامر`
      );
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!mention) return message.reply("منشن شخص");
    message.react("✅");
    acRoom
      .send(
        `**${mention} تم رفضك للأسف **
السبب : \`${reason}\``
      )
      .then(m => m.react("✅"));
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "room2")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.createChannel("القبول-الرفض", "text").then(c => {
      c.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**");
  }
});


const sug = require("./suggestions.json")
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
    let message = msg;
    let messageArray = msg.content.split(" ");
    let args = messageArray.slice(1); 
            let caseid = Date.now() + msg.author.discriminator
    if (msg.content.startsWith(prefix + "sug" || msg.content.startsWith(prefix + "sug"))){
            let suggestionchat = msg.guild.channels.find(channel => channel.name === "suggestions") 
            let suggestion =  args.join(' '); 
            if(!suggestion) return message.channel.send('الرجاء وضع اقتراحك بعد الأمر');
            if(!suggestionchat) return message.channel.send('لا يمكنني ايجاد الشات');
            let suggestionembed = new Discord.RichEmbed()
                .setAuthor('New Suggestion!')
                .addField('الأقتراح من قبل', `${message.author.tag} **|** ${message.author.id}`, true)
                .addField('اسم السيرفر المرسل منه الأقتراح', `${message.guild.name} **|** ${message.guild.id}`)
                .addField('الأقتراح', `${suggestion}`)
                .setColor('#ffffff')
                .setFooter(`ID: ${Date.now() + msg.author.discriminator}`)
                .setThumbnail(message.author.avatarURL)
                .setTimestamp();
            suggestionchat.send(suggestionembed).then(send =>{
            sug[caseid] = {
                message: suggestion,
                by: msg.author.id,
                Time: message.createdAt,
                thisisimportant: send.id
               }
               fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err);
                })
              })
            message.channel.send("**تم أرسال اقتراحك**")
              }
 
  if (msg.content.startsWith(prefix + "allsuggestions")){
    let data = undefined;
  for(i in sug){
      if (data === undefined) {
        data = "";
      }
      let data1 = sug[i].message
      let data2 = sug[i].by
      const stuff = `${data1} **By** <@${data2}>`;
      data += (stuff) + "\n\n";
    }
    if (data !== undefined) {
      const richEmbed = new Discord.RichEmbed();
      richEmbed.addField("Messages", data)
      msg.channel.send(richEmbed)
    }else if(data === undefined) return message.channel.send("Couldn't find any suggestion")
  }
  if (msg.content.startsWith(prefix + "dsug")){
        let that = args.join(' ')
        if(!that) return message.channel.send("Hmmm please put an id")
        if(sug[that] === undefined) return message.channel.send("Couldn't find that suggestion id!")
            message.channel.send("Deleted!")
            message.guild.channels.find(ch => ch.name === "الاقتراحات").fetchMessage(sug[that].thisisimportant).then(msg => msg.delete());
            delete sug[that];
            fs.writeFile("./suggestions.json", JSON.stringify(sug, null , 4), err =>{
                console.log(err)
              })
            }
        
});
client.on('message', message => {
  if (message.content.startsWith("$bot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``INFO  ULTRA BOT`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``servers``', [client.guilds.size], true)
     .addField('``channels``' , `[ ${client.channels.size} ]` , true)
     .addField('``Users``' ,`[ ${client.users.size} ]` , true)
     .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${client.user.id} ]` , true)
           .addField('``My Prefix``' , `[ > ]` , true)
           .addField('``My Language``' , `[ JavaScript ]` , true)
           .addField('``Bot Version``' , `[ v0.1 ]` , true)
           .setFooter('By | <@Your id>')
  })
  }
  });


client.login("token");
