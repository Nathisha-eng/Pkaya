const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *RAVINDU_MD* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: 𝗥𝗔𝗩𝗜𝗡𝗗𝗨 𝗔𝗞𝗔𝗦𝗛
┃◈┃• *🧬 Version*: 1.0.0 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷
𝗥𝗔𝗩𝗜𝗡𝗗𝗨-𝗠𝗗 𝗣𝗢𝗪𝗘𝗥𝗙𝗨𝗟𝗟 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧.
┃◈╭─────────────·๏
┃◈┃• 𝗝𝗢𝗜𝗡 𝗠𝗬 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗛𝗔𝗡𝗡𝗘𝗟
       https://whatsapp.com/channel/
       0029Vb5ek7k05MUmcU4dKQ0o
┃◈└──────────┈⊷
╰──────────────┈⊷
┃◈╭─────────────·๏
┃◈┃• 𝗢𝗪𝗡𝗘𝗥 𝗡𝗨𝗠𝗕𝗘𝗥🤖
      https://wa.me/94763079634
┃◈└───────────┈⊷
╰──────────────┈⊷
> © 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚢 𝚁𝙰𝚅𝙸𝙽𝙳𝚄 𝙰𝙺𝙰𝚂𝙷 🗿`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/kV09yDBR/5813.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400917991342@newsletter',
                    newsletterName: 'RAVINDU_MD',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});