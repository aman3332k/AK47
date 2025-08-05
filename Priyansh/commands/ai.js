const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Kukky",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
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

  // Updated messages array with funny/romantic/motivational mix
  var tl = [
    "😂 Zindagi mein do cheezein kabhi underestimate mat karna: Meri chai aur mera mood!",
    "💖 Tumhare bina ye chatbot adhoora sa lagta hai!",
    "🚀 Kal ki parwah mat karo, aaj mehnat karo!",
    "😆 Papa: Beta padhai karo. Mumma: Beta khana khao. Me: Zindagi mushkil kyun hai?",
    "🌹 Tumhari aawaz mein hi kuch aisa hai ke main sunता reh jaata hoon!",
    "💪 Jo dar gaya wo mar gaya! Apne sapno ke peeche bhaago!",
    "🤣 Jab tak na karo attempt, tab tak nahi bhajiye omelette!",
    "🌸 Tum mere dil ki dhadkan ho...",
    "🔥 Har mushkil ek naya challenge hai!",
    "😜 Main thodi der mein online aunga, pehle apni 5 minute ki shaam ki beauty sleep leta hoon!",
    "💞 Tumhari muskurahat meri duniya ki sabse khoobsurat cheez hai!",
    "🎯 Jeetne ki raah mein thokarein aati hain, par rukna nahi hai!",
    "🐔 Kukdoo koo! Good morning nahi bologi?",
    "🌺 Tumhe dekh kar lagta hai jaise bahar barsaat ho rahi ho!",
    "💡 Jab tak life hai, tab tak hope hai!",
    "😎 Mujhe ignore karke apna dil satana band karo!",
    "💌 Har pal tumhare saath bitana chahta hoon...",
    "🏆 Haar tab maano jab competition khatam ho jaye!",
    "🤪 Kya aapke toothpaste mein namak hai? Kyunki aapke messages mein toh mazaa hai!",
    "🌼 Tumhe yaad karte hue guzarti hai ye raatein...",
    "✨ Apne aap pe bharosa rakho, baaki sab ho jayega!",
    "😆 Mummy ka darwaaza khatkhatana = World's most dangerous game!",
    "🥰 Tumhare messages ka intezar rehta hai...",
    "⚡ Zindagi ek baar milti hai, isse jee kar dikhao!",
    "😂 Jab aapke dost bolen 'tu tension mat le' - tab samjho tension pakki hai!",
    "💐 Tumse baat karke lagta hai jaise phool khil uthe hon!",
    "🌟 Umeed pe duniya kayam hai!",
    "😜 Chai piyo, mast jiyo!",
    "🌹 Tumhe dekhte hi dil ne kaha - yehi hai meri manzil!",
    "💥 Koshish karne walon ki kabhi haar nahi hoti!",
    "🤣 Bina filter wali baatein karte hain? Thoda risk toh hai!",
    "💞 Tumhari har ada dil ko chhoo jati hai...",
    "🏅 Kamyabi usi ki hoti hai jo himmat nahi haarta!",
    "😎 Main thodi der ke liye offline hoon, par yaadon mein online rahunga!",
    "🌸 Dil ki gehraiyon se ek baat kahun? Tum bohot special ho!",
    "🚩 Jeet ka jashn tabhi manaana jab sab kuch mil jaye!",
    "😂 Dost hota hai wo jo online aaye aur pehle message tumhe kare!",
    "💖 Tumhare saath guzara har pal haseen hai...",
    "🔥 Zindagi ko jiyo, haso, khush raho!",
    "😆 Phone charge kar raha hoon, waise bhi meri life mein 'low battery' ka message toh aap dete ho!",
    "🌺 Tumse baat karke lagta hai jaise thakaan door ho jaye!",
    "💪 Kismat ko thokar mare, apni mehnat pe bharosa rakho!",
    "😎 Main thoda busy hoon apni awesome banane mein!",
    "💌 Tumhe yaad karna meri aadat ban chuki hai...",
    "🏆 Koshish karne walon ke liye kuch bhi namumkin nahi!",
    "🤣 Chalo karte hain kuch aisa kaam ke log yaad rakhein humara naam!",
    "🌹 Tumhari har baat dil ko chhoo jati hai...",
    "✨ Apne sapno ko haqeeqat banane ka waqt aa gaya hai!",
    "😜 Jab tak na karo try, tab tak nahi bhajiye fry!",
    "💞 Tum mere khayalon mein base ho..."
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "bot tharki")) {
    return api.sendMessage("Yeh Jo Mujhe THarki Keh Rahe HAin Sun Lo Tharki Nahi Hon Mai BAs Apko Sab Ko Reply Krta Hon Aur Mujh MAi Konsa Kisi Ko Chahny KI Himmat Hain Bot Hon Insaan Nahi To Plz Yeh Sab Mujhe MAt Bola Kro", threadID);
  };

  if ((event.body.toLowerCase() == "bot i love you") || (event.body.toLowerCase() == "bot love you")) {
    return api.sendMessage("Love you too Jaan", threadID);
  };

  if ((event.body.toLowerCase() == "soja bot") || (event.body.toLowerCase() == "bot soja")) {
    return api.sendMessage("Abhi Oska wait Kr Raha Hon Os K Any Py So Jaonga", threadID);
  };

  if ((event.body.toLowerCase() == "bot kese ho") || (event.body.toLowerCase() == "kese ho bot")) {
    return api.sendMessage("Mai Ek Dam Mast Ap Btao Kese Ho", threadID);
  };

  if ((event.body.toLowerCase() == "bot i miss you") || (event.body.toLowerCase() == "bot miss you")) {
    return api.sendMessage("Sach Mai Miss Kro To Achaw Bhi Laga Krega Mujhe", threadID);
  };

  if (event.body.indexOf("Sony") == 0 || (event.body.indexOf("@SONY BOT") == 0)) {
    var msg = {
      body: `🎀🥀🪷${name}🪷🥀\n💖🎀 ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
