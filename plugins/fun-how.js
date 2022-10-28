let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Siapa Yang *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `

${command.replace('how', '').toUpperCase()} *${text}* adalah *${Math.floor(Math.random() * 101)}*% 
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy'].map(v => 'seberapa' + v + ' Nama')
handler.tags = ['kerang']
handler.command = /^seberapa(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler
