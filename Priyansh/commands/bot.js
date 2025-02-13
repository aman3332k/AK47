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
    
    // 😂 Funny & Relatable
    "😂 Mera phone aur main... Dono ki battery life ek jaise - 5 minute mein full, 5 minute mein zero!",
    "🤣 Zindagi ki race mein cheetah banne ka plan... Par chai ki ketli ki tarah slow ho jate hain!",
    "😆 Mummy ka ‘shadi ke liye ladki dekh lo’ bolna = Life ka hardest jump scare!",
    "🐔 Kukdoo koo! Subah utho, par thali pe parathe nahi mile toh kya fayda?",
    "🤪 WhatsApp pe ‘typing…’ dekh ke reply ka intezar = 21st century ka true love!",
    "😜 Gym jane ka socha, par sofa ne pyar se bula liya!",
    "😂 Khaana banate waqt ‘andaaz se’ jala dena = Masterchef audition fail!",
    "🤣 Dost: Tu tension mat le! Me: *Instantly 200% more tense*",
    "😎 Filter laga ke photo dalna... Zindagi ki asliyat chhupane ka jugaad!",
    "🍳 Omelette flip karna ho ya zindagi... Dono mein 90% chance hai girne ka!",

    // 💖 Romantic & Sweet
    "💖 Tumhari baatein jaise momos ki chutney... Thodi spicy, par bin mange extra mile!",
    "🌹 Tumse baat karte waqt lagta hai... Jaise 4G network pe HD call chal raha ho!",
    "🌸 Tumhari yaad aati hai toh phone ko check karta hoon... Kya pata ‘online’ ho tum!",
    "💌 Tumhare liye likhe messages... Drafts mein hi reh jaate hain, send karne ki himmat nahi hoti!",
    "🌙 Raat ko sone se pehle last text tumhara hi padhna... Meri nayi aadat hai!",
    "💞 Tumhare saath guzara har pal... Jaise unlimited WiFi ka connection!",
    "🌠 Tumhe dekh kar lagta hai... Koi camera filter lag gaya hai duniya pe!",
    "💓 Mere status updates sirf tumhare liye... Par ‘seen’ karke bhi react nahi karte!",
    "🌻 Tumhari muskurahat ki brightness itni hai... Night mode bhi on nahi kar pata!",
    "🎶 Tumhare saath gaadi mein music bajana... Jaise life ki own soundtrack mil gayi ho!",

    // 💪 Motivational & Savage
    "💪 Zindagi ko jio jaise treat karo... Jahan signal mile, wahi data chalao!",
    "🚀 Utho, kapde pehno, aur apne dreams ko itna tagda chase karo... Ki wo dar ke bhag jaye!",
    "🔥 Duniya ke rules follow karo... Par apne rules break karna seekho!",
    "🎯 Jeetna hai toh rickshawala style mein chalo... Gaadi slow hai, par meter toh chalta rahe!",
    "⚡ Failure ko momos samjho... Dipping sauce ke bina fikar nahi, maze se khao!",
    "🏆 Competition se zyada... Khud ke yesterday version se ladna seekho!",
    "✨ Zindagi ek TikTok video hai... Overthink mat karo, bas trend create karo!",
    "🌄 Kal ki tension ko aaj ke trash bin mein fenko... Aur bin ko offline kar do!",
    "🦁 Zindagi mein kabhi kabhi Simba banne ki zarurat hai... ‘Hakuna Matata’ bol ke chill karo!",
    "🧠 Dimag ka data pack recharge karo... Kyunki zindagi mein unlimited challenges aa rahe hain!",

    // 😜 Mix of Everything
    "😎 Mere mood swings ko Olympic sport bana do... Gold medal pakka!",
    "💸 Paisa aur pyaar dono kamaye... Par recharge karne walon ko priority do!",
    "🍵 Chai ki pyali ho ya zindagi... Dono ko kadwa hone se pehle mix karo!",
    "📱 Phone ki battery aur dil ki dhadkan... Dono tumhare message aate hi fast ho jate hain!",
    "🌧️ Barsaat mein bhijna ho ya pyaar mein... Dono mein ‘wet’ hone ka mazaa hi kuch aur hai!",
    "🎧 Earphones ke bina gaana suno... Aur single hone ke batao zindagi kaise jiyo!",
    "🛌 Subah utho nahi, toh life ka FOMO real ho jata hai... Par neend ka FOMO bhi toh hai!",
    "🤔 Zindagi ka asli question: ‘Online’ dikhao ya ‘typing…’ ka drama karo?",
    "🍕 Pizza garam ho ya rishta... Dono ko ‘too cheesy’ hone se pehle enjoy karo!",
    "🚦 Zindagi ki traffic light hai... Kabhi ruko, kabhi jhappi do, kabhi full speed bhaago!",

    // 🌟 Unique & Quirky
    "🌟 WhatsApp pe ‘online’ dikhao... Par asli life mein ‘offline’ rehne ka talent rakho!",
    "🎮 Life ko video game samjho... Cheat codes dhundte raho, par game over se mat daro!",
    "🕶️ Cool dikhna hai toh sunglasses pehno... Ya phir mere status ko copy-paste karo!",
    "📸 Selfie lete waqt pose sochna... Aur zindagi mein bina soche decisions lena - same struggle!",
    "🧳 Zindagi ka trip plan karo... Par kabhi kabhi baggage claim mein khud ko bhi chhod aao!",
    "🎉 Party karne ka tareeka thoda kezual hai... 10 baje so jao, par status pe ‘night vibes’ dalo!",
    "🍩 Donut ho ya zindagi... Dono mein hole hai, par maze toh hai hi!",
    "🚶♂️ Chalte waqt AirPods lagana... Taaki log samjhe ‘main busy hoon, baat mat karo’!",
    "🤳 Mirror selfie mein smile dikhao... Taaki duniya na jaane dil ka breakup hua hai!",
    "🍜 Maggi banate waqt 2-minute ka intezar... Aur life goals ke liye 20 saal? Fair nahi hai!" ,
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
      body: `🌺🌿💐${name}💐🌿🌺\n${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };
}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
