const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "AR15";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
  if (msg.content === prefix +' help') {
    msg.reply('你好 我是最可靠的AR15 只要AR15 人型/裝備時間 的話你就可以查到你想要的東西喔!');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
