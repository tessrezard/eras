import React, { useEffect, useState } from "react";
import LegendEra from "./LegendEra";
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
    
    const [seeEra, setSeeEra] = useState(false);
    const [ whichEra, setWhichEra] = useState('midnights');

    const handleEraClick = (era) => {
        setSeeEra(prev => !prev);
        setWhichEra(era);
       }

       useEffect(() => {       console.log(seeEra, whichEra);
       }, [whichEra])
    return (
        <>
            <div className="legend-container">
                {erasList.map((era, index) => (
                    <LegendItem
                        era={era}
                        key={index}
                        onEraClick={() => handleEraClick(era)}
                    />
                ))}
            </div>
            <LegendEra era={whichEra}/>


        </>
    );
};


export default Legend;



const LegendItem = ({ era, onEraClick }) => {
    
    const textColor = 'color-' + era ;
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


