import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../actions/categories.actions";
import { ICategory } from "../../types/dbtypes";

interface CategoriesState {
    categories: ICategory[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const fetchCategories = createAsyncThunk<ICategory[], void>(
    "categories/fetchCategories",
    async (): Promise<ICategory[]> => {
        const data = await getCategories();
        return data;
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export default categoriesSlice.reducer;
