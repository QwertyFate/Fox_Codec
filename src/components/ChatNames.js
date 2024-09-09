import React from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png"
import axios from "axios";
import { useState, useEffect } from "react";


const ChatNames = ({onSearchUser}) => {
    const [userData, setUserData] = useState([]);
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
    });



    useEffect(() => {
        axios.get(`http://localhost:5000/getuser`).then((res) => {
            setUserData(res.data);
            console.log(res.data)
        })
    
    },[])
    
    const handleClick = (item) => {
        onSearchUser(item)
    }

    const chatname = userData.map((item) => {
        return (
            <div onClick={() => handleClick(item)} className="flex flex-row pt-8">
            <img src={AvatarPic} className="w-10 rounded-full ml-8" />
            <div className="flex flex-col pl-8 justify-center">
                <h2 className="font-bold">{item.username}</h2>
                <h3 className="font-medium">lorem ipsum .{formattedTime}</h3>
            </div>
        </div>
        )
    })
    return (
        <div className="overflow-y-scroll h-5/6 no-scrollbar"> 
        {chatname}
        </div>
    )
}

export default ChatNames;