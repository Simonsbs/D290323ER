import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ListProvider } from "./contexts/ListContext";
import CardList from "./components/CardList";

function App() {
  return (
    <ThemeProvider>
      <ListProvider>
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row">
            <CardList />
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
      </ListProvider>
    </ThemeProvider>
  );
}

export default App;
