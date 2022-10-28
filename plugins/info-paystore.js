let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '1'
let sn = '5'
let ss = '10'
let sp = '15'
let sv = '20'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (3 hari)_
┊⫹⫺ *Normal:* _${sn}k/grup (15 hari)_
┊⫹⫺ *Standar:* _${ss}k/grup (1 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (45 hari)_                                                      
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Pro:* _${ph}k/Orang (Permanent)_           
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*

• *All Payment Yang Support Qris*
SEPERTI
1. DANA
2. OVO
3. ShopeePay
4. Mobile Banking BCA
5. LinkAja
6. Mobile Banking BRI
7. GoPay
8. Mobile Banking BNI
9. Livin’ By Mandiri
10. Mobile Banking Danamon
DLL

–––––– *🐾 Kebijakan* ––––––
NOTE : BOT GRATIS SAMA BOT SEWA BEDA NOMER JADI BAKAL AMAN 

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k ( 3 hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (15 hari)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k ( 30hari)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (45 hari)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	   {title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: ' + ph + 'k (Permanent)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler