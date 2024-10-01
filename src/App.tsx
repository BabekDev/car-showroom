import "./App.scss";
import CarCard from "./components/UI/cards/CarCard/CarCard";
import Search from "./components/UI/search/search-bar/Search";
import Filter from "./components/UI/filter/filter-bar/Filter";
import AddCarCard from "./components/UI/add-cards/add-cads-cars/AddCarCard";
import { CarData } from "./data/car.data";
import { useMemo, useState } from "react";
import { CarType } from "./types/car.type";
import { Button } from "@mui/material";

const newCar: CarType = {
  mark: "Lanos",
  model: "Test",
  color: "Purpure",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s",
  price: 20000,
};

function App() {
  const [cars, setCars] = useState<CarType[]>(CarData);
  // const filter = useMemo(() => cars.filter((car) => car.price > 5000), []);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const createNewCar = (): void => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const filteredCars = cars.filter(
    (car) =>
      car.mark.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.price.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.color.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className="header">
        <Search searchName={searchQuery} onSearch={setSearchQuery} />

        <Filter
          filterMark="Opel"
          filterModel="Astra"
          filterColor="Black"
        ></Filter>
        {/* <AddCarCard /> */}

        <Button onClick={createNewCar}>Create New Car</Button>
        <div className="fillter_block"></div>
      </div>

      <div className="cars_block">
        {filteredCars.map((car, index) => (
          <CarCard
            key={index}
            mark={car.mark}
            url={car.url}
            model={car.model}
            color={car.color}
            price={car.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
