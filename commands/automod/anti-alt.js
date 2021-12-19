const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require("discord.js")

module.exports = {
  name: "anti-alt",
  category: "automod",
  aliases: ["antialt"],
  run: async (client, message, args) => {
       if (!message.member.hasPermission("MANAGE_GUILD"))
    {
       message.channel.send(
        ":x: You don't have permission to use this command!\n**Required Permission:** ``MANAGE_GUILD``"
      );
      return;
}
 var wchannel = args[0];
 if(!wchannel)
 {
   return message.reply(":x: Please Give me ``enable`` or ``disable!``")
 }
 if(wchannel == "enable")
 {
   db.set(`antialt_${message.guild.id}`, wchannel);
   message.reply(`:white_check_mark: **OK!** now anti-alt is __Enabled__!`);
   return;
 }
 else if(wchannel == "disable")
 {
   db.delete(`antialt_${message.guild.id}`);
   message.reply(`:white_check_mark: **OK!** now anti-alt is __Disabled__!`);
   return;
 }else {
 return message.reply(":x: You didnt enter ``enable`` or ``disable!``")
 }


  }
}
