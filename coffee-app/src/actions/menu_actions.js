const baseURL = 'http://127.0.0.1:8000/menu/';

export const get_all_menu_items = () => {
    fetch(baseURL + 'items/')
        .then(data => data.json())
        .then(data => console.log(data))
};