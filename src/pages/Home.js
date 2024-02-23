import React from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";

const Home = () => {




  return (
    <>
    <div className="horizontal-chronology">
    <Condensed tracks={allTracks} />
    </div>
      <VerticalChronology />
    </>
  );
};


export default Home;
