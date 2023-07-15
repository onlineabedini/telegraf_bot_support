const { Keyboard } = require('telegram-keyboard');

module.exports = new class start {
    // answer diynamic
    startAns(ctx) {
        const keyboard = Keyboard.make(require('./../../keyboards/index').main_keybaord);
        ctx.reply(` 
        سلام! به بات مخصوص پشتیبانی فروشگاه خوش آمدی!
        میتونی از این طریق پشتیبانی بگیری
        و اطلاعات لازم برای محصولات مختلف داشته باشی
        `, keyboard.reply());
    }
}