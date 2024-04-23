import { useRef, useState } from "react"


export default function InputText({addNewMessage}) {

    const [message,setMessage] = useState("")
    const inputRef = useRef(null) 

    const AddMessage = () => {

       message && addNewMessage({
            message
        })

        setMessage("")
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    return (
       
        <div  className="inputText">
            <textarea 
                ref={inputRef}
                rows="6"
                placeholder="Votre message ..."
                onChange={e => setMessage(e.target.value)}
            >
            </textarea>
            <button onClick={() => AddMessage()} > 
                {">>"}
            </button>
        </div>
                
          
    )
} 