import React from "react";
import '../styles/CSS/main.css';
import { albumsTracksArr } from "../app/data/albums-tracks";
import Chronology from "../components/Chronology";
import VerticalChronology from "../components/VerticalChronology";

const Home = () => {




  return (
    <>
    <div className="horizontal-chronology">
    <Chronology />
    </div>
      <VerticalChronology />
    </>
  );
};


export default Home;
