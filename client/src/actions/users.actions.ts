import axios from "axios";
// import { setUser } from "../store/slices/user.slice";
// import { Dispatch } from "redux";

export const getUsersForTest = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/users`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

// export const login = (name: string, password: string) => {
//     return async (dispatch: Dispatch) => {
//         try {
//             const response = await axios.post("http://localhost:3000/auth/login/", {
//                 name,
//                 password,
//             });

//             dispatch(setUser(response.data.user));
//             localStorage.setItem("accessToken", response.data.accessToken);

//             console.log(response.data);
//         } catch (e) {
//             if (axios.isAxiosError(e)) {
//                 console.error(e.response?.data?.message || "Login error");
//             } else {
//                 console.error("Unknown error", e);
//             }
//         }
//     };
// };

// export const auth = () => {
//     return async (dispatch: Dispatch) => {
//         try {
//             const response = await axios.get(`http://localhost:3000/auth/auth`, {
//                 headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
//             });
//             dispatch(setUser(response.data.user));
//             localStorage.setItem("accessToken", response.data.accessToken);
//         } catch (e) {
//             if (axios.isAxiosError(e)) {
//                 console.log(e.response?.data?.message);
//                 localStorage.removeItem("accessToken");
//             } else {
//                 console.error("Unknown error", e);
//             }
//         }
//     };
// };
