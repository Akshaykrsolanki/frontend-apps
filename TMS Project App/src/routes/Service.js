import Trip from "../components/Trip"
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


function Service () {
    return(
    <>
     <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="We Serve With Smile :)"
        btnClass="hide"
        />
        
        <Trip/>

    </>
    )
}

export default Service;
