import React from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png"




const ChatMessage = ({content, user1, user2,friendname}) => {
    const currentUserId = localStorage.getItem("userID")
    const isCurrentUser = currentUserId == user1;
    
    return (
             <div className={` py-2 flex px-10 ${isCurrentUser ? "flex-row-reverse ml-5" : "flex-row mr-5"}`} >
                <img src={AvatarPic} className="h-11"/>
                <div className="flex justify-center flex-col pl-5">
                    <h3 className="text-xs">{isCurrentUser? "You" : friendname}</h3>
                    <h2 className="border-2 border-black max-w-sm break-words rounded-xl bg-slate-300 px-2">{content}</h2>
                </div>
            </div>
    )
};

export default ChatMessage;