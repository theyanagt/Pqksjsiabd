import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    /*let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()*/
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*▸  - —「 𝘚𝘰𝘴𝘪𝘢𝘭 𝘔𝘦𝘥𝘪𝘢 𝘉𝘰𝘵 」—  - ◂*

「 𝘚𝘶𝘱𝘰𝘳𝘵𝘵 𝘉𝘰𝘵 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 」


*❉ 𝘍𝘰𝘭𝘭𝘰𝘸 𝘐𝘯𝘴𝘵𝘢𝘴𝘨𝘳𝘢𝘮 𝘉𝘰𝘵*
⫹⫺ https://instagram.com/Ahyanmhmmd

「𝘎𝘳𝘰𝘶𝘱 𝘉𝘰𝘵 𝘰𝘧𝘧𝘤𝘪𝘢𝘭  && 𝘎𝘳𝘰𝘶𝘱 𝘋𝘪𝘴𝘤𝘶𝘴𝘴𝘪𝘰𝘯」

𝘎𝘳𝘰𝘶𝘱 𝘋𝘪𝘴𝘤𝘶𝘴𝘴𝘪𝘰𝘯
⫹⫺ https://chat.whatsapp.com/HyiaQnJAhC0HKVT0gEHH1X
`
conn.sendButtonDoc(m.chat, jarot, wm,'Thanks','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/jarotr_",
    mediaType: "VIDEO",
    description: "https://instagram.com/Ahyanmhmmd", 
    title: 'asuna-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['sosialmedia']
handler.tags = ['main','info']
handler.command = /^(sosial|media|sosialmedia)$/i
export default handler
