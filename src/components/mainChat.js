import React, { useEffect } from "react";
import MainChatLogo from "../Pictures/Chat_main/logowotext.png"
import { useForm } from "react-hook-form";
import ChatMessage from "./chatmessage";
import axios from "axios";



const MainChat = ({friendData}) => {
    const {register, handleSubmit, reset} = useForm();

    const submitMessage = (e) => {
        let friendid = friendData.id
        let message = e.content;
        let messageData = {message,friendid }
        console.log(messageData)
        try{
        axios.post(`http://localhost:5000/send-message`, messageData)
            reset();
        }catch(error){console.error(error)}
    }

    return(
        <div className="w-full bg-slate-300">
            <div className="border-b-4 border-orange-400 h-[109px] items-center flex">
                <img src={MainChatLogo}  className="w-20 pl-10"/>
                <div className="ml-10 font-bold">
                <h2>{friendData.username}</h2>
                    <h3 className="text-xs"> Active Now</h3>
                </div>
            </div>
            <section className="h-4/5 flex">
                <ChatMessage />
            </section>
            <section className="w-4/5 fixed bottom-0 flex justify-start">
                <form onSubmit={handleSubmit(submitMessage)} className="w-full px-4 mb-4 flex" >
                    <input className="w-full font-medium rounded-lg p-2 border border-slate-400"
                    {...register("content",{required: ""})}
                    placeholder="Type a message"/>
                    <button><img src={MainChatLogo} className="w-10 pl-3" /></button>
                </form>
            </section>
        </div>
    )
}

export default MainChat;