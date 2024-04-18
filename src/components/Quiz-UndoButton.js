import React from "react";
import '../styles/CSS/main.css';


const UndoButton = ({ piece  ,sortedPiece, setSortedPiece , setIndexTrackA,setIndexTrackB, setLastElementA, setLastElementB, addUpSortedPieces, setAddUpSortedPieces}) => {
    

    const handleUndo = () => {
        setSortedPiece([]);
        setIndexTrackA(0);
        setIndexTrackB(0);
        setLastElementA(false);
        setLastElementB(false);
        // -- if the piece is fully sorted, then we need to take it out of addUpSortePieces
        if (sortedPiece.length === piece[0]?.length + piece[1]?.length){
            const removeSortedPiece = addUpSortedPieces.filter(item => item !== sortedPiece);
            setAddUpSortedPieces(removeSortedPiece);
        }
        
    };

  return (
    <>
        <button className='quiz-undo-button' onClick={handleUndo}>
            <p className='quiz-undo-btn-arrow'>➸</p>
            <p className='quiz-undo-btn-text'>reset</p>
        </button>
    </>
  );
};


export default UndoButton;

