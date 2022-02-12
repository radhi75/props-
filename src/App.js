import "./App.css";
import Feature from "./Components/Feature/Feature";
import Footer from "./Components/Footer/Footer";
import List from "./Components/list/List";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Feature />
      <List />
      <Footer />
    </div>
  );
}

export default App;
