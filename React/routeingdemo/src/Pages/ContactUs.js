import { Link } from "react-router-dom";

function ContactUs(){
    return (
        <>
            <nav>
            <Link to="/">Home</Link> |
            <Link to="/aboutus">About Us</Link> | 
            <Link to="/speakwithme">Contact Us</Link>        
        </nav>
            <h1>Conatct Us</h1>
            <div>This page has a form so you can contact us...</div>
        </>
    );
}

export default ContactUs;