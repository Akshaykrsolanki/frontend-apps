import Trip from "./Trip";
import "./TripStyles.css";
import { Link } from "react-router-dom";
function TripData(props) {
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p className="ruppee">{props.price}</p>

            
            <>
            <Link to="/know">
            <button>Know More</button>
            </Link>
            </>
        
        </div>
    );

}

export default TripData;







