export function getItemsStartingWith(prefix) {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(prefix)) {
            const value = JSON.parse(localStorage.getItem(key));
            items.push({ key, value });
        }
    }
    return items;
}
