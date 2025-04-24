import axios from "axios";
import { setUser } from "../store/slices/user.slice";
import toast from "react-hot-toast";

export const login = (name, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login/`, {
                name,
                password,
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem("accessToken", response.data.accessToken);
            toast.success(response.data.message);

            console.log(response.data);
        } catch (e) {
            toast.error(e.response.data.message);
            console.log(e.response.data.message);
        }
    };
};

export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/auth`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem("accessToken", response.data.accessToken);
        } catch (e) {
            console.log(e.response.data.message);
            localStorage.removeItem("accessToken");
        }
    };
};
