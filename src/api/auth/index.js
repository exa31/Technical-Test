import axios from 'axios';

export async function login(payload) {
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_USER}/login`, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllUsers() {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_USER}/users`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function register(payload) {
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_USER}/register`, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function logout(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_USER}/logout`, {}, config);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function me(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    try {
        const data = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_USER}/me`, config);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(id, payload) {
    try {
        const { data } = await axios.put(`${import.meta.env.VITE_API_ENDPOINT_USER}/users/${id}`, payload);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(id) {
    try {
        const { data } = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT_USER}/users/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUser({ params }) {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_USER}/users/${params.id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}
