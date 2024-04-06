"use client";

import Image from "next/image";
import user from "./images/user.png"

export default function Header() {
    return (
        <div className="w-5/6 md:w-11/12 h-[11vh] flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-start gap-2">
                <span className="text-gray-500">User/Dashboard</span>
                <span className="text-black text-3xl font-bold">Dashboard</span>
            </div>
            <div className="rounded-full hover:border-4 border-[#48AEF3]">
                <Image src={user} alt="user" />
            </div>
        </div>
    )
}