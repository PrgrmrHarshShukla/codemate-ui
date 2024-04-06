"use client";

import Editor from "../Components/play/editor";
import Files from "../Components/play/files";
import Header from "../Components/play/header";

export default function MainBody () {
    return (
        <div className="bg-white min-h-screen h-auto w-screen ml-4 md:ml-0 md:w-[80vw] flex flex-col justify-start items-center py-4">
            <Header />
            <Files />
            <Editor />
        </div>
    )
}