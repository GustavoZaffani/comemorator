import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY, dangerouslyAllowBrowser: true });

export async function generateMessage(target: string, event: string, information: string) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "user",
                    "content": "Estou criando um app mobile para geração de mensagens de felicitações. Sejam elas de aniversário, de casamento, de gravidez e outros. Vou te passar um prompt, e voce irá me sugerir uma mensagem. Ok?\n"
                },
                {
                    "role": "assistant",
                    "content": "Estou aqui para ajudar. Por favor, fale o prompt que você precisa de uma mensagem. Estou pronto para criar algo especial!"
                },
                {
                    "role": "user",
                    "content": "Crie uma mensagem para o meu (minha) tia, para comemorar o (a) gravidez da filha. "
                },
                {
                    "role": "assistant",
                    "content": "\"Querida tia, sou tão feliz em saber que a minha prima vai ser mãe! Esse é um momento mágico e emocionante para toda a família. Estou ansioso/a para conhecer o novo membro da família e dar um grande beijo nesse rosto lindo que está por vir. Meus parabéns para você e para toda a família nessa nova aventura! Que a chegada desse bebê traga muita alegria e amor para todos nós.\""
                },
                {
                    "role": "user",
                    "content": "Crie uma mensagem para minha mãe, para comemorar o aniversário. Informações adicionais: Ela mora longe"
                },
                {
                    "role": "assistant",
                    "content": "\"Querida mãe, hoje é um dia especial, é o seu aniversário! Embora esteja distante, você está sempre muito perto do meu coração. Quero desejar a você um ano cheio de saúde, felicidade e amor. Que as distâncias sejam temporárias, mas o amor e a gratidão que sinto por você sejam eternos. Estou sempre pensando em você e espero que seu dia seja repleto de sorrisos, presentes e momentos inesquecíveis. Feliz aniversário, mãe! Te amo muito!\""
                },
                {
                    "role": "user",
                    "content": `Crie uma mensagem para meu (minha) ${target}, para comemorar o (a) ${event}. Informações adicionais: ${information}`
                },
            ],
            "model": "llama-3.1-70b-versatile",
            "temperature": 1,
            "max_tokens": 1024
        });

        return chatCompletion.choices[0]?.message.content ?? "Muita felicidade e sucesso! Você merece tudo de melhor.";
    } catch (err) {
        const messages = [
            "Parabéns! Que o seu dia seja incrível!",
            "Muita felicidade e sucesso! Você merece tudo de melhor.",
            "Estou aqui para desejar tudo de bom para você. Felicitações!",
            "Que o seu dia seja iluminado com alegria e amor!",
            "Você é especial e merece todas as felicitações do mundo!",
            "Estou enviando boas vibrações e um grande abraço! Felicitações!",
            "Que o seu sonho se torne realidade! Felicitações!",
            "Você é incrível e merece ser celebrado!",
            "Aqui vai um grande abraço e um desejo de felicidade!",
            "Muita sorte e felicidade para você! Você merece tudo.",
            "Que o amor e a alegria estejam sempre com você.",
            "Felicitações! Que o seu dia seja inesquecível.",
            "Você é amado e respeitado. Felicitações!",
            "Estou aqui para desejar tudo de bom para você. Que o seu sonho se torne realidade!",
            "Que o seu coração esteja repleto de alegria e felicidade!"
        ];

        return messages[Math.floor(Math.random() * messages.length)];
    }

}