import axios from "axios";

export const getCollections = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/collections`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
