import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    user: { username: string, email: string } | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: {
        username: "Milan Detruja",
        email: "milan@example.com"
    },
};


const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
