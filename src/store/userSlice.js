import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        isAuthenticated: false
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            state.isAuthenticated = true
        },
        clearUserInfo: (state) => {
            state.userInfo = null
            state.isAuthenticated = false
        }
    }
})

export const { setUserInfo, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;