import axios from "axios";

export const getOrders = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/orders`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getOrder = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/orders/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createOrder = async (payload) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_STORE}/orders`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const updateOrder = async (id, payload) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_API_ENDPOINT_STORE}/orders/${id}`, payload);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const deleteOrder = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT_STORE}/orders/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

