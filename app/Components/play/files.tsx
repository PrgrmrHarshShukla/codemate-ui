"use client";

import Image from "next/image";
import pyIcon from "../icons/python-svgrepo-com 1.png"
import downIcon from "../icons/Vector (5).png"
import playIcon from "../icons/play-svgrepo-com 1.png";
import upload from "../icons/document-upload-svgrepo-com 1.png";
import copy from "../icons/copy-svgrepo-com 1.png";


export default function Files() {
    return (
        <div className="w-11/12 h-[14vh] flex flex-row justify-between items-center px-12">
            <div className="flex flex-row justify-between items-center w-1/2 md:w-1/4 border-2 border-gray-400 rounded-[10px] p-3">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Image src={pyIcon} alt="pyIcon" />
                    <span className=" text-xl font-bold">Python2</span>
                </div>
                <Image src={downIcon} alt="d" />
            </div>
            <div className="flex flex-row w-1/3 md:w-1/6 justify-between items-center">
                <Image src={playIcon} alt="user" />
                <Image src={upload} alt="user" />
                <Image src={copy} alt="user" />
            </div>
        </div>
    )
}