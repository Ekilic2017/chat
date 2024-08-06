import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem
("token"));
const [room,setRoom]=useState(null)
  if(!isAuth){
   return <LoginPage setIsAuth={setIsAuth}/>
  }
  return (
<div className="container">
  {room ? (
    //oda seçildiyse sohbet sayfası
    <ChatPage room={room} setRoom={setRoom}/>
  ): (
    //oda seçilmediyse oda sayfası
  <RoomPage setRoom={setRoom} setIsAuth={setIsAuth}/> 
  )}
  
</div>
  )
}

export default App
