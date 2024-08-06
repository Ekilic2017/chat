import { useEffect, useRef } from "react";
import { auth ,db} from "../firebase"
import { addDoc ,
    collection,
    onSnapshot,
    serverTimestamp,
  query,
  where,
  orderBy,
  } from "firebase/firestore";
import { useState } from "react";
import Message from "../components/Message";
const ChatPage = ({room,setRoom}) => {
    const [messages,setMessages]=useState();
   lastMsg= useRef();
const handleSubmit=async(e)=>{
    e.preventDefault();
    //mesajın ekleneceği kolleksiyonun referansını al
    const messagesCol=collection(db,"messages");

    //kolleksiyona döküman ekle
    await addDoc(messagesCol,{
        room,
        text:e.target[0].value,
        author:{
            id:auth.currentUser.uid,
            name:auth.currentUser.displayName,
            photo:auth.currentUser.photoURL,
            
        },
        
createdAt:serverTimestamp(),
    });
    //son mesaja kaydır.
    lastMsg.current.scrollIntoView({behavior:"smooth"});
    e.target.reset();
};
//mevcut odada verileri anlık olarak almak
useEffect(()=>{
    //abone olunacak kolleksiyonun referansını al
   const messagesCol= collection(db,"messages");
    // 1 onsnapshat ile anlık olarak kolleksiyondaki izleri 
    //2 koleksiyon her degiştiğinde verdiğimiz fonsiyon ile 
   // 3 kolleksiyondaki güncel belgeleri al
      //sorgu ayarları
    const q=  query(messagesCol,where("room","==",room),orderBy
  ("createdAt","asc"));
    onSnapshot(q,(snaphot)=>{
        let tempMsg=[]
        snaphot.docs.forEach((doc)=>tempMsg.push(doc.data()))
 setMessages(tempMsg);
    });
},[])
  return (
    <div className="chat-page">
    <header>
        <p>{auth.currentUser.displayName}</p>
        <p>{room}</p>
        <button onClick={()=>setRoom(null)}>Farklı oda</button>
    </header>
    <main>
          {!messages ? (
            <p>Sohbete ilk mesajı gönderin</p>
          ) : (
            messages.map((data, i) => <Message data={data} key={i} />)
          )}
  

  <div ref={lastMsg}/>
        </main>
  
    <form onSubmit={handleSubmit}>
        <input placeholder="mesajınızı yazınız..." required type="text" />
        <button>Gönder</button>
    </form>
    </div>
  )
}

export default ChatPage