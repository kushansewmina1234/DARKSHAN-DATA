const kushan = async (teks) => {
  return await conn.sendMessage(from, { text: teks ,
contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363182681793169@newsletter',
      serverMessageId: 127
    },
externalAdReply: { 
title: '𝗭𝗲𝗿𝗼-𝗧𝗪𝗢 𝗠𝗗 🍭',
body: 'ᴀ ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ',
mediaType: 1,
sourceUrl: "https://zerotwomd.me/" ,
thumbnailUrl: 'https://raw.githubusercontent.com/vihangayt0/ZeroTwo-Uploads/main/bbb61bc283cc1891a9a3c.jpg' ,
renderLargerThumbnail: false,
showAdAttribution: true
}
}}, { quoted: mek })
}

module.exports = { kushan }
