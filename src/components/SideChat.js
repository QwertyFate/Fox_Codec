import React, { useState } from "react";
import LogowoText from "../Pictures/Chat_main/logowotext.png"
import newMessage from "../Pictures/Chat_main/newmessage.png"
import { Link } from "react-router-dom";
import ChatNames from "./ChatNames";

const SideChat = ({handleFriend}) => {

    
    return(
        <div className="w-1/4 h-screen bg-slate-500 shadow-[0px_0px_48px_10px_#D7834CBE]">
            <div className="border-b-4 border-orange-400 flex flex-row justify-between items-center mb-0">
                <img src={LogowoText} className="w-20 pb-5 pt-5 pl-10" />
                <img src={newMessage} className="w-10 mr-10 cursor-pointer"/>
            </div>
            <ChatNames onSearchUser={handleFriend} />

        </div>
    )
}

export default SideChat