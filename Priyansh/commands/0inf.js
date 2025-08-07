const axios = require("axios");

module.exports.config = {
  name: "GeminiSonyBot",
  version: "2.1",
  hasPermssion: 0,
  credits: "Mod by Aman",
  description: "Auto reply using Gemini API (no prefix)",
  commandCategory: "NoPrefix",
  usages: "Auto reply via Gemini",
  cooldowns: 3,
};

module.exports.handleEvent = async function({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body || body.length > 200) return;

  const name = await Users.getNameUser(senderID);
  const userMessage = body.trim();
  const lower = userMessage.toLowerCase();

  try {
    // Special cases
    if (lower.includes("sony bot kese ho")) {
      return api.sendMessage("Main thik hoon! Tum kaise ho? 🤖", threadID, messageID);
    }

    // Call Gemini API
    const res = await axios.get("https://api-1-vsz6.onrender.com/gemini", {
      params: { ask: userMessage }
    });

    // Handle different formats of reply
    const reply = res.data.reply || res.data.response || res.data || "Gemini se reply nahi mila 😕";

    return api.sendMessage(`🧠 ${name}, ${reply}`, threadID, messageID);
  } catch (err) {
    console.error("❌ Gemini API error:", err.message);
    return api.sendMessage("⚠️ Gemini API mein kuch issue aaya hai, baad mein try karo.", threadID, messageID);
  }
};

module.exports.run = () => {};
