

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream ,streamingtextresponse } from "ai";
import { config } from "process";
import { Stream } from "stream";

export const runtime = 'edge' ;

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEYS

})
const openai = new OpenAIApi(config);


export async function post(request: Request){
    const { messages} = await request.json():



    const response = await openai.createChatCompletion({
        model : 'gpt-4',
        stream : true,
        messages :[
            {role: "system" , content: 'you are helpful assistant. you explain content marketing concepts simply to intermidiate.'},
            ...messages
        ]
     })

     return new streamingtextresponse(Stream);
}