import "./FooterStyles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>BharatVarsa</h1>
                    <p>Choose Your Favourite Destination.</p>
                </div>
                <div>
                    <a href="/">
                        </a>
                </div>
                
            </div>
            
            <div className="bottom">
                <div>
                    <h4>Packages</h4>
                    <a href="/">Coorg</a>
                    <a href="/">Kashmir</a>
                    <a href="/">Rishikesh</a>
                    <a href="/">Uttrakhand</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="/">Facebook</a>
                    <a href="/">Whatsapp</a>
                    <a href="/">Instagram</a>
                    <a href="/">Twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Message Us</a>
                    <a href="/">Contact Us</a>
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                    <a href="/">About Us</a>
            
                </div>

            </div> 
        </div>
    );
};

export default Footer;