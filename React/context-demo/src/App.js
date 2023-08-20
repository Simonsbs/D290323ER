import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ListProvider } from "./contexts/ListContext";
import CardList from "./components/CardList";
import MainWrapper from "./components/MainWrapper";

function App() {
  return (
    <ThemeProvider>
      <ListProvider>
        <MainWrapper>
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
        </MainWrapper>
      </ListProvider>
    </ThemeProvider>
  );
}

export default App;
