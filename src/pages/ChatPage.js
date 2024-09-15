import React, {useState} from "react";
import SideChat from "../components/SideChat";
import MainChat from "../components/mainChat";
import axios from "axios";

const ChatPage = () => {


    const [friendid, setFriendid] = useState({});
    const getFriendID = async (friendID) => {
        setFriendid(friendID);
    }

    
    
    return(
        <div className="w-full flex flex-row h-dvh">
            <SideChat handleFriend={getFriendID}  />
            {friendid ? <MainChat friendData={friendid} /> : <div>Loading...</div>}
        </div>
    )
}

export default ChatPage;