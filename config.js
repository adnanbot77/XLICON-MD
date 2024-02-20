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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VUNHo4ZERDVk9DbW40VjhvN1FxUUQvTFZuYkZNNHlGZzdJcFIwbkRrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3preFhDajFSbnQ4UjMyUWxKUHF3Si82ajgyT3cwaDVjVG84OCtESFgzOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTkhRanVIZFA1dkVrcUtETHN4WmVST3B5Zmh6b1BVY3BFK3M0U1l1UDJRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyd3R1QmdSbWE2VFJHd1d6VnZiR0ZkLzVxNGZkdTE2cUNFT3l3V3pvU0VNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOOHJqeGRwQWpFNCs1cTZ5MW96djVNSjZiUTRyN1dwdWdnVTBOVlFMRjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEyc29wNXlOYnl2ek01VTM0VnJVckEvRWY2SXV2SmlXRE5YenM2ZW1RMTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNydU5nMFN3c1Fmb0lKblMzNlVXcHJMNnpicUJQRVZBUEpBSVBCN1FIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGtXcU9tMk5RbDd2UHFLc3dWSTVDSWFYaVlmdEwvVU5IVFhtOGs0WUVFZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKNXVzWU84MmRGWXlHTWFuR3pKZjNnci93QTBIVXp5WTY5eFZYQW9xZk8vSk1iMUkxUW1CeXh6MzNtMk5RZWZSd1JUcmprN2RvUHJzZHQ0WTVIQmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJLcVZ0d2xOUCswRnBEclk3OTdGWGtSSTJHSDd1ZDZpVHc3ekp1a1NnTEVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJaTdqaVJ4aFNfbWwtQVljYlpZSTR3IiwicGhvbmVJZCI6IjQxNzQyZGRhLWY0M2UtNDNhNy05NWU1LTQ0N2ZmYzQwMzRiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RzVNWnJjbWVjU3JBZitzdUY0T0JtVkI1c1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlRud0tXVEVYRG1mVlRXTGt0Y3RGZ3ZpRWF3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZaWlhWWDNFIiwibWUiOnsiaWQiOiI5OTQ0MDA1MTYyOTM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNdmI0cHNHRUlyRHlxNEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVmUmFGRXRoTS9SbkhyeUpVdXM1VjFON0hEK2ErQWNRWXBuY2syUnNGQzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdvNWxHV2hjMmorRnNabUdtbDVYZUpjWkNBNzlmd0wyQTMvclFSc25aVlVhTXU2dTlLRE5UeDhHTXl3VDV1aFNEUVp4QlNiYldEQnNDRmdtN0VuOUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkMHFLSC8rRjVpVUszR0EvUStiR1hVMmliZzZGbHNRZFMvOEVYQ3pFUDh4VXNWa2psY2dZSkk2Q293V2ViNFlzb08vTDUwVWU2bWZqUlp1TERkYjRqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk5NDQwMDUxNjI5MzoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZIMFdoUkxZVFAwWng2OGlWTHJPVmRUZXh3L212Z0hFR0taM0pOa2JCUXUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDgzMDI3MzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHVhIn0=",//PUT Session Id Here, 
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
