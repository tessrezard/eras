import React, { useState } from "react";
import '../styles/CSS/main.css';
import Condensed from "../components/Condensed";
import VerticalChronology from "../components/VerticalChronology";
import { allTracks } from "../app/data/current_data/all_tracks";
import Quiz from "../components/Quiz";
import { reverseEraOrder } from "../app/utilities/reverseEraOrder";
import { filterTracks } from "../app/utilities/filterTracks";
import { useDispatch, useSelector } from 'react-redux';
import Legend from "../components/Legend";

const NotesPage = () => {

  const reverseTracks = reverseEraOrder(allTracks);
  const filters = ["remix", "live", "acoustic"];
  const filtered = filterTracks(reverseTracks, filters);


  return (  
    <>
    <h1>Notes    </h1>
    <h2> On (Taylor's Version)s</h2>
    <p> If Taylors version exists, please rest assured that we mean Taylors Version</p>
    <p> for ease of reading, i have chose to refer to songs as simply their name, and have ommited (TV) as it made the text more difficult to read</p>
    <p> the data i use is aplways Taylors Version when it is available</p>
    <p>There is one exception to this : Red's Girl at home,. given that Taylors Version is quite different from the original, i have both of these. the old one is refered to as stolen Version</p>
        </>
  );
};


export default NotesPage;
