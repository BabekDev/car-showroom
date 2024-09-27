import { Children } from "react";
import "./App.scss";
import CarCard from "./components/UI/cards/CarCard/CarCard";
import Search from "./components/UI/search/search-bar/Search";
import Filter from "./components/UI/filter/filter-bar/Filter";
import AddCarCard from "./components/UI/add-cards/add-cads-cars/AddCarCard";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Search searchName={null}></Search>
        <Filter
          filterMark="Opel"
          filterModel="Astra"
          filterColor="Black"
        ></Filter>
        <AddCarCard />
        <div className="fillter_block"></div>
      </div>

      <div className="cars_block">
      <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        <CarCard
          mark={"Opel"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s"
          }
          model={"Astra"}
          color={"Black"}
        ></CarCard>
        
      </div>
    </div>
  );
}

export default App;
