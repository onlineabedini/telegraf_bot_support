// require bot
const { Telegraf } = require('telegraf');
const token = '6371751048:AAEvpWUQKetH4F_LSbdpeJt5mcWGGms6GQs'
const bot = new Telegraf(token);

// session
const LocalSession = require('telegraf-session-local');

// middleware
const answerQuestion = require('./AI/index');
bot.use((new LocalSession({ database: 'local_data_db.json' })).middleware());

// replyes
const startReply = require('./replyes/start');
const mainReply = require('./replyes/main_keyboard');
const faqReply = require('./replyes/faq_keyboard');
const productReply = require('./replyes/product_keyboard');

new class telegram_application {
    // constructor
    constructor() {
        this.start();
        this.middle();
        this.listen();
        this.lunch();
    }

    // start method
    start() {
        bot.start((ctx) => {
            startReply.startAns(ctx);
        });
    }

    // middle method
    middle() {
        bot.use(async (ctx, next) => {
            if(ctx.session.state === 'AI_asking' && ctx.message.text !== 'بازگشت'){
                await answerQuestion.answerQuestion(ctx, next);
            } else {
                next();
            }
        });
    }

    // listen method
    listen() {
        bot.use((ctx, next) => {
            mainReply.answerّMain(ctx);
            productReply.answerّProduct(ctx);
            faqReply.answerّFAQ(ctx);
            next();
        });
    }

    // lunch method
    lunch() {
        bot.launch()
            .then(() => {
                console.log('برنامه تلگرام راه‌اندازی شد');
            })
            .catch((err) => {
                console.error('امکان راه‌اندازی برنامه تلگرام وجود ندارد', err);
            });
    }
}