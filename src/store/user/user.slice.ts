import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    accessToken: string,
    email: string,
}

type UserState = {
    readonly currentUser: User|null
}

const INITIAL_STATE: UserState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        } 
    }
});

export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

