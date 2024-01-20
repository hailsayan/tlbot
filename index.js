const TelegramBot = require('node-telegram-bot-api');
const axios = require ('axios');

const token = '6934019405:AAHtSY8hZPGEGV79PcKOoYQ9u0Ant_cEa8Q';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', async (msg) => {
    // console.log(msg);
    const chatId = msg.chat.id;
    const usetInput = msg.text;
    const mess = 'سلام رییس';
    bot.sendMessage(chatId, mess);
})