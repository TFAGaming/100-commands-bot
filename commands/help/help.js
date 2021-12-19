const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {
      
    //EMBED MESSAGES
    // ----------------------- HOME ----------------------- 

    const embed = new Discord.MessageEmbed()
    .setTitle('Help Menu:')
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Page Home\n"+ client.user.username + "", client.user.displayAvatarURL())
    .setImage(`https://media.discordapp.net/attachments/921764773236973568/921821411578875944/standard_1.gif`)
    .setDescription("🏅 __**My Features:**__ \nThis bot is a +100 commands bot and hosted 24/7 by UptimeRobot!\n⚒ __**Commands:**__\nTo get all the commands, just simply click on the buttons below!\n📜 __**Bot Info:**__\n```yml\nBot Token: [PRIVATE]\nBot ID: 921709323669884948\nDeveloper: T.F.A#1887```\n__**💻 Support Server:**__\n[Click Here to Join!](https://discord.gg/7zrFC2NPrd)")
    .setColor("BLACK")

    // ----------------------- ADMIN AND MOD ----------------------- 

    const embed1 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("RED")
    .setTitle('🛡 Admin & Moderator Commands:')
    .setDescription("**- Admin Commands:**\n ``nuke``, ``poll``, ``react``, ``snipe``, ``tweet``, ``anti-alt``, ``autorole``, ``roleall``. \n**- Moderator Commands:**\n``addrole``, ``ban``, ``clear``, ``hackban``, ``kick``, ``lock``, ``mute``, ``removerole``, ``slowmode``, ``timelockdown``, ``unlock``, ``unmute``, ``uptime``.\n\n```yml\nPrefix: dc!\n```")
    .setFooter("Help Menu - Page: 1")

    // ----------------------- ECONOMY AND INFO ----------------------- 

    const embed2 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLUE")
    .setTitle('💵 Info & Economy Commands:')
    .setDescription("**- Info Commands:**\n ``avatar``, ``badge``, ``botinfo``, ``roleinfo``, ``servericon``, ``serverinfo``, ``userinfo``. \n**- Economy Commands:**\n``addmoney``, ``balance``, ``buy``, ``daily``, ``deposit``, ``givemoney``, ``inventory``, ``leaderboard``, ``removemoney``, ``rob``, ``shop``, ``use``, ``weekly``, ``withdraw``, ``work``.\n\n```yml\nPrefix: dc!\n```")
    .setFooter("Help Menu - Page: 2")

    // ----------------------- FUN AND IMAGES ----------------------- 

    const embed3 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("GREEN")
    .setTitle('🕹 Fun & Images Commands:')
    .setDescription("**- Fun Commands:**\n ``ascii``, ``coinflip``, ``drake``, ``emojify``, ``joke``, ``reverse``, ``rps``, ``8ball``.\n**- Images Commands:**\n``meme``, ``slap``, ``300yr``, ``achievement``, ``captcha``, ``comment``, ``hug``, ``gay``, ``meeting``, ``rip``. \n\n```yml\nPrefix: dc!\n```")
    .setFooter("Help Menu - Page: 3")

    // ----------------------- UTILITY AND GITHUB ----------------------- 

    const embed4 = new Discord.MessageEmbed()
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("YELLOW")
    .setTitle('📚 Utility & Github:')
    .setDescription("**- Utility Commands:**\n ``advice``, ``announce``, ``findemoji``, ``members``, ``timer``, ``help``, ``idp``, ``invite``.\n**- Github:**\n[Click Here To Get T.F.A Github Profile.](https://github.com/TFAGaming)\n\n```yml\nPrefix: dc!\n```")
    .setFooter("Help Menu - Page: 4")
    .setThumbnail(client.user.displayAvatarURL())


    //BUTTONS CONFIGUTATIONS
    
    let button0 = new MessageButton()
    .setLabel(`Home`)
    .setID(`help`)
    .setEmoji(`🏠`)
    .setStyle("red");

    let button1 = new MessageButton()
    .setLabel(`Admin & Moderation`)
    .setID(`help1`)
    .setEmoji(`🛡`)
    .setStyle("gray");

    let button2 = new MessageButton()
    .setLabel(`Info & Economy`)
    .setID(`help2`)
    .setEmoji(`💵`)
    .setStyle("gray");

    let button3 = new MessageButton()
    .setLabel(`Fun & Images`)
    .setID(`help3`)
    .setEmoji(`🕹`)
    .setStyle("gray");

    let button4 = new MessageButton()
    .setLabel(`Utility & Github`)
    .setID(`help4`)
    .setEmoji(`📚`)
    .setStyle("gray");

    let row = new MessageActionRow()
    .addComponents(button0, button1, button2, button3, button4);

    //BUTTONS SETUP

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        //BUTTONS CONFIGURATION 2

        if(b.id == "help") {

            MESSAGE.edit(embed, row);
            await b.reply.defer()

        }

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    //EXPIRE MENU COMMAND MESSAGE

    collector.on('end', (b) => {
        MESSAGE.edit(`:x: **This help menu is expired!** Type the command again to view.\n**Command:** __dc!help__`)
    })

    }
  };