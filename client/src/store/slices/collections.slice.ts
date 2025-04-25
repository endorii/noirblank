import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCollections } from "../../actions/categories.actions";
import { ICollection } from "../../types/dbtypes";

interface CollectionsState {
    collections: ICollection[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CollectionsState = {
    collections: [],
    isLoading: false,
    error: null,
};

export const fetchCollections = createAsyncThunk<ICollection[], void>(
    "collections/fetchCollections",
    async (): Promise<ICollection[]> => {
        const data = await getCollections();
        return data;
    }
);

const categoriesSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollections.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCollections.fulfilled, (state, action) => {
                state.isLoading = false;
                state.collections = action.payload;
            })
            .addCase(fetchCollections.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "An error occurred";
            });
    },
});

export default categoriesSlice.reducer;
