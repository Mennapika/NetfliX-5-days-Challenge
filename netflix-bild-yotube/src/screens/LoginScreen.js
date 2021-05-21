import React,{useState} from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'
const LoginScreen = () => {
    const [signin,setSignin]=useState(false);
    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
             <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="loginScreen__logo"/>
             <button onClick={()=>setSignin(true)} className="loginScreen__button">Sign In</button>
             <div className="loginScreen__gradient"></div>
             <div className="loginScreen__body">
             {signin?(<SignUpScreen/>):(<>
                <h1> Ultimate Films , TV Programmes 
                     more.</h1>
                     <h2>Watch anywhere, Cancel at anytime</h2>
                     <h3>Ready to watch ? Enter your mail to create or restart your ownership</h3>
                 <div className="loginScreen__input">
                 <form>
                 <input type="email" placeholder="Email Address"></input>
                 <button  onClick={()=>setSignin(true)} className="loginScreen__getStarted"> Get Started </button>
                 </form>
                 </div>
                     </>
                     )}
              
             

             </div>
            </div>
        </div>
    )
}

export default LoginScreen
