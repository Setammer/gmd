/**
  
 * RDG BOTricolors

**/

const fs = require('fs')
const { color } = require('../../lib/myfunc')

//owner
global.owner = ['6285808654304']
global.nomerowner = ["6285808654304"]

//sticker
global.packname = 'Recbart BOT'
global.author = 'Anscmlfdhy'

// biarin
global.urldb = ''; 

// thumbnail
global.thumurl = "https://files.catbox.moe/afqydo.jpg"
global.thumurl2 = "https://files.catbox.moe/glt7ub.jpg"

//saluran
global.urls = "-"
global.ids = "-"
global.nems = "© Anscmlfdhy"

// pterodactyl panel
global.domain = 'https://ptero.vcloudxofficial.xyz' // isi domain
global.apikey = 'ptla_zXwlmTbvnGKq8YutSMalfe1bekYk4Jje2sKufGGMK1Z' // Isi Apikey Plta Lu
global.capikey = 'ptlc_P33AFBDJ6Eg8kXw4NVVzug15kVeFV07wousfJXUEjSV' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//messages reply
global.mess = {
    done: '*`[ RECBART BOT ] : Request completed !`*', 
    owner: '*`[ RECBART BOT ] : For an owner only`*',
    private: '*`[ RECBART BOT ] : In Private only`*',
    group: '*`[ RECBART BOT ] : Only available in group`*',
    wait: '*`[ RECBART BOT ] : Request processed..`*',
    check: {
    premium: '*`[ RECBART BOT ] : You not a premium user`*',
    jadibot: '*`[ RECBART BOT ] : You not a jadibot user`*',
    },
}
global.title = "Recbart Bot • coppyright©2021"
global.body = "ʀᴏᴀᴅ ᴛᴏ ʀᴀᴍᴀᴅʜᴀɴ"
global.filename = "RECBART BOT"
global.jpegfile = "RECBART BOT"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
