import { signInWithPopup } from "firebase/auth"
import{auth,provider} from "../firebase"

const LoginPage = ({setIsAuth}) => {
    const handleClick=()=>{
        signInWithPopup(auth,provider)
        .then((res)=>{
            setIsAuth(true)
            localStorage.setItem("token",res.user.refreshToken)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div className='container'>
        <div className='login'>
            <h1>Chat Odası</h1>
            <p>Devam Etmek İçin Giriş Yap</p>
            <button onClick={handleClick}>
                <img src="google.png"/>
                <span>Google İle Gir</span>
            </button>
        </div>
    </div>
  )
}

export default LoginPage