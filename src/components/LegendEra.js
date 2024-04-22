import { albumTracks } from "../app/data/current_data/album_tracks";
import { allTracks } from "../app/data/current_data/all_tracks";
// import { allTracks } from "../app/data/current_data/all_tracks_update";
import { removeTV } from "../app/utilities/removeTaylorsVersion";


const LegendEra = ({ era }) => {

    const filteredAlbums = [];
    albumTracks.forEach(item => {
        if (item.album && item.album.era === era) {
            // If the era matches, copy the album to the filtered array
            filteredAlbums.push(item);
        }
    });




    // GET THE ERAS TRACKS
    const eraTracks = [];
    allTracks.forEach(item => {
        if (item.era && item.era === era) {
            // If the era matches, copy the album to the filtered array
            eraTracks.push(item);
        }
    });


    // SPLIT TRACKS INTO CATEGORIES

    const albumEraTracks = [];
    eraTracks.forEach(track => {
        if (track.trackVariant && track.trackVariant === 'album') {
            albumEraTracks.push(track);
        }
    });

    const extendedEraTracks = [];
    eraTracks.forEach(track => {
        if (track.trackVariant && track.trackVariant === 'extended' ) {
            extendedEraTracks.push(track);
        }
    });

    const remainingTracks = eraTracks.filter(track => 
        !albumEraTracks.some(albumTrack => albumTrack.id === track.id) &&
        !extendedEraTracks.some(extendedTrack => extendedTrack.id === track.id)
      );

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
                eraName = ' The Tortured Poets Department';
                break;
            // ADD NEW ALBUM AS AN WHEN NEEDED
            default:
                eraName = era
        }
    }


    const textColor = 'color-' + era;
    const backgroundColor = 'background-color-' + era;
    const subCats = ['-album', '-extended', '-single'];


    const albumColor = '$' + era;

    const textAlbumColor = 'color-' + era + '-album';
    const textExtendedColor = 'color-' + era + '-extended';
    const textSingleColor = 'color-' + era + '-single';


    const backgroundAlbumColor = 'background-color-' + era + '-album';
    const backgroundExtendedColor = 'background-color-' + era + '-extended';
    const backgroundSingleColor = 'background-color-' + era + '-single';



    const borderRightAlbum = 'border-right-' + era + '-album';
    const borderRightExtended = 'border-right-' + era + '-extended';
    const borderRightSingle = 'border-right-' + era + '-single';


    const otherColor = 'color-' + era + '-single';



    return (
        <>
            <div className="era-legend-container">
                <div className="era-legend-contents">
                    <p className={` era-legend-title ${textColor}`}>
                        {eraName}
                    </p>

                    {albumEraTracks.length > 1 ? (
                        <>
                            <div className="legend-era-section">
                                <div className={`legend-era-bracket ${borderRightAlbum}`}>
                                    {albumEraTracks.map((track, index) => (
                                        <div key={index} className={`legend-era-track  ${backgroundAlbumColor} `}>
                                            <p>{track.track_number} - </p>
                                            <p>{removeTV(track.name)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className={` legend-era-section-name ${textAlbumColor}`}>album</p>
                                </div>
                            </div>
                        </>
                    ) : (<></>)}

                    {extendedEraTracks.length > 0 ? (
                        <>
                            <div className="legend-era-section">
                                <div className={`legend-era-bracket ${borderRightExtended}`}>
                                    {extendedEraTracks.map((track, index) => (
                                        <div key={index} className={` legend-era-track ${backgroundExtendedColor}`}>
                                            <p>{track.track_number} - </p>
                                            <p>{removeTV(track.name)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className={` legend-era-section-name ${textExtendedColor}`}>extended</p>
                                </div>
                            </div>
                        </>
                    ) : (<></>)}

                    {remainingTracks.length > 0 ? (
                        <>
                            <div className="legend-era-section">
                                <div className={`legend-era-bracket ${borderRightSingle}`}>
                                    {remainingTracks.map((track, index) => (
                                        <div key={index} className={` legend-era-track ${backgroundSingleColor}`}>
                                            <p>{removeTV(track.name)}</p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className={` legend-era-section-name ${textSingleColor}`}>more</p>
                                </div>
                            </div>
                        </>
                    ) : (<></>)}

                </div>
            </div>
        </>
    )
}

export default LegendEra;