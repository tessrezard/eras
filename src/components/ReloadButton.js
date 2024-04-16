import React from 'react';
import '../styles/CSS/main.css';

const ReloadButton = ({removeLatestFromLocalStorage}) => {
    const handleReload = () => {
        window.location.reload(); // Reloads the page
        removeLatestFromLocalStorage();
    };

    return (
        <button className='quiz-reload-button' onClick={handleReload}>
            <p className='quiz-reload-btn-arrow'>➸</p>
            <p className='quiz-reload-btn-text'>start again</p>
        </button>
    );
};

export default ReloadButton;