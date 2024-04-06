"use client";

import Image from "next/image";
import chatBot from "../icons/Group 250.png"
import { useState } from "react";
import ChatBot from "./chatBot";

export default function Editor() {
    const [showPopUp, setShowPopUp] = useState<boolean>(false)
    return (
        <div className="relative w-5/6 md:w-11/12 h-[70vh] flex flex-col justify-between items-center border-2 border-gray-400 rounded-[10px]">
            
            <div className="h-11/12 w-11/12"></div>


            <div className="h-[9vh] w-full border-t-2 border-gray-400 flex flex-row justify-start items-center pl-4">
                <div className="border-2 border-blue-400 rounded-[10px] max-w-max py-2 px-5 ">
                    <span className="text-sm font-bold text-[#4bb7ff]">Reset All</span>
                </div>
            </div>


            <div className={`bg-white ${showPopUp ? "block" : "hidden"} absolute border-[1px] border-gray-400 rounded-[10px] w-[60vw] md:w-[25vw] h-[60vh] bottom-12 right-4`}>
                <div className="h-[6vh] font-bold flex flex-row justify-start items-center pl-4 border-b-[1px] border-gray-400 w-full">
                    <span>CodeMate AI</span>
                </div>
                <ChatBot />
            </div>
            




            <Image 
                onClick={() => setShowPopUp((p: any) => !p)}
                src={chatBot} 
                alt="chatbot" 
                className="absolute bottom-9 right-3" 
            />
        </div>
    )
}