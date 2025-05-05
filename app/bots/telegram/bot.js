
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "👋 Hello from SchoolBuddys Bot!");
});

bot.on('message', (msg) => {
  console.log(`[BOT] ${msg.chat.id}: ${msg.text}`);
});
