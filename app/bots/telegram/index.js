require('dotenv').config();
const { Telegraf } = require('telegraf');
const startHandler = require('./handlers/start');
const helpHandler = require('./handlers/help');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.start(startHandler);
bot.help(helpHandler);

// Future: /linkaccount, /verify commands

bot.launch();
console.log('🤖 Telegram bot is up and running!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

