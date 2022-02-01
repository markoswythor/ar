const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
zeroyt7: 'https://zeroyt7-api.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'yourkey',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Markos'
global.owner = ['559491423691']
global.packname = 'Iris Bot ✨'
global.author = 'linktr.ee/irisbot 🚀'
global.prefa = ['','!','.','🐦','/','🗿']
global.sp = '⭔'
global.mess = {
admin: 'só admiro',
botAdmin: 'me da adm',
owner: 'só meu dono',
group: 'preciso estar em um grupo!',
private: 'vá para meu pv!',
bot: 'kkkkkt',
wait: 'Loading...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})