"use server";





import OpenAI from "openai";
const openai = new OpenAI({ 
    apiKey: "api_key",
    baseURL: "https://aiforcause.deepnight.tech/openai/"
});


export default async function getRes(ques: any) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "assistant",
                content: `You are a coding teacher.
                You have to give precise answers with resources for my queries.
                Now answer this: ${ques}`,
              },
            ],
            stream: false
        });
    
        const responseContent: any = completion.choices[0].message["content"];
        console.log(responseContent);
        

        return responseContent;
    } 
    catch (error: any) {
        console.log(error.message);
        console.log(error);
        return "Some error occured, please try again.";
    }
}