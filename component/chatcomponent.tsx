"use client"

import { useChat, Message } from "ai/react"
export default function chatcomponent(){

     const { input, handleInputChange, handleSubmit,isLoading, messages} =useChat()

     console.log(messages)
     console.log(input)
    return(
        <div>
             { messages.map( (message : Message) =>{
                return(
                    <div key={message.id}>
                        {
                           message.role === "assistant" 
                           ?
                           <h3 className="text-lg font-semibold mt-2">
                            GPT-4
                           </h3>
                           :
                           <h3 className="text-lg font-semibold mt-2">
                           USER
                          </h3>

                        }
                        {
                            message.content.split('\n').map((currentTextblock:string, index : number)=>{
                                if(currentTextblock ===""){
                                    return <p key={message.id +index}>&nbsp;</p>
                                 }else{
                                    return <p key={message.id +index}>currentTextblock;</p>
                                 }
                              
                                )
                            }
                        )
                        }

                    </div>
                )
             })}
        </div>
        <div>
          
            <form className="mt-12" onSubmit={handleSubmit}>
                <p>user message</p>
                <textarea 
                    className="mt-2 w-full bg-slate-600 p-2"
                    value={input}
                    onChange={handleInputChange}
                />

                <button className="rounded-md bg-blue-600 p-2 mt-2">
                    send message
                </button>

            </form>
        </div>
    )
}