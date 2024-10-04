import "./App.scss";
import CarCard from "./components/UI/cards/CarCard/CarCard";
import Search from "./components/UI/search/search-bar/Search";
import Filter from "./components/UI/filter/filter-bar/Filter";
import { CarData } from "./data/car.data";
import { useState } from "react";
import { CarType } from "./types/car.type";
import { Button } from "@mui/material";
import { Modal } from "./components/Modal/modal";


const newCar: CarType = {
  mark: "Lanos",
  model: "Test",
  color: "Purpure",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s",
  price: 20000,
};


function App() {
  const [cars, setCars] = useState<CarType[]>(CarData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterMark, setFilterMark] = useState<string | null>(null);
  const [filterModel, setFilterModel] = useState<string | null>(null);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [modalActive, setModalActive] = useState(false);

  const createNewCar = (): void => {
    setCars((prevCars) => [...prevCars, newCar]);
  };


  


  const filteredCars = cars.filter((car) => {
    const matchMark = filterMark ? car.mark === filterMark: true;
    const matchModel = filterModel ? car.model === filterModel: true;
    const matchColor = filterColor ? car.color === filterColor: true;
    const matchSearch = car.mark.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.price.toString().includes(searchQuery.toLowerCase()) || 
    car.color.toLowerCase().includes(searchQuery.toLowerCase());

    return matchMark && matchModel && matchColor && matchSearch;
  })

  const resetFilters = () => {
    setFilterMark(null);
    setFilterModel(null);
    setFilterColor(null);
  }

  return (
    <div className="App">
      <div className="header">
        <Search searchName={searchQuery} onSearch={setSearchQuery} />
        <Filter
        filterMark={filterMark}
        setFilterMark={setFilterMark}
        filterModel={filterModel}
        setFilterModel={setFilterModel}
        filterColor={filterColor}
        setFilterColor={setFilterColor}></Filter>
        <Modal active={modalActive} setActive={setModalActive} />
        <Button onClick={resetFilters}>Reset</Button>
        <Button onClick={()=> setModalActive(true)}>Add Your Car</Button>
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
