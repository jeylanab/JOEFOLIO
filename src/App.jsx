import styles from "./style";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import ToDo from "./component/ToDo";
import Skill from "./component/Skill";
import Project from "./component/Project";

const App = () => (
  <div >
    <div className="lg:m-10 m-3 ">
        <NavBar />
        <Hero />
    </div>

    <ToDo />
    <Skill />
    <Project/>

  </div>
);

export default App;