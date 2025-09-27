import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About"
import {Route,Routes} from "react-router-dom";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Menu from "./Components/Menu";
import Navbar from "./Components/MyNavBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App()
{
  return(
    <div>
      <Navbar/>
      <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/About"  element={<About/>}/>
          <Route path="/Gallery"  element={<Gallery/>}/>
          <Route path="/Menu"  element={<Menu/>}/>
      </Routes>
      <Contact/>
      <br></br>
      <Footer/>
    </div>
  )
}
export default App;
