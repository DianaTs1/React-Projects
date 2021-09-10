import { configureStore } from "@reduxjs/toolkit";
import countSlicer from "./count-slicer";
import toggleSlicer from "./toggle-slicer";

export default configureStore({
    reducer: {
        counter: countSlicer.reducer,
        toggle: toggleSlicer.reducer
    }
})

