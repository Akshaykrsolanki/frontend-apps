import "./ContactFormStyles.css"
import {BsInstagram} from  "react-icons/bs"
import {BsWhatsapp} from  "react-icons/bs"
import {BsFacebook} from  "react-icons/bs"
import {BsTwitter} from  "react-icons/bs"
import {BsLinkedin} from  "react-icons/bs"

function ContactForm() {
    return(<>
        <div className="form-container">
            <h1>Connect to us !</h1>
            <form>
                <input type="text" placeholder="First Name:"/>
                <input type="text" placeholder="Last Name:"/>
                <input placeholder="Contact Details:"/>
                <textarea placeholder="Message Us..............." rows="4"></textarea>
                <button>Send Message</button>
            </form>
            <div className="social">
                <div>
                    <a style={{fontSize:"35px", color: "#3B5998"}} href="https://www.facebook.com/akshaykrsolanki29@gmail.com"><BsFacebook/></a>

                    <a style={{fontSize:"35px", color: "#25D366"}} href="https://api.whatsapp.com/send?phone=8873189950"><BsWhatsapp/></a>

                    <a style={{fontSize:"35px", color: "rgb(214, 41, 118)"}} href="https://www.instagram.com/akshaykrsolanki/"><BsInstagram/></a>

                    <a style={{fontSize:"35px", color: "#00ACEE"}} href="https://twitter.com/@akshaykrsolanki"><BsTwitter/></a>

                    <a style={{fontSize:"35px", color: "#0072B1"}} href="https://www.linkedin.com/in/Akshay Kumar"><BsLinkedin/></a>
                </div>
        </div>
        </div>

          </>
    )
}

export default ContactForm;

