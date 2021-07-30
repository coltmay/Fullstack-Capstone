import { getToken } from "./authManager";
const apiUrl = "/api/meal";

export const getMealById = (id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error("An unknown error occurred.");
            }
        });
    });
};

export const addMeal = (meal) => {
    return getToken().then((token) =>
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(meal)
        }).then(resp => resp.json()));
};

export const updateMeal = (editedMeal) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${editedMeal.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editedMeal)
        }));
}

export const deleteMeal = (id) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};