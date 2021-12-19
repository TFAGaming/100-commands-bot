const { MessageEmbed } = require('discord.js');
const emote = require("../../config/emotes.json");
const { default_prefix } = require("../../config.json");
const db = require('quick.db');

module.exports = {
    name: 'shop',
    category: "economy",
    aliases: ["store"],
    description: "Basic Equipment Store",
    usage: "shop",
    run: async (client, message, args) => {

        const store = new MessageEmbed()
        .setTitle('Store')
        .setColor("YELLOW")
        .addField('**Thief Outfit**', `**You Can't Rob Anyone Without This Set!**, Buy This For **300<a:Coin2:908992529574281249>**\n**Use \`${default_prefix}buy Thief Outfit\` To Buy**`)
      .addField('**Cofie**', `**You Can't Rob Anyone Without This Set!**, Buy This For **110<a:Coin2:908992529574281249>**\n**Use \`${default_prefix}buy Cofie\` To Buy**`)
      .addField('**Tea**', `**You Can't Rob Anyone Without This Set!**, Buy This For **100<a:Coin2:908992529574281249>**\n**Use \`${default_prefix}buy Tea\` To Buy**`)
        
        message.channel.send(store)
    }
}