import Header from "./Sections/Header";
import Main from "./Sections/Main";
import Footer from "./Sections/Footer";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <div className="appWrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
