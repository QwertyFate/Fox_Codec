import React, {useState} from "react";
import SideChat from "../components/SideChat";
import MainChat from "../components/mainChat";

const ChatPage = () => {

    const [friendid, setFriendid] = useState("");
    const getFriendID = (friendID) => {
        setFriendid(friendID);
        console.log(friendID)
    }
    return(
        <div className="w-full flex flex-row h-dvh">
            <SideChat handleFriend={getFriendID}  />
            <MainChat />
        </div>
    )
}

export default ChatPage;