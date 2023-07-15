const { Keyboard } = require('telegram-keyboard');

module.exports = new class main_keyboard {
    // answer diynamic
    answerّMain(ctx) {
        // 'سوالات متداول'
        if (ctx.message?.text === 'سوالات متداول') {
            const keyboard = Keyboard.make(require('./../../keyboards/index').faq_keybaord);
            ctx.reply('سوالات متداول!', keyboard.reply());
        }
        // 'پشتیبانی محصولات'
        else if (ctx.message?.text === 'پشتیبانی محصولات') {
            const keyboard = Keyboard.make(require('./../../keyboards/index').product_keybaord);
            ctx.reply('پشتیبانی محصولات', keyboard.reply());
        }
        // 'پشتیبانی هوشمند'
        else if (ctx.message?.text === 'پشتیبانی هوشمند') {
            ctx.session.state = 'AI_asking';
            const keyboard = Keyboard.make(require('./../../keyboards/index').AI_keybaord);
            ctx.reply('پشتیبانی هوشمند', keyboard.reply());
        }
        // 'بازگشت'
        else if (ctx.message?.text === 'بازگشت') {
            ctx.session.state = '';
            const keyboard = Keyboard.make(require('./../../keyboards/index').main_keybaord);
            ctx.reply('بزگشت به کیبورد اصلی', keyboard.reply());
        }
    }
}