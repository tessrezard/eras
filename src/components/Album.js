import React , {useState} from "react";
import '../styles/CSS/main.css';
import Track from "./Track";
import TrackTitle from "./TrackTitle";


const Album = ({ album, albumHover, setAlbumHover }) => {

    const [ trackHover, setTrackHover ] = useState(false);

    const handleMouseEnter = () => {
        setAlbumHover(true);
      };
    
      const handleMouseLeave = () => {
        setAlbumHover(false);
      };


    const albumTitle = Object.keys(album)[0];
    const tracks = Object.values(album)[0];

    const albumColor = 'color-' + albumTitle;
    
    

    return (
        <>
            <div 
                className="album-container" 
                onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <div className="album-tracks">
                    {tracks.map((track, index) => (
                        <Track 
                            track={track} 
                            key={index} 
                            albumTitle={albumTitle} 
                            trackHover={trackHover}
                            setTrackHover={setTrackHover}
                        />
                    ))}
                </div>
                <div className="album-tracks-titles">
                    {tracks.map((track, index) => (
                        <TrackTitle 
                            track={track} 
                            key={index} 
                            albumTitle={albumTitle} 
                            trackHover={trackHover}
                        />
                    ))}
                </div>
            </div>

        </>
    );
};


export default Album;
