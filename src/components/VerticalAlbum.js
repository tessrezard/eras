import React, { useState } from "react";
import '../styles/CSS/main.css';
import VerticalTrack from "./VerticalTrack";


const VerticalAlbum = ({ album, index }) => {

    const albumName = album.album.name
    const albumColor = 'color-' + albumName;

    // console.log('----------------------------------------')
    // console.log('ALBUM: --------')
    // console.log(album.album.name)


    // try {
    //     album.tracks.map((track, index) => {
    //         console.log('-----------')
    //         console.log(albumName)
    //         console.log(track.name, index);
        
    //     }
    //         )
    //     }catch(error){
    //         console.log(error)
    // }



    return (
        <>
            <div className="vertical-album-container" >
                <div className="vertical-album-title-container " >
                    <p className={`vertical-album-title ${albumColor}`}>{albumName}</p>
                </div>
                
                {/* JUST USING FOR TESTING */}
                <p className={` ${albumColor}`}>{albumName}, {album.album.album_type}</p>


                <div className="vertical-album-tracks">
                    {album.tracks.map((track, index) => (
                        <VerticalTrack
                            type='eraOrder'
                            track={track}
                            key={index}
                            
                        />
                    ))}
                </div>
                
            </div>

        </>
    );
};


export default VerticalAlbum;
