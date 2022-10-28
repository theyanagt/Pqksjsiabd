import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://kannxapi.herokuapp.com/api/randomimage/cosplay'
	conn.sendButton(m.chat, 'Watashiwa Anime Desu (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(cosplay)$/i
handler.tags = ['cosplay']
handler.help = ['premium']
handler.premium = true
handler.limit = false

export default handler