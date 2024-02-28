import React, { useState } from "react";
import '../styles/CSS/main.css';


const LegendIcon = () => {

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

            <div className="legend-icon-container">
            {erasList.map((era, index) => (
                        <LegendItemIcon
                            era={era}
                            key={index}
                        />
                    ))}
            </div>
        </>
    );
};

export default LegendIcon;

const  LegendItemIcon = ({ era }) => {

    const textColor = 'color-' + era ;
    const backgroundColor = 'background-color-' + era ;


    return (
        <>
            <div className="legend-icon-item-container">
                <div className={`legend-icon-box ${backgroundColor}`} />
                <div className={`legend-icon-text-container ${textColor}`}>
                </div>
            </div>
            

        </>
    )
}