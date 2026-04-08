import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockdata";

const Body=()=>{
    let ListofRestaurant=[
        {
        
        
                    "info": {
                      "id": "196967",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4765a934-db3f-49ad-8242-8417952e0a3a_196967.JPG",
                     
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 3.5,
                      
                    
                     
                    }
                },
                {
                    
                    "info": {
                      "id": "196367",
                      "name": "Domino",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/4765a934-db3f-49ad-8242-8417952e0a3a_196967.JPG",
                     
                      "costForTwo": "₹450 for two",
                      "cuisines": [
                        "Burgers",
                        "Fast Food",
                        "Rolls & Wraps"
                      ],
                      "avgRating": 4.5,
                      
                    
                     
                    }
                }
                    ]
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                   ListofRestaurant=ListofRestaurant.filter((res)=>res.info.avgRating>4)
                    console.log(ListofRestaurant)
                    }
                    }> Top Rates Restaurant</button>
            </div>
            <div className="rescontainer">
               {
                ListofRestaurant.map((restaurant)=>(
                <Restaurantcard key={restaurant.info.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
}
export default Body;