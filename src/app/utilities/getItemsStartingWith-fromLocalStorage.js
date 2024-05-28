export function getItemsStartingWith(prefix) {

    //-- GET ITEMS FROM LOCAL STORAGE
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            const value = JSON.parse(localStorage.getItem(key));
            items.push({ key, value });
        }
    }

    //-- in local storage, we have stored the list tracks and graph tracks separately. 


    return items;
}
