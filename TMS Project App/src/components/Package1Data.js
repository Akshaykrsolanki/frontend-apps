import "./Package1Styles.css";

function Package1Data(props) {
    return(
        <div className="p-card">
            <div className="p-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <p className="ruppee">{props.price}</p>

            </div>
    );

}

export default Package1Data;