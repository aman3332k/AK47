const axios = require("axios");
const fs = require("fs");
const path = require("path");

const historyPath = path.join(__dirname, "../../utils/chatHistory.json");

module.exports.config = {
  name: "nano",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Aman + ChatGPT",
  description: "Gemini chatbot with context",
  commandCategory: "no prefix",
  usages: "no prefix",
  cooldowns: 2
};

function loadHistory() {
  try {
    const data = fs.readFileSync(historyPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    return {};
  }
}

function saveHistory(history) {
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2), "utf8");
}

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;

  if (!body || senderID == api.getCurrentUserID()) return;

  if (body.toLowerCase().includes("sony")) {
    const history = loadHistory();
    const userHistory = history[senderID] || [];

    // Push new message to history
    userHistory.push({ role: "user", content: body });

    // Keep only last 6 exchanges (user+bot)
    if (userHistory.length > 6) userHistory.splice(0, userHistory.length - 6);

    try {
      const res = await axios.post("https://api-1-vsz6.onrender.com/ask", {
        message: body,
        history: userHistory  // You must handle this in your API as well
      });

      const reply = res.data?.reply || "⚠️ Gemini API ne sahi reply nahi diya.";
      api.sendMessage("❤️ " + reply, threadID, messageID);

      // Add bot response to history
      userHistory.push({ role: "sony", content: reply });

      // Save updated history
      history[senderID] = userHistory;
      saveHistory(history);

    } catch (error) {
      console.error("Gemini API error:", error.message);
      api.sendMessage("⚠️ Gemini API mein kuch issue aaya hai: " + error.message, threadID, messageID);
    }
  }
};

module.exports.run = () => {};
