import Image from "next/image";
import chatcomponent from "@/component/chatcomponent";
import { Component } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-slate-800 p-3 w-[800px] rounded-md text-white">
        <h2 className="text-2xl">welcome to content marketting AI CHATBOT !</h2>
        <P>This is an open source next.js AI chatbot app template build withNext.js </P>
        <chatcomponent />
        
        </div>
    </main>
  );
}
