module.exports.config = {
  name: "gemini",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Modified by Aman",
  description: "Auto reply with Gemini AI (no prefix)",
  commandCategory: "chatbots",
  usages: "",
  cooldowns: 0,
  dependencies: {
    axios: ""
  }
};

const axios = require("axios");

async function askGemini(prompt) {
  try {
    const res = await axios.post("https://api-1-vsz6.onrender.com/ask", {
      message: prompt
    });
    return { error: false, data: res.data.reply };
  } catch (err) {
    return { error: true, data: "⚠️ Gemini API mein kuch issue aaya hai, baad mein try karo.\n" + err.message };
  }
}

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body || senderID === api.getCurrentUserID()) return;

  try {
    const { error, data } = await askGemini(body);
    if (error) return api.sendMessage(data, threadID, messageID);
    return api.sendMessage("🤖 " + data, threadID, messageID);
  } catch (e) {
    return;
  }
};

module.exports.run = async function () {};
