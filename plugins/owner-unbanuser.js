let handler = async (m, { conn, text }) => {
    if (!text) throw 'Who wants to be unbanned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, 'sᴜᴄᴄᴇs!', m)
}
handler.help = ['unban']
handler.tags = ['mods']
handler.command = /^unban(user)?$/i
handler.mods = true

export default handler
