import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategotriesAndDocuments } from "../../utils/firebase/firebase.utils";


const INITIAL_STATE = {
    categories: [],
    status: 'idle'
};

export const fetchUsers = createAsyncThunk(
    'categories/fetchCategories',
    async (_, thunkAPI) => {
        const map = await getCategotriesAndDocuments();
        return map;
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder.addCase(
            fetchUsers.fulfilled, 
            (state, action) => {
                state.categories = action.payload;
                state.status = 'idle';
            }
        );
        builder.addCase(
            fetchUsers.pending,
            (state, _) => {
                state.status = 'pending';
            }
        );
        builder.addCase(
            fetchUsers.rejected,
            (state, action) => {
                state.status = 'idle';
                state.error = action.payload;
            }
        );
    }
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;