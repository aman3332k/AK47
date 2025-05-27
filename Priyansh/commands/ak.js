const axios = require('axios');

module.exports = {
  config: {
    name: "gpt",
    aliases: ["ai", "chatgpt"],
    version: "1.0",
    author: "YourName",
    role: 0,
    shortDescription: {
      en: "Chat with GPT",
    },
    longDescription: {
      en: "Send a message to ChatGPT and receive a response.",
    },
    category: "AI",
    guide: {
      en: "{p}gpt <your message>",
    },
  },

  onStart: async function ({ api, event, args }) {
    const prompt = args.join(" ");
    if (!prompt) {
      return api.sendMessage("Please provide a message to send to ChatGPT.", event.threadID, event.messageID);
    }

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "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",
          },
        }
      );

      const reply = response.data.choices[0].message.content;
      api.sendMessage(reply, event.threadID, event.messageID);
    } catch (error) {
      console.error("Error with ChatGPT API:", error);
      api.sendMessage("An error occurred while communicating with ChatGPT.", event.threadID, event.messageID);
    }
  },
};
