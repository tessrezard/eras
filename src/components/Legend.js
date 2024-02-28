import React, { useState } from "react";
import '../styles/CSS/main.css';


const Legend = () => {

    const erasList = [
        'theTorturedPoetsDepartment',
        'midnights',
        'evermore',
        'folklore',
        'lover',
        'reputation',
        'nineteenEightyNine',
        'red',
        'speakNow',
        'fearless',
        'taylorSwift',
        // 'carolina',
        // 'renegade',
        // 'christmas',
      ];

  const reversedEras = erasList.reverse();

    return (
        <>
            <div className="legend-container">
            {erasList.map((era, index) => (
                        <LegendItem
                            era={era}
                            key={index}
                        />
                    ))}
            </div>
            

        </>
    );
};


export default Legend;



const LegendItem = ({ era }) => {

    const textColor = 'color-' + era ;
    const backgroundColor = 'background-color-' + era ;


    return (
        <>
            <div className="legend-item-container">
                <div className={`legend-box ${backgroundColor}`} />
                <div className={`legend-text-container ${textColor}`}>
                <p className={`legend-text ${textColor}`}>{era}</p>
                </div>
            </div>
            

        </>
    )
}


