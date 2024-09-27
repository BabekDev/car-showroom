import "./App.scss";
import CarCard from "./components/UI/cards/CarCard/CarCard";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="search_block"></div>
        <div className="fillter_block"></div>
      </div>

      <div className="cars_block">
        <CarCard
          mark={"Reno"}
          model={"Astra"}
          color={"Black"}
          type={"test"}
        ></CarCard>
      </div>
    </div>
  );
}

export default App;
