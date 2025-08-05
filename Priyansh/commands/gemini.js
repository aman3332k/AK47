module.exports.config = {
  name: "gemini",
  version: "1.0.0",
  credits: "aman3332k",
  cooldown: 5,
  role: 0,
  shortDescription: {
    en: "Gemini AI से जवाब लो"
  },
  longDescription: {
    en: "अपने सवाल पूछो और सीधे Gemini API से स्मार्ट जवाब पाओ।"
  },
  category: "ai",
  guide: {
    en: "{pn} <सवाल>\nउदाहरण: {pn} भारत के पहले राष्ट्रपति कौन थे?"
  }
};

module.exports.onStart = async function ({ message, args }) {
  if (!args[0]) return message.reply("❌ कृपया कोई सवाल भी लिखो!\nउदाहरण: !gemini आसमान क्यों नीला है?");

  const userPrompt = args.join(" ");
  try {
    const res = await axios.post(
      "https://api-1-vsz6.onrender.com/ask",
      { message: userPrompt },
      { headers: { "Content-Type": "application/json" } }
    );

    const replyText = res.data.reply || "❌ Gemini से कोई जवाब नहीं आया!";
    return message.reply(replyText);
  } catch (err) {
    console.error("Gemini API error:", err.response?.data || err.message);
    return message.reply("❌ Gemini API error: " + (err.response?.data?.error || err.message));
  }
};
