const baseURL = 'http://127.0.0.1:8000/menu/';

export const get_all_menu_items = () => {
    fetch(baseURL + 'items/')
        .then(data => data.json())
        .then(data => console.log(data))
};

export const get_menu_items_in_category = (category) => {
    return fetch(baseURL + `items/${category}/`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            return data;
        });

    // return new Promise((resolve, reject) => {
    //     try {
    //         fetch(baseURL + `items/${category}/`)
    //             .then(data => data.json())
    //             .then(data => {
    //                 console.log("data", data);
    //                 return data;
    //             });
    //     }
    //     catch (error) {
    //         reject(error);
    //     }
    // })
};

export const get_all_categories = () => {
    return fetch(baseURL + 'categories/')
        .then(data => data.json());
};