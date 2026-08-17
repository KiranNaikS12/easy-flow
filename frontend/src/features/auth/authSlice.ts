import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserData } from "../../types/authTypes/userTypes";



interface UserState {
    userInfo: UserData | null;
}

const initialState: UserState = {
    userInfo: null,
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<UserData | null>) => {
            state.userInfo = action.payload;
        }
    }
})

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;