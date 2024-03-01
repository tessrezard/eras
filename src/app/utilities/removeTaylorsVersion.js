export const removeTV = (trackName) => {
    if (trackName) {
        const target1 = "(Taylor’s Version)";
        const target2 = "(Taylor's Version)";

        if (trackName.includes(target1)) {
            trackName = trackName.replace(target1, '');
        }
        if (trackName.includes(target2)) {
            trackName = trackName.replace(target2, '');
        }

        return trackName;
    } else {
        // Handle the case where trackName is undefined
        return "";
    }
}