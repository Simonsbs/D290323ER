import { Link } from "react-router-dom";

function AboutUs(){
    return (
        <>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/aboutus">About Us</Link> | 
                <Link to="/speakwithme">Contact Us</Link>        
            </nav>
            <h1>About us</h1>
            <div>
                This is a page that tells you about us
            </div>
        </>
    );
}

export default AboutUs;