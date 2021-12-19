const db = require("quick.db");
const Discord = require("discord.js")
const colors = require('./../../colors.json')
module.exports = {
  name: "autorole",
  category: "automod",
  aliases: ["ar", "auto-role"],
  run: async (client, message, args) => {
     if (message.member.hasPermission("MANAGE_SERVER")) {
      if (message.content.includes("@everyone")) {
        return message.reply(":x: Everyone is already automatically given by Discord... Just mention a role except Everyone!");
      }
    
if(!args[0])
{
  return message.reply(":x: Command Incorrect! Use: ``dc!autorole <role name/id>``");
}
  var role1 = message.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }
if(args[0] == "disable" || args[0] == "off")
{
 
  db.delete(`autorole_${message.guild.id}`);
  return message.reply(":white_check_mark: **Done!** I have Disabled auto role in your server enable it by adding any role!");
}
else {
message.reply(`:white_check_mark: **Done!** I will give this role when someone joins the Guild Or Server - ${role1}!`)
db.set(`autorole_${message.guild.id}`, role1);
}
     }
  }
}
