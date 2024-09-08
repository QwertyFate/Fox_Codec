import React from "react";
import MainChatLogo from "../Pictures/Chat_main/logowotext.png"
import { useForm } from "react-hook-form";
import ChatMessage from "./chatmessage";

const MainChat = () => {

    const {register, handleSubmit} = useForm();

    return(
        <div className="w-full bg-slate-300">
            <div className="border-b-4 border-orange-400 h-[109px] items-center flex">
                <img src={MainChatLogo}  className="w-20 pl-10"/>
                <div className="ml-10 font-bold">
                    <h2>QwertyFish</h2>
                    <h3 className="text-xs"> Active Now</h3>
                </div>
            </div>
            <section className="h-4/5 flex">
                <ChatMessage />
            </section>
            <section className="w-4/5 fixed bottom-0 flex justify-start">
                <form onSubmit={handleSubmit} className="w-full px-4 mb-4 flex" >
                    <input className="w-full font-medium rounded-lg p-2 border border-slate-400" placeholder="Type a message"/>
                    <button><img src={MainChatLogo} className="w-10 pl-3" /></button>
                </form>
            </section>
        </div>
    )
}

export default MainChat;