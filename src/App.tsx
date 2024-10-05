import "./App.scss";
import CarCard from "./components/UI/cards/CarCard/CarCard";
import Search from "./components/UI/search/search-bar/Search";
import Filter from "./components/UI/filter/filter-bar/Filter";
import { CarData } from "./data/car.data";
import { useState, useEffect } from "react";
import { CarType } from "./types/car.type";
import { Button } from "@mui/material";
import { Modal } from "./components/Modal/modal";
import { CarApiResponse } from "./types/carAPI.type";

const newCar: CarType = {
  mark: "Lanos",
  model: "Test",
  color: "Purpure",
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTML44irshOz46FmYn6BD0QVkOaChRca5YAkA&s",
  price: 20000,
};

const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Purple", "Gray"];

function App() {
  const [cars, setCars] = useState<CarType[]>(CarData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterMark, setFilterMark] = useState<string | null>(null);
  const [filterModel, setFilterModel] = useState<string | null>(null);
  const [filterColor, setFilterColor] = useState<string | null>(null);
  const [modalActive, setModalActive] = useState(false);
  const [apiCars, setApiCars] = useState<CarApiResponse[]>([]);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 16;

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://cars-base.ru/api/cars?full=1");
        const data: CarApiResponse[] = await response.json();
        setApiCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCars();
  }, []);

  const createNewCar = (): void => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const allCars = [
    ...cars,
    ...apiCars.map((car) => ({
      mark: car.name,
      model: car.models[0]?.name || "Unknown",
      color: colors[Math.floor(Math.random() * colors.length)],
      url: "https://img.freepik.com/premium-vector/car-black-icon-city-road-auto-symbol_53562-19694.jpg",
      price: Math.floor(Math.random() * (40000 - 1000 + 1)) + 1000,
    })),
  ];

  const filteredCars = allCars.filter((car) => {
    const matchMark = filterMark ? car.mark === filterMark : true;
    const matchModel = filterModel ? car.model === filterModel : true;
    const matchColor = filterColor ? car.color === filterColor : true;
    const matchSearch =
      car.mark.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      car.price.toString().startsWith(searchQuery.toLowerCase()) ||
      car.color.toLowerCase().startsWith(searchQuery.toLowerCase());

    return matchMark && matchModel && matchColor && matchSearch;
  });

  const resetFilters = () => {
    setFilterMark(null);
    setFilterModel(null);
    setFilterColor(null);
  };

  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
  const displayedCars = filteredCars.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="App">
      <div className="header_content_block">
        <div className={"left_block"}>
          <Search searchName={searchQuery} onSearch={setSearchQuery} />
        </div>
        <div className={"right_block"}>
          <div className={"filter_block"}>
            <Filter
              filterMark={filterMark}
              setFilterMark={setFilterMark}
              filterModel={filterModel}
              setFilterModel={setFilterModel}
              filterColor={filterColor}
              setFilterColor={setFilterColor}
            />
          </div>
          <Modal active={modalActive} setActive={setModalActive} />
          <div className={"setting_block"}>
            <div className={"reset_btn_block"}>
              <Button onClick={resetFilters} className={"reset_btn"}>
                Reset
              </Button>
            </div>
            <div className={"create_btn_block"}>
              <Button onClick={() => setModalActive(true)} className={"add_btn"}>
                Add Your Car
              </Button>
              <Button onClick={createNewCar} className={"create_btn"}>
                Create New Car
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="cars_block">
        {displayedCars.map((car, index) => (
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

      <div className="navigation">
        {currentPage > 1 && (
          <Button onClick={() => setCurrentPage(1)} className="page_btn">First</Button>
        )}
        {currentPage > 1 && (
          <Button onClick={() => setCurrentPage(currentPage - 1)} className="page_btn">
            {currentPage - 1}
          </Button>
        )}
        <Button variant="contained" className="page_btn">{currentPage}</Button>
        {currentPage < totalPages && (
          <Button onClick={() => setCurrentPage(currentPage + 1)} className="page_btn">
            {currentPage + 1}
          </Button>
        )}
        {currentPage < totalPages && (
          <Button onClick={() => setCurrentPage(totalPages)} className="page_btn">Last</Button>
        )}
      </div>
        
      <div>
        <span className="total_pages">Total Pages: {totalPages}</span>
      </div>
    </div>
  );
}

export default App;
