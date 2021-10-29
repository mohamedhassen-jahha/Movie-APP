import { useState } from "react";
import "./App.css";
import AddMenu from "./components/AddMenu/AddMenu";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Navbar/NavBar";
import Slider from "./components/Slider/Slider";
import { Data } from "./data/movies.js";
import PopUp from "./components/PopUp/PopUp";
import FilterBar from "./components/FilterBar/FilterBar";

const data = Data.results;

function App() {
  const [isAddMovieShowing, setIsAddMovieShowing] = useState(false);
  const [Data, setData] = useState(data);
  const [PopsUp, setPopUp] = useState(false);
  const [PopsUpValue, setPopUpValue] = useState("Woohoo, You've added a movie");
  const [searchByName, setSearchByName] = useState("");
  const [searchByRate, setSearchByRate] = useState(10);

  const addMovie = (myMovie) => {
    setData([...Data, myMovie]);
  };

  return (
    <div className="App">
      <PopUp PopsUp={PopsUp} setPopUp={setPopUp} PopsUpValue={PopsUpValue} />
      <NavBar
        setIsAddMovieShowing={setIsAddMovieShowing}
        isAddMovieShowing={isAddMovieShowing}
      />
      {isAddMovieShowing ? (
        <AddMenu
          setIsAddMovieShowing={setIsAddMovieShowing}
          isAddMovieShowing={isAddMovieShowing}
          addMovie={addMovie}
          setPopUp={setPopUp}
          PopsUp={PopsUp}
          setPopUpValue={setPopUpValue}
        />
      ) : null}
      <Slider />
      <FilterBar
        setSearchByName={setSearchByName}
        setSearchByRate={setSearchByRate}
        searchByRate={searchByRate}
      />
      <h1 className="App-Title"> YOUR BEST MOVIES</h1>
      <Cards
        Data={Data}
        searchByName={searchByName}
        searchByRate={searchByRate}
      />
    </div>
  );
}

export default App;
