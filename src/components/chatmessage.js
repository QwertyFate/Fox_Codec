import React from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png"

const Chatfriend = () => {
    return(
        <div className="py-5 flex flex-row ml-5">
                <img src={AvatarPic} className="h-11"/>
                <div className="flex justify-center flex-col pl-5">
                    <h3 className="text-xs">Name</h3>
                    <h2 className="border-2 border-black max-w-sm break-words rounded-xl bg-slate-300 px-2">the quick brown fox jumps over the lazy dog </h2>
                </div>
            </div>
    )
}

const Chatuser = () => {
    return(
        <div className="py-5 flex flex-row-reverse ml-5 pr-10">
                <img src={AvatarPic} className="h-11"/>
                <div className="flex justify-center flex-col pr-5">
                    <h3 className="text-xs text-end">Name</h3>
                    <h2 className="border-2 border-black max-w-sm break-words rounded-xl bg-slate-300 px-2" >the quick brown fox jumps over the lazy dog</h2>
                </div>
            </div>
    )
}

const ChatMessage = () => {
    return (
        <div className="flex flex-col w-full overflow-y-scroll no-scrollbar">
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />
            <Chatfriend />
            <Chatuser />

        </div>
    )
};

export default ChatMessage;