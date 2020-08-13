const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready',()=>{
    console.log("This bot is logged in!"):
});
client.on('message'=>{
    if (message.content == 'hi'){
        message.reply ('lol');
    }
});
client.login(process.env.BOT_TOKEN);
