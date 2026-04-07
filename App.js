import React from "react";
import ReactDom from "react-dom/client"

const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img src="https://img.freepik.com/premium-vector/food-pin-app-icon-restaurant-location-logo-illustration_709422-33.jpg?semt=ais_incoming&w=740&q=80"/>

            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About Us</li>
                   <li>Contact</li>
                   <li>Cart</li>

                   

  


                </ul>

            </div>
        </div>
    )
}

const Restaurantcard=({resName,cuisines})=>{
// console.log(props)
    return (
        
        <div className="res-card">
           
            <img className="reslogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4765a934-db3f-49ad-8242-8417952e0a3a_196967.JPG"/>
             <h3>{resName}</h3>
             <h4>{cuisines}</h4>
             <h4>4.4 stars</h4>
             <h4>38 minutes</h4>

        </div>
    )
}
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rescontainer">
                <Restaurantcard resName="Meghna Food" cuisines="Biryani,North India,Asian"/>
                <Restaurantcard resName=""KFC cuisines="Burger,Fast Food"/>
                  
                  
            </div>
        </div>
    )
}
const Applayout=()=>{
    return (
        <div className="app">
           
            <Header/>
            <Body/>
          
        </div>
    )
}
const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout/>)