const axios = require("axios");

module.exports = {
  name: "noPrefix",
  async execute(message, bot) {
    const userMsg = message.body;

    // Ignore messages from bot itself
    if (message.fromMe || !userMsg) return;

    try {
      const response = await axios.post("https://api-1-vsz6.onrender.com/gemini", {
        prompt: userMsg
      });

      const reply = response.data?.reply;

      if (reply) {
        await bot.sendMessage(message.from, { text: reply }, { quoted: message });
      } else {
        await bot.sendMessage(message.from, { text: "⚠️ Gemini se reply nahi mila." }, { quoted: message });
      }

    } catch (error) {
      console.error("Gemini API Error:", error.message);
      await bot.sendMessage(message.from, { text: "❌ Gemini server down ho sakta hai. Baad me try karo." }, { quoted: message });
    }
  },
};
