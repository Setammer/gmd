/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
 
 - Gumdramon Is purple -
 
 • Base Remaked By kiyo
 • No Having Team For Ever
*/

console.clear()
require('../../lib/system/config')
//========/
const { default: makeWASocket, generateWAMessage, makeCacheableSignalKeyStore, getAggregateVotesInPollMessage, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, jidDecode, proto, getContentType, downloadContentFromMessage, fetchLatestWaWebVersion } = require("@adiwajshing/baileys");
const fs = require("fs");
const chalk = require("chalk")
const cfont = require('cfonts')
const pino = require("pino");
const path = require('path')
const lolcatjs = require('lolcatjs')
const NodeCache = require("node-cache");
const qrcode = require('qrcode-terminal');
const fetch = require("node-fetch")
const FileType = require('file-type')
const { exec } = require('child_process');
const _ = require('lodash')
const { Boom } = require("@hapi/boom");
const PhoneNumber = require("awesome-phonenumber");
const readline = require("readline");
const { smsg, color, getBuffer } = require("../../lib/myfunc.js")
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../../lib/exif.js')
const { toAudio, toPTT, toVideo } = require('../../lib/converter.js')
const process = require('process');
const moment = require("moment-timezone")
const os = require('os');
const speed = require('performance-now')
const checkDiskSpace = require('check-disk-space').default;
const yargs = require('yargs/yargs')
const store = makeInMemoryStore({ logger: pino().child({ level: "silent", stream: "store" }) });
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

function checkFFmpegInstallation() {
  return new Promise((resolve, reject) => {
    exec('ffmpeg -version', (error, stdout, stderr) => {
      if (error) {
        reject('FFmpeg tidak ditemukan.');
      } else {
       // resolve('FFmpeg terinstal.');
      }
    });
  });
}

function installFFmpeg() {
  const platform = os.platform();
  return new Promise((resolve, reject) => {
    if (platform === 'linux') {
      exec('sudo apt update && sudo apt install -y ffmpeg', (error, stdout, stderr) => {
        if (error) {
          reject('Gagal menginstal FFmpeg di Linux.');
        } else {
          resolve('FFmpeg berhasil diinstal di Linux.');
        }
      });
    } else if (platform === 'darwin') {
      exec('brew install ffmpeg', (error, stdout, stderr) => {
        if (error) {
          reject('Gagal menginstal FFmpeg di macOS.');
        } else {
          resolve('FFmpeg berhasil diinstal di macOS.');
        }
      });
    } else if (platform === 'win32') {
      reject('Windows: Silahkan ketik npm install ffmpeg-installer dan jalankan kembali ketika sudah menginstall: npm start');
    } else {  
      reject('Anda perlu mengunduh FFmpeg dari https://ffmpeg.org/download.html dan menambahkannya ke PATH silahkan download dan set di lib/exif.js.');
    }
  });
}

checkFFmpegInstallation()
  .then((message) => {
    console.log(message);
  })
  .catch(async (message) => {
    console.log(message);
    console.log('menginstal FFmpeg secara otomatis...');
    try {
      const installMessage = await installFFmpeg();
      console.log(installMessage);
    } catch (installError) {
      console.error(installError);
      console.log('FFmpeg tidak dapat diinstal otomatis.');
      console.log('Harap ikuti petunjuk berikut untuk menginstal FFmpeg secara manual:');
      console.log('1. Untuk Linux: jalankan "sudo apt install ffmpeg" (Ubuntu/Debian).');
      console.log('2. Untuk macOS: jalankan "brew install ffmpeg" (Homebrew).');
      console.log(`3. Untuk Windows: Jalankan "npm install ffmpeg-installer" dan jalankan kembali ketika sudah menginstall: "npm start (Windows/Rdp)."`);
      console.log('4. Untuk Yang gagal: Anda perlu mengunduh FFmpeg dari https://ffmpeg.org/download.html dan menambahkannya ke PATH silahkan download dan set di lib/exif.js (Recomended).');
    }
  });

const { bytesToSize, checkBandwidth, formatSize, jsonformat, nganuin, runtime, shorturl, formatp, getGroupAdmins } = require("../../lib/myfunc");
const {
    formatDate,
    getTime,
    isUrl,
    await,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    totalcase
} = require('../../lib/myfunc')

const opts = yargs(process.argv.slice(2)).exitProcess(false).parse();
const dbPath = './lib/json/database.json';

const low = require('../../lib/lowdb');
const { Low, JSONFile } = low;
const mongoDB = require('../../lib/mongoDB');

let db;
if (urldb !== '') {
db = new mongoDB(urldb);
console.log("[Berhasil tersambung ke database MongoDB]");
} else {
db = new JSONFile(dbPath);
console.log(chalk.magenta.bold("[Berhasil tersambung ke database Lokal]"));
}

global.db = new Low(db);
global.DATABASE = global.db;

global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000));
if (global.db.data !== null) return;
global.db.READ = true;
await global.db.read();
global.db.READ = false;

global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
};

global.db.chain = _.chain(global.db.data);
};

global.loadDatabase();

process.on('uncaughtException', console.error);

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)



function createTmpFolder() {
const folderName = "tmp";
if (!fs.existsSync(folderName)) {
fs.mkdirSync(folderName);
console.log(chalk.magenta.bold(`Folder '${folderName}' berhasil dibuat.`))
} else {
//console.log(chalk.magenta(`Folder '${folderName}' sudah ada.`))
}
}
createTmpFolder();

const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
return new Promise((resolve) => {
rl.question(text, resolve)
})
};
const useMobile = process.argv.includes("--mobile") 
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const { version, isLatest } = fetchLatestBaileysVersion();
const msgRetryCounterCache = new NodeCache();
async function startBotz() {
function credsExist() {
    return fs.existsSync('./lib/system/session/creds.json');
}
let usePairingCode = false
if (!credsExist()) {
console.clear()
const optionauth = await question(chalk.magenta.bold(`\n${chalk.magenta.bold("「 Pilih Metode Koneksi 」")}\n\n1. Scan QR ${chalk.white.bold("[ Memerlukan Scan ]")}\n2. Pairing Code ${chalk.white.bold("[ Tanpa Scan ]")}\n<!> Masukan nomor ${chalk.white.bold("1")} atau ${chalk.white.bold("2")}\n${chalk.white.bold("•")} ──> `));
 usePairingCode = optionauth.trim() === '2';
}
const browserOption = usePairingCode ? ['Ubuntu', 'Chrome', '20.0.04'] : ['Gumdramon Md', 'Chrome', '3.0.0'];
const { state, saveCreds } = await useMultiFileAuthState("./lib/system/session");  
const ptz = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !usePairingCode,  
    auth: {
         creds: state.creds,
         keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
      },
    isLatest: true,
    msgRetryCounterCache,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    emitOwnEvents: true,
    fireInitQueries: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    browser: browserOption,
    getMessage: async (key) => {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id);
            return msg.message;
        }
        return { conversation: "Nature ~" };
    },
    patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
        defaultQueryTimeoutMs: undefined,
        emitOwnEvents: true,
        fireInitQueries: true,
        mobile: useMobile,
});

//console.log("Plugin Loaded.")

if (!ptz.authState.creds.registered && usePairingCode) {
console.clear()
    console.log(chalk.magenta.bold(`\n\n ‎ ‎  Gumdramon MD • coppyright©2024 - kiyo `));
    console.log(chalk.white(' ‎ ‎_____________________________________\n'));
    console.log(chalk.magenta.bold("Input Nomor Yang Aktif . . ."))
    const phoneNumber = await question("     ");
    const code = await ptz.requestPairingCode(phoneNumber.trim());
    console.log(chalk.magenta.bold(`${chalk.white.bold("Output Pairing code :")} -[ ${chalk.white.bold(code)} ]-`));
}

async function getMessage(key){
if (store) {
const msg = await store.loadMessage(key.remoteJid, key.id)
return msg?.message
}
return {
conversation: "Nature~"
}
}

store.bind(ptz.ev);
ptz.ev.on('messages.update', async (chatUpdate) => {
try {
    for(const { key, update } of chatUpdate) {
     let forpollup = chatUpdate[0].update.pollUpdates
       //console.log(forpollup)
        if(forpollup) {
            // Payload key
            const pollCreation = await getMessage(key);
               //console.log(pollCreation)
            // Jika itu dari bot Gumdramon            
            if(pollCreation && key.fromMe) {
                const pollUpdate = await getAggregateVotesInPollMessage({
                    message: pollCreation,
                    pollUpdates: forpollup,
                });
               // console.log(pollUpdate)
                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name;
                if (toCmd == undefined) {
                    return
                } else {
                    var prefCmd = "." + toCmd;
                    await ptz.appenTextMessage(prefCmd, chatUpdate);
                    //auto delet poll update
                       ptz.sendMessage(key.remoteJid,
			    {
			        delete: {
			            remoteJid: key.remoteJid,
			            fromMe: true,
			            id: key.id,
			            participant: key.participant
			        }
			    })
			    
                }
            }
        }
    }
    } catch(e) {
    console.log(e)
    }
    })
    
ptz.ev.on("messages.upsert", async (chatUpdate) => {
  try {
    const mek = chatUpdate.messages[0];
    if (!mek.message) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') 
      ? mek.message.ephemeralMessage.message 
      : mek.message;
    if (mek.key && mek.key.remoteJid === 'status@broadcast') {
      await ptz.readMessages([mek.key]);
      return;
    }
    if (!ptz.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
    const m = smsg(ptz, mek, store);
    require("../../case")(ptz, m, chatUpdate, store);
/*    const textcmds = mek.message.conversation || mek.message.extendedTextMessage?.text;   
    console.log(textcmds)*/

  } catch (err) {
    console.error("error di messages.upsert:", err.message);
    console.error(err.stack);
  }
});

// Setting
ptz.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return (decode.user && decode.server && decode.user + "@" + decode.server) || jid;
} else return jid;
};

ptz.ev.on("contacts.update", (update) => {
for (let contact of update) {
let id = ptz.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});

ptz.getName = (jid, withoutContact = false) => {
id = ptz.decodeJid(jid);
withoutContact = ptz.withoutContact || withoutContact;
let v;
if (id.endsWith("@g.us"))
return new Promise(async (resolve) => {
v = store.contacts[id] || {};
if (!(v.name || v.subject)) v = ptz.groupMetadata(id) || {};
resolve(v.name || v.subject || PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber("international"));
});
else
v =
id === "0@s.whatsapp.net"
? {
id,
name: "WhatsApp",
}
: id === ptz.decodeJid(ptz.user.id)
? ptz.user
: store.contacts[id] || {};
return (withoutContact ? "" : v.name) || v.subject || v.verifiedName || PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber("international");
};

ptz.public = true

ptz.serializeM = (m) => smsg(ptz, m, store)

ptz.ev.on('connection.update', async (update) => {
const {
qr,
connection,
lastDisconnect
} = update
try{
if (qr && !usePairingCode) {
    console.log(chalk.magenta.bold(`\n\n ‎ ‎  Gumdramon MD • coppyright©2024 - kiyo `));
    console.log(chalk.white(' ‎ ‎_____________________________________\n'));
    console.log(chalk.magenta.bold("Silahkan Scan Qr Di Bawah . . ."))
    setTimeout(() => {
    qrcode.generate(qr, { small: true }); 
    }, 3100)
    }
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Verifikasi Again`); ptz.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startBotz(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startBotz(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); ptz.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Verifikasi Again And Run.`); ptz.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
    console.log("Restart Required, Restarting..."); 
    console.clear()
    startBotz(); 
}
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startBotz(); }
else ptz.end(`Unknown DisconnectReason: ${reason}|${connection}`)
} if (update.connection == "open" || update.receivedPendingNotifications == "true") {
    //console.log(chalk.white(' ‎ ‎\n'))
    let cxdf = JSON.stringify(ptz.user, null, 2)
    let cxdf2 = cxdf.replace("{", '')
    .replace(/"/g, '');

console.clear()
cfont.say('<- Gumdramon ->', {
    font: 'chrome',
    align: 'left',
    colors: ['magenta','white'],
    background: 'white',
    letterSpacing: 1,
    lineHeight: 1,
    space: false,
    maxLength: '20',
});
 console.log(chalk.magentaBright.bold(` ‎ ‎    Gumdramon - MD • coppyright©2024 - kiyo`))
    console.log(chalk.white('     ‎ ‎_____________________________________\n'))  
    const cxdf3 = cxdf2.replace("}", '')
    const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = `
 ╭ > ${chalk.bgMagenta("[ S E R V E R - U S E D ]")}
 │ ▸ node ver: ${process.version}
 │ ▸ platform: ${os.platform()}
 │ ▸ upload: ${upload}
 │ ▸ download: ${download}
 │ ▸ free disk: ${formatSize(freespace)}
 │ ▸ free ram: ${formatSize(sisaram)} 
 ╰ >\n\n`
 console.log(chalk.bold(respon))
console.log(chalk.white(` ‎ ‎Connected, welcome owner ! ` + chalk.magentaBright.bold(cxdf3)))
    
    console.log(chalk.white(' ‎ ‎_____________________________________\n'))
}} catch (err) {
console.log('Error Di Connection.update '+err)
}
})

ptz.ev.on("creds.update", saveCreds);
ptz.getFile = async (PATH, returnAsFilename) => {
let res, filename
const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
const type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename) {
  filename = path.join(__dirname, '../../tmp/', new Date().getTime() + '.' + type.ext);
  await fs.promises.writeFile(filename, data);
}

return {
res,
filename,
...type,
data,
deleteFile() {
return filename && fs.promises.unlink(filename)
}
}
}

ptz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 

ptz.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ptz.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ptz.getName(i)}\nFN:${await ptz.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
	    })
	}
	ptz.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

ptz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await ptz.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '', mimetype = type.mime, convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

let message = {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}
let m
try {
m = await ptz.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
console.error(e)
m = null
} finally {
if (!m) m = await ptz.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
return m
}
}


ptz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

ptz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || '';
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename;
    let savePath = path.join(__dirname, '../../tmp', trueFileName);
    
    await fs.writeFileSync(savePath, buffer);
    return savePath;
};
ptz.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

ptz.sendImageAsStickerso = async (jid, path, options = {}, quoted) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await ptz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

ptz.sendPoll = (vb, name = '', values = [], selectableCount = 1) => {
return  ptz.sendMessage(vb.chat, {poll: { name, values, selectableCount }})
};

ptz.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ptz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

ptz.sendText = (jid, text, quoted = '', options) => ptz.sendMessage(jid, { text: text, ...options }, { quoted })
return ptz;
}

startBotz()

//batas
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
