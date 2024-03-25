import styles from "./style";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import ToDo from "./component/ToDo";

const App = () => (
  <div >
    <div className="lg:m-10 m-3 ">
        <NavBar />
        <Hero />
    </div>

    <ToDo />

  </div>
);

export default App;