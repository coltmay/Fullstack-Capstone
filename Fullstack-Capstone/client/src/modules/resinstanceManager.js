import { getToken } from "./authManager";
const apiUrl = "/api/resinstnace";

export const getResInstancesByUser = (userId) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${userId}`, {
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