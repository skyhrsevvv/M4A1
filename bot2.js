const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "AR15";



client.on('message', msg => {
  if (msg.content === prefix +' 100') {
    msg.reply('\n 姓名:**888**\n 等級:**2星**\n 槍種:**000g  ');
  }
});
