import React from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";
import Quiz from "../components/Quiz";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";

const Home = () => {


  const reverseTracks = reverseEraOrder(allTracks);
  const filters = ["remix", "live", "acoustic"];
  const filtered = filterTracks(reverseTracks, filters);
  console.log('filtered', filtered);


  return (  
    <>
    <Quiz tracks={filtered}/>
    <div className="horizontal-chronology">
    <Condensed tracks={filtered} sortType='duration'/>
    </div>
      <VerticalChronology />
    </>
  );
};


export default Home;
