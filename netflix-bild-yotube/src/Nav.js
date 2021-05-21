import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import "./Nav.css"

function Nav() {
    const history = useHistory();
    const [show,handleShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }
        else{
            handleShow(false)
        }

    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener("scroll",transitionNavBar)
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
        <div className= "nav__contents">
        <img   onClick={()=> history.push("/")} className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>
        <img  onClick={()=> history.push("/profile")} className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
        </div>
        </div>
    )
}

export default Nav
