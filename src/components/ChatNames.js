import React, { useState, useEffect } from "react";
import AvatarPic from "../Pictures/Chat_main/logowotext.png";
import axios from "axios";
axios.defaults.baseURL = 'http://192.168.100.14:5000';


const ChatNames = ({ onSearchUser }) => {
    const userID = localStorage.getItem("userID");
    const [userData, setUserData] = useState([]);
    const [messages, setMessages] = useState({});
    const [clickedItem, setClickedItem] = useState(null)
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
    });
    
    const MESSAGE_LIMIT = 7;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(`/getuser`, { userID });
                setUserData(response.data);


                const messageRequests = response.data.map(user => 
                    axios.post(`/get-messages`, { user1: userID, user2: user.id })
                );
                const responses = await Promise.all(messageRequests);
                
                const messagesData = {};
                responses.forEach((res, index) => {
                    messagesData[response.data[index].id] = res.data[res.data.length - 1];
                });
                setMessages(messagesData);

                if (response.data.length > 0) {
                    onSearchUser(response.data[0]);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [userID]);
    const handleClick = (item) => {
        onSearchUser(item);
        setClickedItem(item.id)
    };

    const truncateMessage = (message) => {
        if (message.length > MESSAGE_LIMIT) {
            return message.slice(0, MESSAGE_LIMIT) + "...";
        }
        return message;
    };

    const chatname = userData.map((item) => {
        const latestMessage = messages[item.id]?.content || "No messages";
        const isClicked = clickedItem === item.id

        return (
            <div onClick={() => handleClick(item)} className={`flex flex-row pt-8 cursor-pointer ${isClicked? "opacity-50 bg-slate-400" : ""} hover:opacity-50`} key={item.id}>
                <img src={AvatarPic} className="w-10 rounded-full ml-8" alt="Avatar" />
                <div className="flex flex-col pl-8 justify-center">
                    <h2 className="font-bold">{item.username}</h2>
                    <h3 className="font-medium">{`${messages[item.id]?.sender_id == userID? "You" : item.username}`}: {truncateMessage(latestMessage)} {formattedTime}</h3>
                </div>
            </div>
        );
    });

    return (
        <div className="overflow-y-scroll h-5/6 no-scrollbar">
            {chatname}
        </div>
    );
};

export default ChatNames;