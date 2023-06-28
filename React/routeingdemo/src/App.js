import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/aboutus">About Us</Link> | 
        <Link to="/speakwithme">Contact Us</Link>        
      </nav>
      <hr />
      <h1>Home page</h1>
      <div>
        Welcome to our site, this is the homepage.
      </div>
    </>
  );
}

export default App;
