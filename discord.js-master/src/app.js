/**
 * Created by Mikael on 2018-04-18.
 */
/*
 A ping pong bot, whenever you send "ping", it replies "pong".
 */

var reCommand = /^!/;

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzYxNzc4NzExMDg4OTg4MTYw.Dbkktw.Etx_6BoSwi4N0yCWXvsT4xA-cw0';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
    console.log('I am ready!');
});

function command(parameters) {
    var message = parameters.message;
    var s = parameters.s;
    if(s === '!add'){
        message.channel.send('received add');
        console.log('add');
    }
    else if(s === '!calendar'){
        message.channel.send('received calendar');
        console.log('calendar');
    }
}

// Create an event listener for messages
client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
    // Send "pong" to the same channel
        message.channel.send('pong');
    }
    else if(reCommand.test(message.content)) {
        message.channel.send('matchar!');
        command({message: message, s: message.content});
    }
});

// Log our bot in
client.login(token);
