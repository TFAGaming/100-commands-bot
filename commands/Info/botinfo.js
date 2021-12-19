const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
  name: "botinfo",
	category: "info",
    aliases: ['binfo', 'botstats', 'stats', 'info'],
    description: 'Check\'s bot\'s status',
	
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor(colors.lightgreen)
            .setTitle(`Space bot ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**<a:online:883527954846609430> Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**<a:online:883527954846609430> WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**<a:online:883527954846609430> Memory:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('				**<a:gear2:883916009478697070> Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`				**<a:HeartBlue:884247751104294913> User Count:**`, `${client.users.cache.size} users`, true)
            .addField('				**<a:gear2:883916009478697070> Commands:**', `${client.commands.size} cmds`,true)
            .addField('				**<a:HeartBlue:884247751104294913> Node:**', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('				**<a:HeartBlue:884247751104294913> Cached Data:**', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('				**<a:HeartBlue:884247751104294913> Discord.js:**', `${discordjsVersion}`, true)
            .setTimestamp()
        );
    }
}