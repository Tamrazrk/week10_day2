import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./BootstrapCard.js"
import "./PlanetList"
import BootstrapCard from "./BootstrapCard.js";
import PlanetList from "./PlanetList";

function App() {
  return (
    <div className="App">
      <BootstrapCard />
      <PlanetList />
    </div>
  );
}

export default App;
