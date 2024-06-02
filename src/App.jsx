import styles from "./style";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import ToDo from "./component/ToDo";
import Skill from "./component/Skill";
import Project from "./component/Project";
import About from "./component/About";
import Footer from "./component/Footer";

const App = () => (
  <div >
    <div  className="">
      <div className="">
        <NavBar />

      </div>
       
        <Hero />
    </div>

    <ToDo />
    <Skill />
    <Project />
    <About />
    <Footer />

  </div>
);

export default App;