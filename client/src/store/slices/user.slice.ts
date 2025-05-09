import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/dbtypes";
import { getUsersForTest } from "../../actions/users.actions";

interface IUsersState {
    user: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
    error: null | string;
}

const initialState: IUsersState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: null,
};

export const fetchUsers = createAsyncThunk<IUser, void>(
    "user/fetchUser",
    async (): Promise<IUser> => {
        const data = await getUsersForTest();
        return data;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.isAuth = true;
            state.user = action.payload;
        },
        logout(state) {
            localStorage.removeItem("accessToken");
            state.isAuth = false;
            state.user = null;
        },
        setUserError(state, action) {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export const { setUser, logout, setUserError } = userSlice.actions;

export default userSlice.reducer;
