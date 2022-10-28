let handler = async (m, { conn }) => {
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi • Emoney 〕
├ Dana : ${dana}
├ allpayment: *[NO PREMIUM EWALLET BISA SCAN QRIS DI ATAS]*
└────
Berapapun donasi kalian akan sangat berarti 👍

Terimakasih =D

Contact person Owner:
wa.me/628884357769 (Owner)

*donasi via follow ig juga boleh*`
  conn.sendButtonImg(m.chat, donasi, anu, instagram, 'Thanks', 'thanks', m) 
}
handler.help = ['donasi']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i


export default handler
