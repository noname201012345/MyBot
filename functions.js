const Discord = require("discord.js");

module.exports = {
  
  ping: function() {
  
    return 'hello!';
    
  },
  
  embed: function(channel, message, timer) {
    
    channel = channel.channel || channel;
    
    channel.send({embed: {
      description: message,
      color: 0x1db954
    }}).then(msg => {
      if (!isNaN(timer)) msg.delete({timeout: timer})
    });
    
  }
  
}