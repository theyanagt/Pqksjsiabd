import { join } from 'path'
import { promises } from 'fs'

let handler = async (m, { args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let user = global.db.data.users[m.sender]
    if (user.health >= 100) return m.reply(`
Your ❤️health is full!
`.trim())
    const heal = 40 + (user.cat * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.health) / heal)))) * 1
    if (user.potion < count) return conn.sendButton(m.chat,
`*–『 Ramuan tidak cukup 』–*`, 
`Kamu Harus Beli ${count - user.potion} Lebih 🥤ᴩᴏᴛɪᴏɴ Untuk Sembuh.
Kamu Punya ${user.potion} 🥤ᴩᴏᴛɪᴏɴ Di Tas.
⛊━─┈────────┈─━⛊
💁🏻‍♂ ᴛɪᴩ :
'Beli🥤ᴩᴏᴛɪᴏɴ' | 'tanya ke semua'
`.trim(), 'lowpotion', [
[`Beli ᴩᴏᴛɪᴏɴ`, `${usedPrefix}Beli potion ${count - user.potion}`],
[`Tanya Ke Semua`, `${usedPrefix}tagall *Seseorang Tolong Kasih ${count - user.potion} ᴩᴏᴛɪᴏɴ* Ke Saya.
⮕ Mentransfer ᴩᴏᴛɪᴏɴ:
${usedPrefix}transfer potion ${count - user.potion} @${conn.getName(m.sender)}`]
], m)
    user.potion -= count * 1
    user.health += heal * count
    conn.sendButton(m.chat, `*━┈━┈━『 KAMU SEMBUH TOTAL 』━┈━┈━*`, `BERHASIL ${count} 🥤Memakai Potion Untuk Kesehatan Dan sudah sembuh.`,'fullhealth',
[
[`BERPETUALANG`, `${usedPrefix}berpetualang`]
], m)
}

handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal)$/i

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}