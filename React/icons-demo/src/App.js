import "./App.css";
import MyComponent from "./MyComponent";
import MyProfileCard from "./MyProfileCard";

function App() {
  return (
    <>
      <div className="container">
        <MyComponent />
        <hr />
        <MyProfileCard
          name="Simon Stirling"
          email="simon@simon.com"
          phone="+97212345678"
          facebook="https://facebook.com/simonsbs"
          github="https://github.com/simonsbs"
          linkedin="https://linkedin.com/simonsbs"
        />
      </div>
    </>
  );
}

export default App;
