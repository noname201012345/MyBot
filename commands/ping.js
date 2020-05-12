exports.run = (client, message, args, tools) => {
  
  tools.embed(message.channel, '**Ping!**', 10000);
  
  //message.channel.send(tools.ping());
  
}