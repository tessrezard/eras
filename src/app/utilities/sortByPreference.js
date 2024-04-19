export const sortByPreference = (tracks) => {

    
    // Function to sort tracks by duration_ms in descending order
    const sortTracksByPreference = (a, b) => b.points - a.points;


    // --------------------------------------------------------------------------
    // RETURN STATEMENT
    // using spread operator to make sorted COPY, not modify original data 
    const sorted = [...tracks].sort(sortTracksByPreference);

    return (sorted);
}





