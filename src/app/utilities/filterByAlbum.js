import React from "react";
import { erasList } from '../utilities/globalVariables';

export const filterByAlbum = (tracks, filters) => {
  let filtered = [...tracks];

  // console.log('filtered', filtered);

  // if (Array.isArray(filters) && filters.every((filter) => erasList.includes(filter))) {
    filters.forEach((filter) => {
      switch (filter) {
        case "theTorturedPoetsDepartment":
        case "midnights":
        case "evermore":
        case "folklore":
        case "lover":
        case "reputation":
        case "nineteenEightyNine":
        case "red":
        case "speakNow":
        case "fearless":
        case "taylorSwift":
          filtered = filtered.filter((track) => track.era !== filter);
          break;
        case "other":
          filtered = filtered.filter((track) => track.era !== 'renegade');
          filtered = filtered.filter((track) => track.era !== 'carolina');
          filtered = filtered.filter((track) => track.era !== 'christmas');
          break; 
        default:
          break;
      }
    });
  // } else {
  //   return tracks;
  // }
  console.log('filtered', filtered)
  return filtered;

}