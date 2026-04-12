import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
const Header=()=>{
    let btnName="Login"
    let [btnNameReact,setbtnNameReact]=useState("Login")
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                   <li>Contact</li>
                   <li>Cart</li>
                   <button className="login-btn"  onClick={()=>{setbtnNameReact("Logout");
                    console.log(btnNameReact)
                   }}>{btnNameReact}</button>

                   

  


                </ul>

            </div>
        </div>
    )
};
export default Header;
