// Discord.js Requirement for Bots.
const Discord = require("discord.js");
const client = new Discord.Client();

// Requiring Temp Channels Package.
const TempChannels = require("discord-temp-channels");
const tempChannels = new TempChannels(client);


tempChannels.registerChannel("channel-id", { // The VC Creator Channel
    childCategory: "category-id", // The Catagory the Channels will be created.
    childAutoDeleteIfEmpty: true,
    childMaxUsers: 7,
    childFormat: (member, count) => `${count} | ${member.user.username}`
});

// Login with bot.
client.login("bot-token");
console.log('Bot Ready, Now you can create your own custom temp Voice Channels!')
