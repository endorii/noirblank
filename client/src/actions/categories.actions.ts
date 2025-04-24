import axios from "axios";

export const getCategories = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/categories`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const getCategory = async (categoryId: string) => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/categories/${categoryId}`
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
