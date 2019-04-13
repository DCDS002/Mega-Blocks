const Discord = require("discord.js");
const auth = require("./auth.json");
const client = new Discord.Client();
const Words = ["kurwa","spierdalaj","jebać","chuj","huj","pierdole","jeb","Kurwa","Spierdalaj","Jebać","Chuj","Huj","Pierdole","Jeb","jprdl","japierdole","Japierdole","Jprdl","hwdp","Hwdp","HWDP","Wypierdalaj","wypierdalaj"];

client.on("ready", () => {
 console.log("Jestem gotowy!");
});
client.on("message", (message) => {
 if (Words.some(word => message.content.includes(word))) {
 message.reply("Nie przeklinaj!");
 message.delete();
 }
});



client.on("message", (message) => {
	if(message.content == ";ogloszenie"){ 
		message.channel.send("```Prace nad botem w toku...```");
		message.delete();
	}
});

client.on("guildMemberAdd", (member) => {
let guild = member.guild; // Reading property `guild` of guildmember object.
let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send("**Wiecie kto właśnie dołączył na serwer? Tak, zgadza się to**" + memberTag);
}
});





client.login(process.env.BOT_TOKEN);

