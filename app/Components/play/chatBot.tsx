"use client";

import Image from "next/image";
import sendIcon from "../icons/send-alt-1-svgrepo-com 1.png"
import { useState } from "react";
import getRes from "./getRes";

export default function ChatBot() {
    const [userInput, setUserInput] = useState<any>('');
    const [chatArray, setChatArray] = useState<any>([]);

    const handleChat = async () => {
        try {
            setChatArray((p: any) => [...p, userInput]);
            const res = await getRes(userInput);
            setChatArray((p: any) => [...p, res]);
        } 
        catch (error: any) {
            console.log(error.message);
        }
    }



    return (
        <div className="w-full h-[54vh] flex flex-col justify-between items-start pl-4 py-4">
            <div id="chatArea" className="flex flex-col justify-start items-end w-full overflow-y-auto px-2">
                {
                    chatArray.map((item: any, index: any) => (
                        <div 
                            key={index}
                            className={` ${index % 2 == 0 ? 
                            "self-end bg-gray-200" 
                            : 
                            "self-start bg-blue-200"
                            } p-2 rounded-[5px] mb-3  w-2/3`}
                        >
                            <span className="">
                                {item}
                            </span>
                        </div>
                    ))
                }
            </div>

            <div className="relative w-3/4 h-[6vh] border-2 border-gray-400 z-30 rounded-full px-2 flex flex-row justify-start items-center">
                <input value={userInput} onChange={(e: any) => setUserInput(e.target.value)} type="text" placeholder="Enter your query" className="z-30 h-[5vh] outline-none rounded-full pl-2 w-5/6" />
                <Image onClick={handleChat} src={sendIcon} alt="s" className="z-10 absolute bottom-[11px] right-1" />
            </div>
        </div>
    )
}