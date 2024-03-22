import "./Package1Styles.css";
import Package1Data from "./Package1Data"

function Package1 () {
    return (
        <div className="package1">
            <h1>Packages in Details.</h1>

            <div className="package1card">
                <Package1Data
                image={"https://images.unsplash.com/photo-1569996980833-901b5cd2eb70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
                heading = "Trip to Coorg" 
                price = "₹3999"
                />

            </div>
        </div>
    )
}
export default Package1;