const {Client, 
      Collection, 
       Discord
      } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { default_prefix } = require("./config.json")
const { config } = require('dotenv')
const { prefix } = require("./config.json")
const bot = new Client({
  disableEveryone: true
});
 require('discord-buttons')(client);
const emote = require("./config/emotes.json");
const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const fetch = require("fetch");
const db = require("quick.db")
let number = 70
console.log(`Number = ${number}`) //correct method

//----Handler------
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

// HOST

require("http").createServer((req, res) => res.end(`Bot Is Online.`)).listen(process.env.PORT || 8000)


//------------------------Snipe--------------------------

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});


//--------Message-------
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);});


//
client.on('message', async (message) => {
  if(message.content.includes(client.user.id)) {
    const embed = new MessageEmbed()
    .setTitle(`Hello!`)
    .setDescription(`I'm ${client.user.tag}, a 100+ command Bot!\n\nMy prefix is \`${prefix}\`! \nUse \`${prefix}help\` to see my commands!`)
    .setColor(`#FFFFFF`)
    .setFooter(`Coded by: T.F.A#1887.`)
  return message.channel.send(embed);
}
})

// BOT STATUS & CONSOLE LOG

client.on("ready", () => {
  console.log('\x1b[32m%s\x1b[0m', `[READY] Client Is Ready. \n[CLIENT] Bot: ${client.user.tag}`);
  client.user.setPresence({
    activity : {
      name: "dc!help", 
      
      type: "WATCHING"
    },

    status : 'dnd'
  })
})

client.login(process.env.TOKEN);

// Bot Coded By: T.F.A#1887