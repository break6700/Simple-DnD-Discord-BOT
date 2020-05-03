'use strict';

/**
 * An example of how you can send embeds
 */

// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');


// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '!blinded') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
    .setColor('#FF0000') // Set color: Blue
    .setTitle('Blinded')
    .setURL('https://roll20.net/compendium/dnd5e/Conditions#toc_1')
    .setAuthor('D&D Helper BOT')
    .setDescription('***TYPE : *** CONDITIONS')
    .setThumbnail('https://3.bp.blogspot.com/-YBp6pweGM8c/U4LFs_8f9aI/AAAAAAAAPjA/tMsal7KYFxs/s1600/NEW+Ampersand+Logo.png')
    .addFields(
      { name: 'DETAILS', value: '***+*** A blinded creature can’t see and __automatically fails__ any ability check that requires sight. \n ***+*** Attack rolls against the creature have __advantage__, and the creature’s Attack rolls have __disadvantage__.'},
    )
    message.channel.send(embed);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('FILL ME BEFORE USE');
