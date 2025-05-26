const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "bot1",
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
  "I don’t have an attitude problem, you have a perception problem! 😎",
  "Mera attitude itna royal hai, crown bhi sharma jaye! 👑",
  "I’m not arrogant, I’m just better than you thought. 🔥",
  "Tumhare jaise hazar aaye... par main ek hi hoon! 💯",
  "Legends don’t compete, they dominate. 🦁",
  "Log kehte hai attitude dikhata hu, dikhana padta hai mere level pe aane ke liye! 💥",

  "Tere bina zindagi adhuri lagti hai, jaise chai bina biscuit ke... ☕🥺",
  "Tumhari har ek baat mein mohabbat hai, isliye toh chup rehta hoon... 🌙",
  "Usne kaha door ho jao, hum hass ke keh diye... khush rehna! 💔",
  "Mohabbat karne walon ka haal kya batau, zakhm bhi milta hai aur sawaal bhi! 😞",
  "Na pooch mere sabr ki inteha, zakhm bhi khud lagata hoon aur marham bhi khud! 🩹",

  "Failure is not opposite of success, it’s part of success! 🚀",
  "Zindagi mein rukna mana hai, warna log peeche hi chhod denge! 🏃‍♂️💨",
  "Your only limit is your mind. Break it! 🧠💪",
  "Success ki chaabi hai consistency, bas lagatar karte jao! 🔑",
  "Don’t be busy, be productive. Time matters! ⏳",

  "Are you Google? Because you have everything I’ve been searching for! 😉",
  "Tumhare bina toh main incomplete lagta hoon... jaise Maggi bina masala ke! 🍜❤️",
  "If I had a star for every time you crossed my mind, I'd own the galaxy. 🌌",
  "Tumhare messages nahi aate toh lagta hai duniya slow motion mein chal rahi hai... 🕰️",
  "You’re like my favorite song on repeat... can’t get enough! 🎧",

  "I’m on a seafood diet. I see food and I eat it! 🐟🍽️",
  "Mummy kehti thi beta padh le, aaj meme banata hoon full-time! 😂",
  "Life is short... smile while you still have teeth! 🦷😁",
  "2025 mein toh robots bhi pyaar mein dhoka dene lagenge! 🤖💔",
  "Tum online ho, par reply nahi karte... kya tum bhi WiFi ki tarah ho? 📶❌",

  "Every time I see you, my heart skips a beat. 💓",
  "Tumhari aankhon mein woh baat hai, jo lafzon mein nahi! 👀",
  "You’re my today and all of my tomorrows... ❤️",
  "Tum mile toh lagta hai duniya complete ho gayi... 🌍✨",
  "Your smile is literally the cutest thing I’ve ever seen. 😊"
];

  var rand = tl[Math.floor(Math.random() * tl.length)];

  // ... [Keep all your existing conditional responses unchanged below] ...
  // Example:
  if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot")) {
    return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
  };
  // ... [Rest of your existing code] ...

  if (event.body.indexOf("Ak") == 0 || (event.body.indexOf("AK") == 0)) {
    var msg = {
      body: `🌿⚔️🌹${name}🌹⚔️🌿\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
