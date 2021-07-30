import { getToken } from "./authManager";
const apiUrl = "/api/ResExercise";

export const getRexById = (id) => {
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

export const addRex = (rex) => {
    return getToken().then((token) =>
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(rex)
        }).then(resp => resp.json()));
};

export const updateRex = (editedRex) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${editedRex.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editedRex)
        }));
}

export const deleteRex = (id) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};