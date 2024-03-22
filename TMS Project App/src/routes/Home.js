import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
        <Navbar />
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MWxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Your Story."
        text="Choose Your Favourite Destination With Us...."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"

        />
        <Destination />
        <Footer/>
        </>
    )
}

export default Home;
