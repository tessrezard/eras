
export function getItemFromLocal(id) {
    //-- GET ITEMS FROM LOCAL STORAGE
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('savedRanking-') && key.includes(id)) {
            const tracks = JSON.parse(localStorage.getItem(key));
            console.log('item', { key, tracks });
            return { key, tracks };
        }
    }
}
