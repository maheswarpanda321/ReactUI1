import { LOGO_URL } from "../utils/constant";
const Header=()=>{
    let btnName="Login"
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
                   <button className="login-btn"  onClick={()=>{btnName="Logout";
                    console.log(btnName)
                   }}>{btnName}</button>

                   

  


                </ul>

            </div>
        </div>
    )
};
export default Header;
