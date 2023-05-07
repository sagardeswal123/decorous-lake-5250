import "./App.css";
import NavBar from "./Components/NavBar";
import MainRoutes from "./Pages/MainRoutes";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
