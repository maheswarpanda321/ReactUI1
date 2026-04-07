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

const Restaurantcard=(props)=>{
    const {resData}=props
    
   
    return (
        
        <div className="res-card">
           
            <img className="reslogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData. cloudinaryImageId}/>
             <h3>{resData.name}</h3>
             <h4>{resData.cuisines.join(",")}</h4>
             <h4>{resData.avgRating} minutes</h4>
             <h4>{resData.id}</h4>
             <h4>{resData.costForTwo}</h4>

        </div>
    )
}
const resObj={
   
                      id: "196967",
                      name: "KFC",
                      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4765a934-db3f-49ad-8242-8417952e0a3a_196967.JPG",
                      locality: "Bapuji Nagar",
                      areaName: "Bapuji Nagar",
                      costForTwo: "₹450 for two",
                      cuisines: [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      avgRating: 4.5,
                      parentId: "547",
                      avgRatingString: "4.5",
                      totalRatingsString: "10K+"

    }

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rescontainer">
                <Restaurantcard resData={resObj}/>
                
                  
                  
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