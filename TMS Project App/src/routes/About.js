import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";

function About() {
    return (
    <>
     <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="About Us...."
        />
        
        <AboutUs />
    </>
    );
}

export default About;
