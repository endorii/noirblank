import axios from "axios";
import toast from "react-hot-toast";

export const addPreviewImage = async (categoryId, file) => {
    try {
        const formData = new FormData();
        formData.append("picture", file);

        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/upload-preview/${categoryId}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        toast.success("Прев'ю успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні зображення");
        throw e;
    }
};

export const deletePreviewImage = async (categoryId, imagePath) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-preview-image/${categoryId}`,
            {
                params: { imagePath },
            }
        );

        toast.success("Прев'ю успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні зображення");
        throw e;
    }
};

export const addBgImage = async (categoryId, file) => {
    try {
        const formData = new FormData();
        formData.append("picture", file);

        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/upload-bg/${categoryId}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        toast.success("Фон до категорії успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні зображення");
        throw e;
    }
};

export const deleteBgImage = async (categoryId, imagePath) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-bg-image/${categoryId}`,
            {
                params: { imagePath },
            }
        );

        toast.success("Фон до категорії успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні зображення");
        throw e;
    }
};

export const addImage = async (categoryId, file) => {
    try {
        const formData = new FormData();
        formData.append("picture", file);

        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/upload/${categoryId}`,
            formData,
            {
                headers: { "Content-Type": "multipart/form-data" },
            }
        );

        toast.success("Зображення успішно додано!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при додаванні зображення");
        throw e;
    }
};

export const deleteImage = async (categoryId, imagePath) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-image/${categoryId}`,
            {
                params: { imagePath },
            }
        );

        toast.success("Зображення успішно видалено!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні зображення");
        throw e;
    }
};

export const deleteAllImagesFromCategory = async (categoryId) => {
    try {
        const response = await axios.delete(
            `${import.meta.env.VITE_API_URL}/delete-all-images/${categoryId}`
        );

        toast.success("Усі зображення категорії успішно видалені!");
        return response.data;
    } catch (e) {
        toast.error("Помилка при видаленні зображень");
        throw e;
    }
};
