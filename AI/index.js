const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: '',
});
const openai = new OpenAIApi(configuration);

module.exports = new class middleWare {
    // answer dynamically
    async answerQuestion(ctx, next) {
        const response = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [
                {
                    "role": "system",
                    "content": "You are the sales support of an online store. Use the following principles in responding to customers: \n describe the products \n try to stimulate the customer to buy by describing the products \n understand the customer's problems by understanding the text and give an answer that lead to trust"
                },
                {
                    "role": "user",
                    "content": ctx.message.text
                }
            ],
            temperature: 0.8,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        const aiMessage = response['data']['choices'][0]['message']['content'];
        ctx.reply(aiMessage);

        next();
    }
}
