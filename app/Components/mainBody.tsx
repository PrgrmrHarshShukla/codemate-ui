"use client";

import Header from "./header";
import SmallBlocks from "./smallBlocks";

export default function MainBody () {
    return (
        <div className="bg-white min-h-screen h-auto w-screen md:w-[80vw] flex flex-col justify-start items-center py-4">
            <Header />
            <SmallBlocks />
        </div>
    )
}