"use client";

import Image from "next/image";
import smallIcon from "./images/smallIcon.png"
import largeIcon from "./images/largeIcon.png"
import homeIcon from "./icons/home.svg"
import expandArrow from "./images/expandArrow.png"
import playground from "./icons/terminal.png"
import assignments from "./icons/assignments.png"
import reportIcon from "./icons/report.png"
import user from "./icons/user.png"
import { useState } from "react";


export default function Sidebar () {
    const [showSmallIcon, setShowSmallIcon] = useState<boolean>(false)


    return (
        <div className="relative flex flex-col justify-start  items-center  h-screen w-[10vw] md:w-[20vw] bg-white">
            <div className="border-b-2 border-gray-300 w-full flex flex-row justify-center items-center h-[12vh]">
                <Image className={`${showSmallIcon ? "block" : "hidden"} md:hidden`} src={smallIcon} alt="smallIcon" />
                <Image className="hidden md:block" src={largeIcon} alt="largeIcon" />
            </div>
            <div 
                onClick={() => setShowSmallIcon(p => !p)}
                className="absolute top-[10vh] -right-3 rounded-full bg-white"
            >
                <Image src={expandArrow} alt="expandArrow" />
            </div>
            <div className="h-[88vh] w-full flex flex-col justify-start items-center overflow-x-hidden">
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r active:bg-[#48AEF3]">
                    <Image className="text-blue-500" src={homeIcon} alt="homeIcon" />
                    <span className="text-xl font-semibold">Dashboard</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r active:bg-[#48AEF3]">
                    <Image className="text-blue-500" src={playground} alt="homeIcon" />
                    <span className="text-xl font-semibold">Playground</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r active:bg-[#48AEF3]">
                    <Image className="text-blue-500" src={assignments} alt="homeIcon" />
                    <span className="text-xl font-semibold">Assignments</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r active:bg-[#48AEF3]">
                    <Image className="text-blue-500" src={reportIcon} alt="homeIcon" />
                    <span className="text-xl font-semibold">Reports</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r active:bg-[#48AEF3]">
                    <Image className="text-blue-500" src={user} alt="homeIcon" />
                    <span className="text-xl font-semibold">Profile</span>
                </div>
            </div>
        </div>
    )
}