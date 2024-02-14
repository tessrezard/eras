import React from 'react';
import '../styles/CSS/main.css';

const Loading = () => {

    return (
        <>
            <div className='loading-page-container'>
                <div className="loading-container">
                    <div className="loading-text">
                        Loading
                    </div>
                    <div className="loading-dots-container">
                        <div className="dot-one"></div>
                        <div className="dot-two"></div>
                        <div className="dot-three"></div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default Loading;