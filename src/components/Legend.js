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
        'carolina',
        'renegade',
        'christmas',
    ];

    const reversedEras = [...erasList].reverse();

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
    const backgroundColor = 'background-color-' + era;
    const subCats = ['-album', '-extended', '-single'];

    const textAlbumColor = 'color-' + era + '-album';
    const backgroundAlbumColor = 'background-color-' + era + '-album';

    const extendedColor = 'color-' + era + '-extended';
    const otherColor = 'color-' + era + '-single';

    let albumName = era
    if (era) {
        switch (era) {
            case 'taylorSwift':
                albumName = 'Taylor Swift';
                break;
            case 'fearless':
                albumName = 'Fearless';
                break;
            case 'speakNow':
                albumName = 'Speak Now';
                break;
            case 'red':
                albumName = 'Red';
                break;
            case 'nineteenEightyNine':
                albumName = '1989';
                break;
            case 'reputation':
                albumName = 'reputation';
                break;
            case 'lover':
                albumName = 'Lover';
                break;
            case 'folklore':
                albumName = 'folklore';
                break;
            case 'evermore':
                albumName = 'evermore';
                break;
            case 'midnights':
                albumName = 'Midnights';
                break;
            case 'theTorturedPoetsDepartment':
                albumName = 'Tortured Poets';
                break;
            // ADD NEW ALBUM AS AN WHEN NEEDED
            default:
                albumName = era
        }




        return (
            <>
                <div className="legend-item-container">
                    <div className="legend-item-header">
                        <div className={`legend-box ${backgroundAlbumColor}`} />
                        <div className={`legend-text-container ${textAlbumColor}`}>
                            <p className={`legend-text ${textAlbumColor}`}>{albumName}</p>
                        </div>
                    </div>
                    <div className="legend-sub-colors-container">
                        {subCats.map(cat => (
                            <div className="legend-sub-cat-container">
                                <div className={`legend-sub-cat-box ${backgroundColor + cat}`}/>
                                <p>{cat}</p>
                            </div>
                        ))}

                    </div>

                </div>


            </>
        )
    }

}