import React from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png"




const ChatMessage = ({currentUserId, content, senderId, receiverId}) => {

    const isCurrentUser = currentUserId === senderId;
    
    return (
        <div className="flex flex-col w-full overflow-y-scroll no-scrollbar">
             <div className={`py-5 flex ${isCurrentUser ? "flex-row ml-5" : "flex-row-reverse ml-5 pr-10"}`} >
                <img src={AvatarPic} className="h-11"/>
                <div className="flex justify-center flex-col pl-5">
                    <h3 className="text-xs">Name</h3>
                    <h2 className="border-2 border-black max-w-sm break-words rounded-xl bg-slate-300 px-2">{content}</h2>
                </div>
            </div>
        </div>
    )
};

export default ChatMessage;