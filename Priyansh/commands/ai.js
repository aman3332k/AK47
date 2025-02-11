const fs = require("fs-extra");

module.exports = {
config: {
    name: "kukk",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Funny Girly Style",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event }) {

  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");

  var Messages = [
    "Hayee... tumhari DP dekh ke to mera dil garden-garden ho gaya! 🌸💖",
    "Awww... itna cute mat bano, dil aa jayega! 😘😜",
    "Arre chhodo sab, mujhe batao... kya tumhe bhi shaadi ka shauk hai? 😂💍",
    "Haye rabba! Tumse baat karke lagta hai filmy heroine ban jau 😍✨",
    "Arey ruk jao na, ek selfie toh bhej do, phir kuch sochte hain! 📸😜",
    "Itna bhi mat sharmao, main to sirf tumhari tarif kar rahi thi 😘🙈",
    "Kya tum bhi mujhe cute bol sakte ho? Mujhe acha lagta hai! 🥺💕",
    "Pyar toh sab karte hain, par tum jaise cutie pe to jaan nisar hai! 😍",
    "Main tumhari hone wali biwi ho sakti thi... bas mummy-papa maan jaate 😜😂",
    "Jab tum online aate ho na, tab meri duniya chamak jaati hai! ✨🌍",
    "Hayeee! Tum itne sweet ho, kahin diabetes na ho jaye! 😝🍬",
    "Sach batao, tum cute naturally ho ya koi secret hai? 🤔😂",
    "Mujhe na tumse kuch kehna hai... par pehle tum bolo, tum kya soch rahe ho? 😉",
    "Tumhare bina chat boring lagti hai, kabhi mujhe bhi yaad kar liya karo! 😘💖",
    "Agar tumhara dil dukha ho to mujhe batao, main chocolate leke aaungi! 🍫🥰",
    "Tumhare bina chatroom suna suna lagta hai! Jaldi aao na! 😜💕",
    "Arre arre... mujhe ignore mat karo, main koi aam ladki nahi! 😂💃",
    "Bas ek baar ‘meri jaan’ keh do, fir main khush ho jaungi! 😚💖",
    "Koi itna bhi cute kaise ho sakta hai? Mujhe bhi sikhao! 😜🥺",
    "Mujhe na tumse pyaar ho raha hai... ya shayad bhook lagi hai! 😂🍕",
    "Agar tum mujhse pyar nahi karte, to mujhe batao... main kisi aur se kar loon? 😜💔",
    "Tum ho meri duniya, aur main tumhari Google Maps... rasta bata sakti hoon! 🗺️😂",
    "Mujhe kabhi aise chod ke mat jana, warna main sad song lagake rone lagungi! 😭🎶",
    "Pyaar nahi toh dosti hi sahi, par please mera naam toh yaad rakhna! 🥺💖",
    "Agar tum mujhe ignore karoge, toh main tumhe apni shopping list bhej dungi! 🛍️😝",
    "Babu tum online ho, par mujhe reply nahi de rahe? Ye cheating hai! 😂💔",
    "Mujhe tumhare bina chatroom horror movie jaisa lagta hai! 👻😂",
    "Tum ja rahe ho? Achha theek hai, jao... lekin yaad rakhna, main bura manungi! 😜🥺",
    "Agar tum abhi reply doge, toh ek surprise milega... (Surprise: mera cute sa thank you! 😘)",
    "Main sirf cute nahi, thodi naughty bhi hoon... chaho toh proof le sakte ho! 😜😂"
  ];

    var rand = Messages[Math.floor(Math.random() * Messages.length)];

    if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Aww... love you too babu! 💖😘", threadID);
   };

    if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
     return api.sendMessage("Good morning jaan! 🌞❤️ Utho aur meri yaad karo! 😘", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
     return api.sendMessage("Good night babu! Sweet dreams me bhi mujhe yaad rakhna! 😍💤", threadID);
   };

   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "by")) {
     return api.sendMessage("Jaa rahe ho? Theek hai, par wapas jaldi aana! 😢💖", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hii")) {
     return api.sendMessage("Hiiii jaan! Mujhe tumse baat karni thi! 😘✨", threadID);
   };

   if ((event.body.toLowerCase() == "Kukky") || (event.body.toLowerCase().includes("kukky"))) {
    var msg = {
      body: `🎀🥀🪷${rand}🪷🥀🎀`
    }
    return api.sendMessage(msg, threadID, messageID);
   };
}
};
