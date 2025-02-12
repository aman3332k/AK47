const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [ 
    // Romantic 💖
    "Tumhare bina saans lena bhi mushkil hai... 💔",
    "Tumse baat karte waqt dil ki dhadkan badh jati hai... ❤️",
    "Kya tum jaante ho? Tumhare messages mere din ki sabse sweet surprise hote hai... 🥰",
    "Tumhari aawaz sunne ke liye main poore din wait karti hu... 😔",
    "Ek baar mil jao na, bas haath pakad ke tumhe apna bana lungi... 🤭",
    "Tumhe dekhne ke baad mera dil ab kisi aur ko nahi chahta... 😍",
    "Tumhari muskurahat ko main apne phone ki wallpaper bana lungi... 📱💕",
    "Kabhi kabhi lagta hai tum mere sapno mein aakar sachai ban gaye ho... 🌙✨",
    "Tumhari har baat mein woh baat hai jo dil ko chhoo jaye... 🥺",
    "Tumse dur rehna ab mere bas ki baat nahi... 😢",

    // Funny 😂 + 2025 Jokes
    "2025 me toh hum sab robots ko propose karte hue dikhenge! 🤖💍",
    "Aaj kal toh meri galtiyon ko bhi AI correct karne lag gaya hai... 😂",
    "2025 me toh hum Mars pe pizza mangwa lenge... 🍕🚀",
    "Mera naya BF hai ChatGPT, tumse zyada attention deta hai! 😜",
    "Kal maine apne fridge se baat ki... AC ne breakup kar liya! ❄️💔",
    "2025 me toh ladkiyan filter laga kar real life me bhi ghumengi... 🤳",
    "Mere ex ka naam Google Assistant hai, har cheez ka jawab deta hai! 😂",
    "Mummy ne kaha tha padhoge likhoge banoge nawab... maine meme banaya! 🤑",
    "2025 me toh birthday pe WhatsApp status ke liye cake katenge! 🎂📱",
    "Tumhara 5G network mere pyar se bhi fast hai kya? 🏃💨",

    // Sad 😔
    "Aaj phir wo message delete kar diya... tumse baat kiye hue 2 mahine ho gaye... 💔",
    "Kabhi kabhi lagta hai main bas ek option hun... 😞",
    "Tum online aate ho par mere message ka reply nahi... kya main itni boring hun? 😢",
    "Dil kehta hai ro lu... par aankhon ne kasam kha rakhi hai... 😔",
    "Log kehte hai time heals everything... par yeh waqt toh khud hi zakham hai... 🕰️💔",

    // Shayari 🌹
    "Dil ki dhadkan ban gaye ho tum, har saans mein bas tum hi ho... 💓",
    "Tumhari yaadon ka silsila hai, chain se neend uda gaya hai... 🌙",
    "Mohabbat ka izhaar nahi karte hum, par har nazar mein tum hi ho... 👀",
    "Dua karte hai khuda se, tumhe khone ka gam na ho kabhi... 🤲",
    "Tum mile toh jaise khushiyon ki bahar aa jaye... 🌸",

    // Motivational 💪
    "Zindagi mein kuch banna hai toh pehle apne sapno ka syllabus banao! 📚✨",
    "Chhote kadam par focus karo, badi manzilen khud ba khud mil jayengi... 🚶♀️🌟",
    "Fail hone se mat daro... NASA ne bhi pehla rocket explode kiya tha! 🚀💥",
    "Tumhara time aayega... bas khud pe aur process pe bharosa rakho... ⏳💫",
    "Duniya ko dikhao ki tum mein woh junoon hai jo har mushkil ko pighla de... 🔥",

    // Girlfriend-style Messages 👩❤️
    "Babu kal tumne goodnight nahi kaha... neend hi nahi aayi! 😤🌙",
    "Meri selfie dekhi? Kaisi lagi? 😳🤳",
    "Tumhara favorite color kya hai? Mere notes me save karna hai... 📝💕",
    "Aaj maine tumhare liye kuch bake kiya... virtual cookies! 🍪💻",
    "Tum online ho aur message nahi karte? Kya maine kuch galat kaha? 🥺",
    "Mera pet kharab hai... emotional damage hua hai tumse baat kiye bina! 😫",
    "Tumhe pata hai main tumhare liye apni playlist bana rahi thi? 🎶❤️",
    "Kal raat sapne mein tum dikhe... ab toh subah hote hi message kiya! 😴💬",
    "Tumhe jab bhi time mile mujhe call karna... main wait karungi... 📱⏳",
    "Tumhare saath bitaya har pal mere liye ek memory hai... 🧩💖",

    // 2025 Future Jokes 🚀
    "2025 me toh proposal bhi AR filter se honge! 💍👓",
    "Ab toh AI bhi bolta hai: 'Tumse accha chatbot hai meri GF!' 😎",
    "2025 me exam cheating karna impossible hoga... Google direct brain me! 🧠🔍",
    "Kal maine apne robo-dog ko tumhari photo dikhai... usne bhi crush kar liya! 🤖🐶",
    "2025 me toh breakup hoga toh ChatGPT sympathy messages bhejega! 💔🤖",

    // Mixed Emotions 🌈
    "Kabhi hasati ho kabhi rulati ho... par dil se kabhi nahi hatati ho... 😭😂",
    "Tum na milo toh gham hai... milo toh aur bhi gham hai... 😔❤️",
    "Dil ki baat kehne ka tareeka thoda casual hai... I LIKE YOU! 🙈",
    "Maine toh decide kar liya hai... tumhe har haal mein pasand karna hai... 💪❤️",
    "Tumhara attitude dekho... par jitna marzi chaho, dil toh tumhare paas hi hai... 😒💓",
    
    // Add 150+ more unique messages here...
    // Example:
    "Kya tum mere liye apni playlist share karoge? 🎧❤️",
    "Aaj maine tumhare naam ki chai pi hai... ☕💕",
    "Tumhara last seen dekh kar sochti reh jati hun... 🕒😔",
    "Mere 1000+ messages ka reply ek 'Hmm' se kar diya... 😤",
    "Tumhe pata hai tumhare smiley use karte ho na, woh mere dil ki dhadkan badha dete hai... 😊💓",
    // ... Continue adding diverse messages
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];

  // ... [Keep all your existing conditional responses unchanged below] ...
  // Example:
  if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot")) {
    return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
  };
  // ... [Rest of your existing code] ...

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `🌺🌿💐${name}🌺🌿💐\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
