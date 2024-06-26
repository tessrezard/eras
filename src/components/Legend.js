import React, { useEffect, useState } from "react";
import LegendEra from "./LegendEra";
import { erasList } from "../app/utilities/globalVariables";
import '../styles/CSS/main.css';


const Legend = ({ setActiveLegend }) => {

    // const erasList = [
    //     'theTorturedPoetsDepartment',
    //     'midnights',
    //     'evermore',
    //     'folklore',
    //     'lover',
    //     'reputation',
    //     'nineteenEightyNine',
    //     'red',
    //     'speakNow',
    //     'fearless',
    //     'taylorSwift',
    //     'carolina',
    //     'renegade',
    //     'christmas',
    // ];

    const reversedEras = [...erasList].reverse();

    const [seeEra, setSeeEra] = useState(false);
    const [whichEra, setWhichEra] = useState('theTorturedPoetsDepartment');

    const handleEraClick = (era) => {
        setSeeEra(prev => !prev);
        setWhichEra(era);
    }

    const handleLegendClick = () => {
        setActiveLegend(prev => !prev);
    }


    return (
        <>
            <div className="legend-and-era-legend-container">

                <div className="legend-container">
                    {erasList.map((era, index) => (
                        <LegendItem
                            era={era}
                            key={index}
                            onEraClick={() => handleEraClick(era)}
                        />
                    ))}
                </div>
                <LegendEra era={whichEra} />
            </div>

            <div className="legend-overlay" onClick={() => handleLegendClick()} />


        </>
    );
};


export default Legend;



const LegendItem = ({ era, onEraClick }) => {

    const textColor = 'color-' + era;
    const backgroundColor = 'background-color-' + era;
    const subCats = ['-album', '-extended', '-single'];

    const textAlbumColor = 'color-' + era + '-album';
    const backgroundAlbumColor = 'background-color-' + era + '-album';

    const extendedColor = 'color-' + era + '-extended';
    const otherColor = 'color-' + era + '-single';

    let eraName = era
    if (era) {
        switch (era) {
            case 'taylorSwift':
                eraName = 'Taylor Swift';
                break;
            case 'fearless':
                eraName = 'Fearless';
                break;
            case 'speakNow':
                eraName = 'Speak Now';
                break;
            case 'red':
                eraName = 'Red';
                break;
            case 'nineteenEightyNine':
                eraName = '1989';
                break;
            case 'reputation':
                eraName = 'reputation';
                break;
            case 'lover':
                eraName = 'Lover';
                break;
            case 'folklore':
                eraName = 'folklore';
                break;
            case 'evermore':
                eraName = 'evermore';
                break;
            case 'midnights':
                eraName = 'Midnights';
                break;
            case 'theTorturedPoetsDepartment':
                eraName = 'Tortured Poets';
                break;
            // ADD NEW ALBUM AS AN WHEN NEEDED
            default:
                eraName = era
        }

        return (
            <>
                <div
                    className="legend-item-container"
                    onClick={onEraClick}
                >
                    <div className="legend-item-header">
                        <div className={`legend-box ${backgroundAlbumColor}`} />
                        <div className={`legend-text-container ${textAlbumColor}`}>
                            <p className={`legend-text ${textAlbumColor}`}>{eraName}</p>
                        </div>
                    </div>
                    <div className="legend-sub-colors-container">
                        {subCats.map((cat, index) => {
                            let variantName;
                            switch (cat) {
                                case '-single':
                                    variantName = '- more';
                                    break;
                                case '-album':
                                    variantName = '- album';
                                    break;
                                case '-extended':
                                    variantName = '- extended';
                                    break;
                                default:
                                    variantName = cat;
                            }

                            return (
                                <div key={index} className="legend-sub-cat-container">
                                    <div className={`legend-sub-cat-box ${backgroundColor + cat}`} />
                                    <p>{variantName}</p>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>

            </>
        )
    }

}


