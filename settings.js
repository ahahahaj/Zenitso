
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['‪971553527240‬'] //ur owner number
global.ownername = "لايت" //ur owner name
global.ytname = "اليوتيوب: ZEROTWOBOT" //ur yt chanel name
global.socialm = "موقعنا : قريب باذن الله♥" //ur github or insta name
global.location = "asia, UAE, " //ur location

//bot bomdy 
global.ownernomer = "971553527240" //ur number
global.ownertag = '971553527240' //ur tag number
global.premium = ['971553527240'] //ur premium number
global.botname = 'زيرو تو بوت' //ur bot name
global.ownername = "لايت"
global.linkz = "https://i.ibb.co/YPGXwjM/images-2.jpg" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/@ZEROTWOBOT" //ur website to be displayed
global.botscript = 'https://chat.whatsapp.com/IhYY2vOmbSJJZpKimQ9ydOSYuHzVX1' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Zenitsu-Bot\n\n\nA whatsapp bot developed by\n🦄Dream Guy Deepak" //ur sticker watermark author
global.wm = "Deepak" //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: '𝐒𝐮𝐜𝐜𝐞𝐬𝐬!',
    admin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐨𝐧𝐥𝐲!',
    botAdmin: '𝐁𝐨𝐭 𝐌𝐮𝐬𝐭 𝐁𝐞 𝐀𝐝𝐦𝐢𝐧 𝐅𝐢𝐫𝐬𝐭!',
    premime: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐈𝐟 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐭𝐨 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐓𝐲𝐩𝐞 𝐑𝐞𝐧𝐭',
    owner: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 🦄𝐃𝐫𝐞𝐚𝐦 𝐆𝐮𝐲 𝐃𝐞𝐞𝐩𝐚𝐤 𝐨𝐧𝐥𝐲',
    group: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩𝐬!',
    private: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐙𝐞𝐧𝐢𝐭𝐬𝐮-𝐁𝐨𝐭 𝐨𝐧𝐥𝐲!',
    wait: '𝐖𝐚𝐢𝐭...',
    linkm: '𝐖𝐡𝐞𝐫𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤?',
    endLimit: '𝐘𝐨𝐮𝐫 𝐃𝐚𝐢𝐥𝐲 𝐋𝐢𝐦𝐢𝐭 𝐇𝐚𝐬 𝐄𝐱𝐩𝐢𝐫𝐞𝐝, 𝐓𝐡𝐞 𝐋𝐢𝐦𝐢𝐭 𝐖𝐢𝐥𝐥 𝐁𝐞 𝐑𝐞𝐬𝐞𝐭 𝐄𝐯𝐞𝐫𝐲 𝟏𝟐 𝐇𝐨𝐮𝐫𝐬',
    nsfw: '𝐓𝐡𝐞 𝐧𝐬𝐟𝐰 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐧𝐨𝐭 𝐛𝐞𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐭𝐡𝐞 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞(𝐓𝐲𝐩𝐞 𝐍𝐬𝐟𝐰 𝐨𝐧)𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞',
}

//media target
global.thum = fs.readFileSync("./DeepakMedia/theme/Zenitsupic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DeepakMedia/theme/Zenitsupic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DeepakMedia/theme/Zenitsupic.jpg") //ur error pic
global.thumb = fs.readFileSync("./DeepakMedia/theme/Zenitsupic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
