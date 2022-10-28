/* DATABASE : KAZUKO & NEVT & REY
Follow Github Mereka
1) Kazuko: https://github.com/kazuko
2) Nevt: https://github.com/NevtBotz
3) Rey: https://github.com/inirey
*/
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (command == 'neko2') {
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/neko.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await conn.sendButtonImg(m.chat, cita, `Nihh ${command} nya @${m.sender.split('@')[0]}`, wm, `Next`, `${usedPrefix}${command}`, m, {mentions: [m.sender], jpegThumbnail: await(await fetch(cita)).buffer()})
}
}
handler.command = handler.help = [
'neko2', 
]
handler.tags = ['premium']
handler.premium = true

export default handler
