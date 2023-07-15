module.exports = new class faq_keyboard {
    // answer diynamic
    answerّFAQ(ctx) {
        // 'آیا محصولات معتبر هستند؟'
        if (ctx.message?.text === 'آیا محصولات معتبر هستند؟') {
            ctx.reply('بله محصولات کاملا معتبر و دارای استانداردها هستند')
        }
        // 'آیا محصول مطمئن به دست من میرسد؟'
        else if (ctx.message?.text === 'آیا محصول مطمئن به دست من میرسد؟') {
            ctx.reply('بله ارسال محصولات بصورت کامل است')
        }
    }
}