import React from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png"
import axios from "axios";
import { useState, useEffect } from "react";
axios.defaults.baseURL = 'http://192.168.100.14:5000';

const ChatNames = ({onSearchUser}) => {

    const userID = localStorage.getItem("userID");
    const [userData, setUserData] = useState([]);
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
    });

   

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.post(`/getuser`, {userID});
                setUserData(response.data);
                if (response.data.length > 0) {
                    onSearchUser(response.data[0])
                }
            }catch (err) {console.log(err)}
        }
        fetchData();    
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