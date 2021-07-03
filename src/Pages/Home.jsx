import React from "react";
import SliderComponent from "../Components/SliderComponent/SliderComponent";
import ListMovies from "../Components/VootMovies/ListMovies";
import "../Components/VootMovies/Movies.css";
const Home = () => {
  return (
    <div>
      <SliderComponent />
      <ListMovies />
    </div>
  );
};

export default Home;
