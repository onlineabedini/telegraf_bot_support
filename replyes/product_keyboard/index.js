module.exports = new class product_keyboard {
    // answer diynamic
    answerّProduct(ctx) {
        // 'محصولات آنلاین'
        if (ctx.message?.text === 'محصولات آنلاین') {
            ctx.reply('اطلاعات مخصوص محصولات آنلاین')
        }
        // 'پکیج ها'
        else if (ctx.message?.text === 'پکیج ها') {
            ctx.reply('اطلاعات مخصوص پکیج ها')
        }
    }
}