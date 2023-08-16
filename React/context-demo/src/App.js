import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <h1>My App</h1>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
