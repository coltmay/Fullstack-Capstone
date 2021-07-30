import { getToken } from "./authManager";
const apiUrl = "/api/resinstance";

export const getResInstancesByUser = () => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/myResinstances`, {
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

export const getResInstanceById = (id) => {
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

export const addResInstance = (resInstance) => {
    return getToken().then((token) =>
        fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(resInstance)
        }).then(resp => resp.json()));
};

export const updateResInstance = (editedResInstance) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${editedResInstance.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editedResInstance)
        }));
}

export const deleteResInstance = (id) => {
    return getToken().then((token) =>
        fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }));
};