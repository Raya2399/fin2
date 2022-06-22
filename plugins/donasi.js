let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0822-6106-5144]
│ •  [0822-6106-5144]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
