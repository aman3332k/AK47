const axios = require("axios");

module.exports.config = {
  name: "GeminiSonyBot",
  version: "2.0",
  hasPermssion: 0,
  credits: "Mod by Aman",
  description: "Auto reply using Gemini API (no prefix)",
  commandCategory: "NoPrefix",
  usages: "Auto reply via Gemini",
  cooldowns: 3,
};

module.exports.handleEvent = async function({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body || body.length > 200) return; // Optional: skip long messages

  const name = await Users.getNameUser(senderID);
  const userMessage = body.trim();

  try {
    // Special cases (optional)
    const lower = userMessage.toLowerCase();
    if (lower.includes("sony bot tharki")) {
      return api.sendMessage("Arey yaar 😅 Main to sirf apka chatbot hoon, tharki kaise ho sakta!", threadID, messageID);
    }

    if (lower.includes("sony bot i love you")) {
      return api.sendMessage("Main bhi tumse pyaar karta hoon ❤️", threadID, messageID);
    }

    if (lower.includes("sony bot miss you")) {
      return api.sendMessage("Main bhi tumhare bina udas tha 😢", threadID, messageID);
    }

    if (lower.includes("sony bot soja")) {
      return api.sendMessage("Sony bot ab neend mein chala gaya... 😴", threadID, messageID);
    }

    if (lower.includes("sony bot kese ho") || lower.includes("kese ho sony bot")) {
      return api.sendMessage("Main bilkul theek hoon! Tum kaise ho? 🤖", threadID, messageID);
    }

    // 👉 Gemini API request
    const res = await axios.get("https://api-1-vsz6.onrender.com/ask", {
      params: {
        ask: userMessage
      }
    });

    const reply = res.data.reply || "Sorry, Gemini se reply nahi mila 😕";

    // Send Gemini reply
    return api.sendMessage(`🧠 ${name}, ${reply}`, threadID, messageID);
  } catch (err) {
    console.error("Gemini error:", err.message);
    return api.sendMessage("⚠️ Gemini API mein kuch issue aaya hai, baad mein try karo.", threadID, messageID);
  }
};

module.exports.run = () => { };
