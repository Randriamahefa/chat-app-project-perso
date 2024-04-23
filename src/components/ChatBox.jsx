
export default function ChatBox({message,user,avatar,type}) {
    return (
        <div  className={`chatBox ${type}`} >
            <img src={avatar} alt="avatar" />
            <p>
                <strong>
                    {user}
                </strong> <br />
                {message}
            </p>    
        </div>
    )
}