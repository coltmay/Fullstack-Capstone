import { getToken } from "./authManager";
const apiUrl = "/api/exercise";

export const getAllExercises = () => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}`, {
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

export const getExerciseById = (id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/detail/${id}`, {
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

export const addExercise = (exercise) => {
    return getToken().then((token) =>
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(exercise)
        }).then(resp => resp.json()));
};

export const updateExercise = (editedExercise) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${editedExercise.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editedExercise)
        }));
}

export const deleteExercise = (id) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};