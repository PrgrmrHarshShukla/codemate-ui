"use client";

import Assignments from "./assignments";
import Header from "./header";
import SmallBlocks from "./smallBlocks";
import Submissions from "./submissions";

export default function MainBody () {
    return (
        <div className="bg-white min-h-screen h-auto w-screen ml-4 md:ml-0 md:w-[80vw] flex flex-col justify-start items-center py-4">
            <Header />
            <SmallBlocks />
            <Submissions />
            <Assignments />
        </div>
    )
}