const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config/discordconfig.json");

client.on("ready", () => {
  client.channels.cache.get('766664211581239326').send("Bot has started.");
  client.user.setActivity("torn.space");
});

global.detectSpam = function(user, msg){
  client.channels.cache.get('766664211581239326').send(user + ': ' + msg);
}

global.autoMuteNote = function(msg){
  client.channels.cache.get('766664211581239326').send(msg);
}

client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.startsWith('/')) return;
  const args = message.content.trim().split(/ +/g);

  // Limited to mods and admins.
  if(!message.member.roles.cache.some(r=>["Torn Moderator"].includes(r.name)))
    return message.reply("Sorry, you don't have permissions to use this!");

  if(args[0] == "/modmute") {
    returnmsg = modmute(message.content.trim());
    client.channels.cache.get('766664211581239326').send(returnmsg);
  } else if(args[0] == "/ipmute") {
    returnmsg = ipmute(message.content.trim());
    client.channels.cache.get('766664211581239326').send(returnmsg);
  } else if(args[0] == "/mute") {
    client.channels.cache.get('766664211581239326').send("You must either use /modmute or /ipmute!");
  }
  
});

client.login(config.token);
