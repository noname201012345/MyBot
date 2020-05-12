const Discord = require('discord.js');
const tools = require('./functions.js');

const client = new Discord.Client();
const prefix = '~';

const token = 'NzA2NDI1ODkyMDkxNDYxNjYz.XrPd-w.gSdoLSN_8UqRww4BvsZxsK0i9GU';

client.on('message', message => {
  
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(' ');
  let cmd = args.shift().toLowerCase();
  
  if (!msg.startsWith(prefix)) return;
  if (message.author.bot) return;
  
  try {
    
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, tools);
    
  } catch (e) {
  
    console.log(e.message);
    
  } finally {
    
    console.log(`${message.author.tag} ran the command ${cmd}`);
    
  }
  
})
client.login(token);