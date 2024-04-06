"use client";

import Header from "./header";
import SmallBlocks from "./smallBlocks";
import Submissions from "./submissions";
import Assignments from "./assignments";

export default function MainBody () {
    return (
        <div className="bg-white min-h-screen h-auto ml-8 w-[98vw]  md:ml-0 md:w-[80vw] flex flex-col justify-start items-center py-4">
            <Header />
            <SmallBlocks />
            <Submissions />
            <Assignments />
        </div>
    )
}