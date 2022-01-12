const baseURL = 'http://127.0.0.1:8000/menu/';

export const get_all_menu_items = () => {
    return fetch(baseURL + 'items/')
        .then(data => data.json())
};

export const get_menu_items_in_category = (category) => {
    return fetch(baseURL + `items/${category}/`)
        .then(data => data.json())
};

export const get_all_categories = () => {
    return fetch(baseURL + 'categories/')
        .then(data => data.json());
};

export const take_item = (item) => {
    item.amount -= 1;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(item)
    };
    return fetch(baseURL + `take_item/${item.id}/`, requestOptions)
        .then(data => data.json);
}
