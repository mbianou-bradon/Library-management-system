import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role : "student",
}

export const roleSlice = createSlice({
    name : "userRole",
    initialState,
    reducers : {
        updateRole : (state, action) => {
            state.role = action.payload
        }
    }
})


export const { updateRole } = roleSlice.actions;

export default roleSlice.reducer