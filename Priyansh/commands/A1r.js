module.exports.config = {
    name: "gemini",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Modified by Aman",
    description: "Chat with Gemini AI",
    commandCategory: "chatbots",
    usages: "[on/off] or [message]",
    cooldowns: 5,
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
        return { error: false, data: res.data.reply }; // ✔️ Correct field
    } catch (err) {
        return { error: true, data: "❌ Gemini API error: " + err.message };
    }
}

module.exports.onLoad = async function () {
    if (typeof global === "undefined") global = {};
    if (typeof global.gemini === "undefined") global.gemini = new Map();
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;
    const send = msg => api.sendMessage(msg, threadID, messageID);

    if (global.gemini.has(threadID)) {
        if (senderID == api.getCurrentUserID() || !body || messageID == global.gemini.get(threadID)) return;

        const { data, error } = await askGemini(body);
        if (error) return send(data);
        return send("🤖 " + data);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const send = msg => api.sendMessage(msg, threadID, messageID);

    if (args.length === 0) return send("🤖 Use: gemini on / off / <message>");

    switch (args[0].toLowerCase()) {
        case "on":
            if (global.gemini.has(threadID)) return send("Gemini is already enabled.");
            global.gemini.set(threadID, messageID);
            return send("✅ Gemini is now active.");
        case "off":
            if (!global.gemini.has(threadID)) return send("Gemini was not active.");
            global.gemini.delete(threadID);
            return send("❎ Gemini has been turned off.");
        default:
            const input = args.join(" ");
            const { data, error } = await askGemini(input);
            if (error) return send(data);
            return send("🤖 " + data);
    }
};
