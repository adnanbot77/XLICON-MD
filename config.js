const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "994400516293"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '994400516293' 
global.devs = '99400516293';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+994400516293
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0tXRWYvdFNWWTV0amxLblM2Nm9ybXphNkVvWDhiQnpqRXFMd25TbFNFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMTFIeVN0bGtWSlJYdmR5Q0tiVmtqL0F2TmVOMk1DNWwyM0ppYlZMNWxqRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTTmNKdjhwUTdEUU4xelVKYXo0ejdYT29XSW5SMGtsSXFWd29LMEQyeG1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVlpPUzZha2hlbjdHVUovUGVpUWFZS240QmlEUzJmcld2YmVpK2c0MkhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKS3JGcElDNFF0YWdjY2I1OVMwdDg5dnAvcDZyNVpNWFB4aGFwS0srVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlyRld0MDJ5aGtsUDVSMWJhZ0ZxOWtWbjZ6c3Z4Z0wxWFF0Nzc5bnpkR289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVAwMS9hWGlueVVuZGpseUd3RGorYmdpSW5xdHhsR1ZCTzlvZWtxOXJsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1h5TTBENWRZWFZQemVGYzFHb3RHOXhsdG5VdDFmLzZOQXpxR2ZDeU5UND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgwM0s1U1pLVTNPMzdZNWwrSXl1UzZkdmFROVByZVBsYXZPcjRmMCtWY3VIUndybGhTdEU3dUNKbGt3MHBMNnl5MGkzcDhQMUFpV1hiRUhiZHdVbGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6Ijcyc0tqcGZwTDB2WW42aUV0TVpNM3FQeUFDUkxNdXg5aVpBUkkvbUpCTDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlLaUxVU1FvUmZpa2R5QThHMWQzaUEiLCJwaG9uZUlkIjoiZGQyY2RhYjEtNmU3MS00NmI2LWE4M2YtNDVhYThmNmRhMmY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFYMlRqTWdNL1lBd0JzZXVVdjNxS1N1L05saz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTkFscXZ1RTdQM0NMR1lNWjRsblY5MHErNTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlk5UTlFSzkiLCJtZSI6eyJpZCI6Ijk5NDQwMDUxNjI5MzoxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNORGI0cHNHRUx1eTBxNEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVmUmFGRXRoTS9SbkhyeUpVdXM1VjFON0hEK2ErQWNRWXBuY2syUnNGQzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImUyaW8vVFZHNDdmaENqWDdJck1DR0VsWC9OWVUrTmx1d0FzNFdDS2NrRkhGTFNFTHh5bVNUdE5wcWdlTCtuWVhFWlpyckVqWnpVREY1OENodVBQVUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRMFlacm9LNWhqOFhvMTlxYkNScmxFOTRGeTNYL0pzUldSTVpXK2lOa1lJSWR3SWpyV0tTN3Z5VmZxa05ja2hIcEZGcFZKSjZpNXk5czI5dUQ4K2ZpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5NDQwMDUxNjI5MzoxMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWSDBXaFJMWVRQMFp4NjhpVkxyT1ZkVGV4dy9tdmdIRUdLWjNKTmtiQlF1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA4NDMxNjc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVB1aiJ9",//PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'adnan',
  packname:  process.env.PACK_NAME || 'adnan',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
