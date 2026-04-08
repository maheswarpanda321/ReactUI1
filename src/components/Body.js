import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockdata";

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rescontainer">
               {
                resList.map((restaurant)=>(
                <Restaurantcard key={restaurant.info.id} resData={restaurant}/>))
               }
            </div>
        </div>
    )
}
export default Body;