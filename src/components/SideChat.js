import React, { useState } from "react";
import LogowoText from "../Pictures/Chat_main/logowotext.png"
import { useNavigate } from "react-router-dom";
import ChatNames from "./ChatNames";

const SideChat = ({handleFriend}) => {
    let Navigate = useNavigate();
    
    const handleClick = () => {
        localStorage.setItem("isauthentication", false);
        Navigate("/")
        
        
    }

    
    return(
        <div className="w-1/4 h-screen bg-slate-500 shadow-[0px_0px_48px_10px_#D7834CBE]">
            <div className="border-b-4 border-orange-400 flex flex-row justify-between items-center mb-0">
                <img src={LogowoText} className="w-20 pb-5 pt-5 pl-10" />
                <h2 onClick={handleClick} className="pr-10"> Logout </h2>
            </div>
            <ChatNames onSearchUser={handleFriend} />
        </div>
    )
}

export default SideChat