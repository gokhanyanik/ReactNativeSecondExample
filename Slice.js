import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: "counter",   // State'in ismi . Daha sonra store da kullanılıcak.
    initialState: {
        count: 0                          //burada state' in başlangıç değeri tutulur.
    },
    reducers: {
        increas(state) {
            state.count++;
        },
        decreas(state) {
            state.count--;
        },
        refresh(state) {
            state.count = 0;
        }
    }
})
export default Slice; // Slice ı dısarda kullanabilmek için export edildi
export const {increas,decreas,refresh}=Slice.actions // kullanılacak fonk.lar export ile dışarıya açtık.