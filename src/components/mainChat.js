import React, { useEffect, useState, useRef } from "react";
import MainChatLogo from "../Pictures/Chat_main/logowotext.png"
import { useForm } from "react-hook-form";
import ChatMessage from "./chatmessage";
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("https://maze-verbena-rainstorm.glitch.me"); //'http://192.168.100.14:5000'
axios.defaults.baseURL = 'https://maze-verbena-rainstorm.glitch.me';

const MainChat = ({friendData}) => {
    const {register, handleSubmit, reset} = useForm();
    const userID = localStorage.getItem("userID");
    const [messages, setMessages] = useState([]);
    const [friendid, setFriendid] =  useState(friendData.id);
    const chatReferenceScroll = useRef(null);
    let roomIdCompile = "";
    useEffect(() => {
        setFriendid(friendData.id);
    }, [friendData]);

    const getmessage = async () => {
        let getmessagereq = {
            user1: userID,
            user2: friendid
        };
        axios.post(`/get-messages`, getmessagereq ).then((res) => {
            const sortedMessages = res.data.sort((a, b) => a.id - b.id);
        setMessages(sortedMessages);

        })

        
    }


    useEffect( () => {
        getmessage();
        roomIdCompile =[userID,friendid].sort().join("-");
        if(friendid){
       socket.emit("joinRoom",(roomIdCompile));
        }
        socket.on("newMessage", (data) => {
            if (
                (data.userId == userID && data.friendId == friendData.id) ||
                (data.userId == friendData.id && data.friendId == userID)){
            setMessages((prevMessages) => [...prevMessages, { sender_id: data.userId, receiver_id: data.friendId, content: data.message }]);
        }
        });

        return () => {
            socket.off("newMessage");
            socket.emit("leaveRoom", roomIdCompile);
        };
    },[socket,friendid,userID])

    useEffect(() => {
        if(chatReferenceScroll.current) {
            chatReferenceScroll.current.scrollTop = chatReferenceScroll.current.scrollHeight
        }
    },[messages])

    const submitMessage = (e) => {
        let message = e.content;
        let messageData = {userID, message,friendid }
        console.log(messageData)
        try{
            socket.emit("sendMessage", { userId: userID, friendId: friendid, message:message });
            
            setMessages((prevMessages) => [...prevMessages, {sender_id:userID,receiver_id:friendid,content:message}])
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
            <section ref={chatReferenceScroll} className="h-4/5 flex flex-col overflow-scroll no-scrollbar"> 
                {messages.map((item,key) => {
                    return(
                        <ChatMessage content={item.content} user1={item.sender_id} user2={item.receiver_id} friendname={friendData.username} key={key} />
                    )
                })}
            </section>
            <section className="w-4/5 fixed bottom-0 flex justify-start">
                <form onSubmit={handleSubmit(submitMessage)} className="w-full px-4 mb-4 flex" >
                    <input className="w-full font-medium rounded-lg p-2 border border-slate-400"
                    {...register("content",{required: ""})}
                    placeholder="Type a message" autoComplete="off"/>
                    <button><img src={MainChatLogo} className="w-10 pl-3" /></button>
                </form>
            </section>
        </div>
    )
}

export default MainChat;