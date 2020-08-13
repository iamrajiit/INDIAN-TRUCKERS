const Discord = require('discord.js');
const client = new Discord.client();




client.on('ready',()=>{
    console.log("This bot is logged in!"):
});
client.on('message'=>{
    if (message.content == 'hi'){
        message.reply ('lol');
    }
});
client.login("process.env.BOT_TOKEN");
