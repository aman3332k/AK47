module.exports.config = {
    name: "sony2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Modified by Aman",
    description: "Chat with OpenRouter AI",
    commandCategory: "chatbots",
    usages: "[on/off] or [message]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
};

const axios = require("axios");

// 🔁 Ask OpenRouter AI
async function askOpenRouter(prompt) {
    try {
        const res = await axios.post("https://openrouter-hm3c.onrender.com/ask", {
            message: prompt
        });
        return { error: false, data: res.data.reply };
    } catch (err) {
        return { error: true, data: "❌ OpenRouter API error: " + err.message };
    }
}

module.exports.onLoad = async function () {
    if (typeof global === "undefined") global = {};
    if (typeof global.openrouter === "undefined") global.openrouter = new Map();
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;
    const send = msg => api.sendMessage(msg, threadID, messageID);

    if (global.openrouter.has(threadID)) {
        if (senderID == api.getCurrentUserID() || !body || messageID == global.openrouter.get(threadID)) return;

        const { data, error } = await askOpenRouter(body);
        if (error) return send(data);
        return send("🤖 " + data);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const send = msg => api.sendMessage(msg, threadID, messageID);

    if (args.length === 0) return send("i am Sony2: OpenRouter se baat karne ke liye kuch bolo 😎");

    switch (args[0].toLowerCase()) {
        case "on":
            if (global.openrouter.has(threadID)) return send("Sony2 is already enabled.");
            global.openrouter.set(threadID, messageID);
            return send("✅ Sony2 is now active using OpenRouter.");
        case "off":
            if (!global.openrouter.has(threadID)) return send("Sony2 was not active.");
            global.openrouter.delete(threadID);
            return send("❎ Sony2 has been turned off.");
        default:
            const input = args.join(" ");
            const { data, error } = await askOpenRouter(input);
            if (error) return send(data);
            return send("🤖 " + data);
    }
};
