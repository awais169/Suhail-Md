const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_12_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyOCxcbiAgICAgICAgODMsXG4gICAgICAgIDM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICA3MyxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDSEkySElqV3QxblBMdzI0VURDWThxbkY2bGhicmEwbmFwdzdDTDhmMnFjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBemhzN0ZyYVFnaWR2R2VWSTg1ZW5BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY1NTAxZTdjLWNkNmEtNDk3Yy04ZjJlLTMxNWUyNTAzOWI5YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzIsXG4gICAgICA2OSxcbiAgICAgIDIwLFxuICAgICAgMjYsXG4gICAgICA2MixcbiAgICAgIDIyNixcbiAgICAgIDk2LFxuICAgICAgNzYsXG4gICAgICAyNDksXG4gICAgICA3LFxuICAgICAgNDMsXG4gICAgICA4NyxcbiAgICAgIDE4NSxcbiAgICAgIDExNyxcbiAgICAgIDc1LFxuICAgICAgMjE5LFxuICAgICAgMzcsXG4gICAgICA1LFxuICAgICAgMTUzLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOCxcbiAgICAgIDc3LFxuICAgICAgMjAyLFxuICAgICAgMTY4LFxuICAgICAgNTEsXG4gICAgICAyMixcbiAgICAgIDUzLFxuICAgICAgMTQsXG4gICAgICA5MyxcbiAgICAgIDcsXG4gICAgICA5NixcbiAgICAgIDE4NCxcbiAgICAgIDExMixcbiAgICAgIDMzLFxuICAgICAgOTcsXG4gICAgICAyMzAsXG4gICAgICAxOTUsXG4gICAgICA5MSxcbiAgICAgIDI0LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdUQTg3RFFEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNDYzNzU2MTA6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYp9mI24zZgNus2YDbp9ub2YDbrPCdhorZgNizINis2YDZudmA2YDZgNus2YDbp9ub2YDbrPCdhorZgNmA2YBcIixcbiAgICBcImxpZFwiOiBcIjIzNTczMzkyNzM1ODU0MTo3NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLU1V6T01GRUplMXE3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZSMVp6Sy9mVUxGYVVqc0pvN0JzL2RUV0JQV1lDbWVJTWtUVFlzbzVyVDA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnVOaTMxODVCVk9aVnhhU1FCSFBlMWdja2gxYTg5blhEckQ1QUdTc2lncko1a0FEMFhoRmgrbk5PVGo0VGl3K3RHdUZuQXhFSGVXYzVmMUp4RVkvQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0dVWmgwSVVRVzd0RFczTXRQVGFEeDBSclNVd1FWZEM0R0pGckVGdmpCdjlwM1NRV0NseVpCNEJIR3hiOVp3dHJveW01VVh3bGY3c3phQW5KNlQ1REE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQ2Mzc1NjEwOjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM3NTk2MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
