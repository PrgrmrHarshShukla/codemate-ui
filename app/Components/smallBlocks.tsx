"use client";

import Image from "next/image";
import code from "./icons/code-circle-svgrepo-com 1.png";
import accuracy from "./icons/percentage-circle-svgrepo-com 1.png";
import assignments from "./icons/document-add-svgrepo-com 2.png";


export default function SmallBlocks() {
    return (
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row flex-wrap justify-around items-center w-full mt-4">

            <div className="flex flex-row justify-between px-4 bg-[#F7F7F7] py-3 pr-8 rounded-[10px] items-center w-11/12 md:w-1/4">
                <div className="flex flex-row justify-center items-center gap-2 w-1/2">
                    <Image src={code} alt="code" />
                    <span className="w-1/3 text-sm">Assignments Submitted</span>
                </div>
                <span className="text-4xl font-bold">24</span>
            </div>

            <div className="flex flex-row justify-between px-4 bg-[#F7F7F7] py-3 pr-8 rounded-[10px] items-center w-11/12 md:w-1/4">
                <div className="flex flex-row justify-center items-center gap-2 w-1/2">
                    <Image src={accuracy} alt="code" />
                    <span className="w-1/3 text-sm">Coding Accuracy</span>
                </div>
                <span className="text-4xl font-bold">86%</span>
            </div>

            <div className="flex flex-row justify-between px-4 bg-[#F7F7F7] py-3 pr-8 rounded-[10px] items-center w-11/12 md:w-1/4">
                <div className="flex flex-row justify-center items-center gap-2 w-1/2">
                    <Image src={assignments} alt="code" />
                    <span className="w-1/3 text-sm">Pending Assignments</span>
                </div>
                <span className="text-4xl font-bold">03</span>
            </div>


        </div>
    )
}