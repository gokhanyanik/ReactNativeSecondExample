import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

export const Store = configureStore({
    reducer: {
        counter: Slice.reducer,    // counter: State'in ismi ve bununla çağıracağız.
    }
})