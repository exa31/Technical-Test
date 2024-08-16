import axios from "axios";

export const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/categories`);
    return data;
}

export const createCategory = async (payload) => {
    const { data } = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_STORE}/categories`, payload);
    return data;
}

export const deleteCategory = async (id) => {
    const { data } = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT_STORE}/categories/${id}`);
    return data;
}

export const updateCategory = async (id, payload) => {
    const { data } = await axios.put(`${import.meta.env.VITE_API_ENDPOINT_STORE}/categories/${id}`, payload);
    return data;
}

export const getCategory = async ({ params }) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/categories/${params.id}`);
    return data;
}