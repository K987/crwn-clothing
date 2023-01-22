import { DocumentData } from "@firebase/firestore";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategotriesAndDocuments } from "../../utils/firebase/firebase.utils";

enum Status {
    Idle,
    Pending
};

type Category = {

};

type CategoryState = {
    categories: Array<Category>,
    status: Status,
    error: unknown
};

const INITIAL_STATE: CategoryState = {
    categories: [],
    status: Status.Idle,
    error: ''
};

export const fetchUsers = createAsyncThunk(
    'categories/fetchCategories',
    async (_: void) => {
        const map = await getCategotriesAndDocuments();
        return map as Category[];
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(
            fetchUsers.fulfilled, 
            (state, action) => {
                state.categories = action.payload;
                state.status = Status.Idle;
            }
        );
        builder.addCase(
            fetchUsers.pending,
            (state, _: PayloadAction<void>) => {
                state.status = Status.Pending;
            }
        );
        builder.addCase(
            fetchUsers.rejected,
            (state, action) => {
                state.status = Status.Idle;
                state.error = action.payload;
            }
        );
    }
});

export default categoriesSlice.reducer;