"use client";

import MainBody from "../Components/mainBody";
import Sidebar from "../Components/sidebar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen h-auto w-screen flex-row items-start justify-between">
      <div className="fixed md:hidden min-h-screen w-[10vw] md:w-[20vw]">
        <Sidebar />
      </div>
      <div className="hidden md:block min-h-screen w-[10vw] md:w-[20vw]">
        <Sidebar />
      </div>
      <div className="min-h-screen h-auto w-screen md:w-[80vw]">
        <MainBody />
      </div>
    </main>
  );
}
