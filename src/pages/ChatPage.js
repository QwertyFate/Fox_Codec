import React, {useState} from "react";
import SideChat from "../components/SideChat";
import MainChat from "../components/mainChat";
import axios from "axios";

const ChatPage = () => {


    const [friendid, setFriendid] = useState("");
    const getFriendID = (friendID) => {
        setFriendid(friendID);
    }
    return(
        <div className="w-full flex flex-row h-dvh">
            <SideChat handleFriend={getFriendID}  />
            <MainChat friendData={friendid}/>
        </div>
    )
}

export default ChatPage;