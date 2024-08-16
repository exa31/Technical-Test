import axios from "axios"

export const getProducts = async () => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/products`)
        return data
    } catch (error) {
        console.error(error)
        return
    }
}

export const getProduct = async (id) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_ENDPOINT_STORE}/products/${id}`)
        return data
    } catch (error) {
        console.error(error)
        return
    }
}

export const updateProduct = async (id, product) => {
    try {
        const { data } = await axios.put(`${import.meta.env.VITE_API_ENDPOINT_STORE}/products/${id}`, product)
        return data
    } catch (error) {
        console.error(error)
        return
    }
}

export const createProduct = async (product) => {
    try {
        const { data } = await axios.post(`${import.meta.env.VITE_API_ENDPOINT_STORE}/products`, product)
        return data
    } catch (error) {
        console.error(error)
        return
    }
}

export const deleteProduct = async (id) => {
    try {
        const { data } = await axios.delete(`${import.meta.env.VITE_API_ENDPOINT_STORE}/products/${id}`)
        return data
    } catch (error) {
        console.error(error)
        return
    }
}