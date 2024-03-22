
export const nextStepOfSorting = (rankedArr) => {
    if (rankedArr) {
        const pieces = [];
        const pieceSize = 2;

        for (let i = 0; i < rankedArr.length; i += pieceSize) {
            pieces.push(rankedArr.slice(i, i + pieceSize));
        }
        console.log('IN UTILITIES FUNTION : pieces', pieces);
        return pieces;
    }
}
