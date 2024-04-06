"use client";

import Image from "next/image";
import smallIcon from "../images/smallIcon.png"
import largeIcon from "../images/largeIcon.png"
import homeIcon from "../icons/home.svg"
import expandArrow from "../images/expandArrow.png"
import playground from "../icons/terminal.png"
import assignments from "../icons/assignments.png"
import reportIcon from "../icons/report.png"
import user from "../icons/user.png"
import { useState } from "react";
import Link from "next/link";


export default function SidebarPlay () {
    const [showSmallIcon, setShowSmallIcon] = useState<boolean>(false)


    return (
        <div className="relative flex flex-col justify-start items-center min-h-screen w-[10vw] md:w-[20vw] bg-white border-r-[1px] border-gray-400">
            <div className="border-b-2 border-gray-300 w-full flex flex-row justify-center items-center h-[12vh]">
                <Image className={`block md:hidden`} src={smallIcon} alt="smallIcon" />
                <Image className="hidden md:block" src={largeIcon} alt="largeIcon" />
            </div>
            <div 
                onClick={() => setShowSmallIcon(p => !p)}
                className="absolute hidden md:block top-[10vh] -right-3 rounded-full bg-white"
            >
                <Image src={expandArrow} alt="expandArrow" />
            </div>
            <div className="h-[88vh] w-full flex flex-col justify-start items-center overflow-x-hidden">
                <Link href="/" className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r from-white to-blue-100  h-[8vh]">
                    <Image className="text-blue-500" src={homeIcon} alt="homeIcon" />
                    <span className="text-xl font-semibold hidden md:block">Dashboard</span>
                </Link>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full border-r-8 border-[#48AEF3] pl-[1vw] md:pl-[4vw] bg-gradient-to-r  from-white to-blue-100 h-[8vh]">
                    <Image className="text-blue-500" src={playground} alt="homeIcon" />
                    <span className="text-xl font-semibold hidden md:block">Playground</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r  from-white to-blue-100  h-[8vh]">
                    <Image className="text-blue-500" src={assignments} alt="homeIcon" />
                    <span className="text-xl font-semibold hidden md:block">Assignments</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r from-white to-blue-100  h-[8vh]">
                    <Image className="text-blue-500" src={reportIcon} alt="homeIcon" />
                    <span className="text-xl font-semibold hidden md:block">Reports</span>
                </div>
                <div className="flex flex-row justify-start items-center gap-4 mt-8 w-full active:border-r-8 active:border-[#48AEF3] pl-[1vw] md:pl-[4vw] active:bg-gradient-to-r  from-white to-blue-100  h-[8vh]">
                    <Image className="text-blue-500" src={user} alt="homeIcon" />
                    <span className="text-xl font-semibold hidden md:block">Profile</span>
                </div>
            </div>
        </div>
    )
}