import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockdata";

const Body=()=>{
    const ListofRestaurant=[

    ]
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{console.log("Button Is Clicked")}}> Top Rates Restaurant</button>
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