const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");

module.exports = {
  config: {
    name: "image",
    version: "1.0.0",
    author: "Aman",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Generate AI image from prompt"
    },
    longDescription: {
      en: "Use Pollinations AI to generate an image from given prompt"
    },
    category: "image",
    guide: {
      en: "{pn} [prompt]\nExample: {pn} cat with crown"
    }
  },

  onStart: async function ({ message, event, args }) {
    const prompt = args.join(" ");
    if (!prompt) return message.reply("⚠️ Please provide a prompt.\nExample: poli cat wearing sunglasses");

    const filename = `${Date.now()}_poli.png`;
    const filepath = path.join(__dirname, "cache", filename);

    try {
      message.reply(`🔍 Generating image for: "${prompt}"...`);
      const res = await axios.get(`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`, {
        responseType: "arraybuffer"
      });

      fs.writeFileSync(filepath, Buffer.from(res.data, "utf-8"));

      return message.reply({
        body: `🖼️ Image for prompt: "${prompt}"`,
        attachment: fs.createReadStream(filepath)
      }, () => fs.unlinkSync(filepath));

    } catch (err) {
      console.error("❌ Poli Error:", err);
      return message.reply("❌ Couldn't generate image. Please try again later.");
    }
  }
};
