import {  useState } from "react";
import UserLogin from "./UserLogin";

import InputText from "./InputText";
import ChatBox from "./ChatBox";

const style={
    darkMode:{
      background:"#000413",
      color:"#fff",
    },
    lightMode:{
      backgroundColor:"#b2b2b2",
      color:"#000",
    }
  }

const ChatContainer = () => {

    const [darkMode, setDarkMode] = useState(true)
    const [chats , setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem("user"))
    const [avatar, setAvatar] = useState(localStorage.getItem("avatar"))
  
    const ChangeMode = () => {
        setDarkMode(prevMode => {return !prevMode} )
    }

    const addNewMessage = (chat) =>{
        const newChat = {...chat, user,avatar}
        setChats([...chats,newChat])

    }
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("avatar")
        setUser("")
        setAvatar("")
    }
    const ChatsList = () => {
        return (
            <div className="chatsList">
                {chats.length !== 0? 
                    chats.map((chat, index) => {
                        if(chat.user === user) return <ChatBox type="chatBoxSender" key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                            return <ChatBox type="chatBoxReceiver" key={index} message={chat.message} avatar={chat.avatar} user={chat.user} />
                }):
                   <h3>(Commencez la discussion...)</h3> 
                }
            </div> 
        )
    }

    const Header = () => {
        return(
                <header>
                    <button
                        onClick={ChangeMode}
                    >
                        Changer le thême
                    </button>
                    <h1><span>Nom d'utilisateur : </span>{user}</h1>
                    <button
                        onClick={() => logout()}
                    > 
                        Se déconnecter
                    </button>
                </header>
        )
    }
    return (
        <div className="main"  style={darkMode? style.darkMode: style.lightMode} >
            {
                (user && avatar )? 
                    <>
                        <Header />
                        <div className="chatContainer">  
                            <ChatsList />
                            <InputText addNewMessage={addNewMessage} />
                        </div>
                    </>
                : 
                    <UserLogin addUserName={setUser} addUserAvatar={setAvatar} />
            }
        </div>        

    )
}

export default ChatContainer