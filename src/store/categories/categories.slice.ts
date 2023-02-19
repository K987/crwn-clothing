import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCategotriesAndDocuments } from "../../utils/firebase/firebase.utils";

enum Status {
    Idle,
    Pending
};

export type CategoryItem = {
    id: number,
    imageUrl: string,
    name: string,
    price: number,
};

export type Category = {
    title: string,
    imageUrl: string,
    items: CategoryItem[],
};


export type CategoryMap = {
    [key: string]: CategoryItem[],
};

export type CategoryState = {
    readonly categories: Array<Category>,
    readonly status: Status,
    readonly error: unknown
};

const INITIAL_STATE: CategoryState = {
    categories: [],
    status: Status.Idle,
    error: ''
};

export const fetchCategories = createAsyncThunk(
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
            fetchCategories.fulfilled, 
            (state, action) => {
                state.categories = action.payload;
                state.status = Status.Idle;
            }
        );
        builder.addCase(
            fetchCategories.pending,
            (state, _: PayloadAction<void>) => {
                state.status = Status.Pending;
            }
        );
        builder.addCase(
            fetchCategories.rejected,
            (state, action) => {
                state.status = Status.Idle;
                state.error = action.payload;
            }
        );
    }
});

export default categoriesSlice.reducer;