import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/collections.slice";
import userSlice from "./slices/user.slice";

const rootReducer = {
    collections: categoriesSlice,
    user: userSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
