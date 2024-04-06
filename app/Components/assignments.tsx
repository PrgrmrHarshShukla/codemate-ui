"use client";

import Image from "next/image";
import clock from "./icons/clock-circle-svgrepo-com 1.png"
import blueIcon from "./icons/blue-download-square-svgrepo-com 1 (1).png"
import dIcon from "./icons/download-square-svgrepo-com 1.png"
import info from "./icons/info-circle-svgrepo-com 1.png"
import circle82 from "./icons/Ellipse 3.png"
import circle23 from "./icons/Ellipse 5.png"
import circle72 from "./icons/Ellipse 7.png"
import circleEmpty from "./icons/Ellipse 4.png"

export default function Assignments () {
    return (
        <div className="w-full flex flex-col justify-between items-start px-12 mt-4">
            <span className="text-black text-xl font-bold my-4">Completed Assignments</span>
            <div className="w-full flex h-auto flex-col justify-center items-center gap-3">

                <div className="flex gap-4 md:gap-0 flex-col md:flex-row justify-around px-4 py-3 pr-8 rounded-[10px] items-center w-full border-2 border-gray-300">

                    <div className="flex flex-col justify-center items-start gap-2 w-full md:w-1/2">
                        <span className=" font-bold">Assignment 5</span>
                        <span className="text-sm text-gray-500 w-full md:w-5/6">
                            {`Bob has a playlist of "N" songs, each song has a singer associated with it(denoted by an integer). Favourite singer of Bob is the one whose songs are the most on ......`}
                        </span>                        
                    </div>
                    <div className="h-[6vh] w-auto border-l-[1px] border-gray-400 hidden md:block mr-8"></div>

                    
                    <div className="flex flex-row justify-center items-center gap-2 w-full md:w-1/4 bg-[#ffdb4b3c] h-[8vh] font-bold rounded-[10px] text-[#F77F00]">
                        <Image src={clock} alt="code" />
                        <span className="text-sm">Yet To Evaluate</span>
                    </div>


                        <div className="h-[6vh] w-auto border-l-[1px] border-gray-400 hidden md:block mx-8"></div>
                    <div className="flex flex-row justify-center gap-8 items-center w-full md:w-1/4">
                        <div className="flex flex-col justify-between items-center">
                            <Image src={dIcon} alt="dIcon" />
                            <span>Reports</span>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <Image src={info} alt="dIcon" />
                            <span>View</span>
                        </div>
                    </div>

                </div>


                <div className="flex gap-4 md:gap-0 flex-col md:flex-row justify-around px-4 py-3 pr-8 rounded-[10px] items-center w-full border-2 border-gray-300">

                    <div className="flex flex-col justify-center items-start gap-2 w-full md:w-1/2">
                        <span className=" font-bold">Assignment 1</span>
                        <span className="text-sm text-gray-500 w-full md:w-5/6">
                            {`Bob has a playlist of "N" songs, each song has a singer associated with it(denoted by an integer). Favourite singer of Bob is the one whose songs are the most on ......`}
                        </span>                        
                    </div>
                    <div className="h-[6vh] w-auto border-l-[1px] border-gray-400 hidden md:block mr-8"></div>

                    
                    <div className="flex flex-row justify-center gap-8 items-center w-full md:w-1/4">
                        <div className="flex flex-col justify-between items-center h-[10vh]">
                            <div className="realtive flex flex-col justify-center items-center  rounded-full ">
                                <Image src={circle82} alt="dIcon" />
                                <Image src={circleEmpty} alt="dIcon" className="absolute" />
                                <span className="absolute font-bold text-[#2A9D8F]">82</span>
                            </div>
                            <span>Score</span>
                        </div>
                        <div className="flex flex-col justify-between items-center h-[10vh]">
                            <div className="relative flex flex-col justify-end items-end rounded-full  h-[10vh] w-[7vh]">
                                <Image src={circle23} alt="dIcon" className="absolute bottom-0 left-0 " />
                                <Image src={circleEmpty} alt="dIcon" className="absolute" />
                                <span className="absolute font-bold text-[#2A9D8F] top-4 right-4">23</span>
                            </div>
                            <span>Efficiency</span>
                        </div>
                        <div className="flex flex-col justify-between items-center h-[10vh]">
                            <div className="realtive flex flex-col justify-center items-center rounded-full ">
                                <Image src={circle72} alt="dIcon" />
                                <Image src={circleEmpty} alt="dIcon" className="absolute" />
                                <span className="absolute font-bold text-[#2A9D8F]">72</span>
                            </div>
                            <span>Score</span>
                        </div>
                    </div>


                    <div className="h-[6vh] w-auto border-l-[1px] border-gray-400 hidden md:block mx-8"></div>
                    
                    <div className="flex flex-row justify-center gap-8 items-center w-full md:w-1/4">
                        <div className="flex flex-col justify-between items-center">
                            <Image src={blueIcon} alt="dIcon" />
                            <span>Reports</span>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <Image src={info} alt="dIcon" />
                            <span>View</span>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

