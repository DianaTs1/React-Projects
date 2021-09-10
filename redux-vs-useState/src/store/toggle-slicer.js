import { createSlice } from "@reduxjs/toolkit";

const initialState = {isVisible: true};

const toggleSlicer = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle: state => {state.isVisible = !state.isVisible}
    }
});

export const {toggle} = toggleSlicer.actions;

export default toggleSlicer;