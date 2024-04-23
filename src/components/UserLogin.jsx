import { useState } from "react"
const style ={
    img: {
        with: 50,
        height : 50,
        cursor: 'pointer',
        margin: 15,
        borderRadius: 10,
        opacity:0.7
    },  
    imgActive: {
        opacity:1,
        with: 70,
        height : 70,
        margin: 15,
        borderRadius: 10
    }
}

 function UserLogin({addUserName, addUserAvatar}) {
    const  [user, setUser] = useState("")
    const  [avatar, setAvatar] =useState("")

    const handleSetUser= () => {
        localStorage.setItem("user",user)
        addUserName(user)
        localStorage.setItem("avatar",avatar)
        addUserAvatar(avatar)

    }     
    return (
        <div className="login" >
            <h1>Se connecter</h1>
            <div className="flex profil">
                <h3>Choisir un photo de profil : </h3>
                <div className="flex">
                    <img style={(avatar === "img_avatar1.png")? style.imgActive : style.img}  src="img_avatar1.png" onClick={e => setAvatar(e.target.alt)} alt="img_avatar1.png" />
                    <img style={(avatar === "img_avatar2.png")? style.imgActive : style.img}  src="img_avatar2.png" onClick={e => setAvatar(e.target.alt)} alt="img_avatar2.png" />
                    <img style={(avatar === "img_avatar3.png")? style.imgActive : style.img}  src="img_avatar3.png" onClick={e => setAvatar(e.target.alt)} alt="img_avatar3.png" />
                    <img style={(avatar === "img_avatar4.png")? style.imgActive : style.img}  src="img_avatar4.png" onClick={e => setAvatar(e.target.alt)} alt="img_avatar4.png" />
                    <img style={(avatar === "img_avatar5.png")? style.imgActive : style.img}  src="img_avatar5.png" onClick={e => setAvatar(e.target.alt)} alt="img_avatar5.png" />
                </div>
                
            </div>
            <div className="flex">
                <input 
                    type="text" 
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    placeholder="Nom d'utilisateur"
                />
                <button
                    onClick={() => handleSetUser()}
                >
                    Se connecter
                </button>  
            </div>
            
        </div>
       
    )
}


export default UserLogin