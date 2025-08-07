const axios = require("axios");

module.exports.config = {
  name: "soni",
  version: "1.1.0",
  hasPermssion: 0,
  credits: "Aman x ChatGPT",
  description: "Chat with bot using Gemini",
  commandCategory: "no prefix",
  usages: "Message with 'bot'",
  cooldowns: 1,
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;

  if (!body || !body.toLowerCase().includes("bot")) return;

  const name = (await api.getUserInfo(senderID))[senderID].name;

  // ✨ Gemini API Call
  async function fetchGeminiReply(prompt) {
    try {
      const res = await axios.post("https://api-1-vsz6.onrender.com/gemini", {
        prompt
      });
      return res.data.reply || "Main samajh nahi paaya, thoda aur clearly poochho?";
    } catch (err) {
      console.error("❌ Gemini API Error:", err.message);
      return "Gemini se reply nahi aaya. Kripya thodi der baad try karo.";
    }
  }

  api.sendTypingIndicator(threadID, true);
  const reply = await fetchGeminiReply(body);
  api.sendTypingIndicator(threadID, false);

  return api.sendMessage(`🤖 ${reply}`, threadID, messageID);
};

module.exports.run = function () {};
