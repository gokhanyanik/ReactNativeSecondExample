import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: "counter",   // State'in ismi . Daha sonra store da kullanılıcak.
    initialState: {
        count: 0                          //burada state' in başlangıç değeri tutulur.
        count: 0 ,
        author: {
            name:"gökhan",
            surname:"yanik",
        }                       //burada state' in başlangıç değeri tutulur.
    },
    reducers: {  // reducer' lar state üzerinde değişiklik yapacak olan işlevleri(fonksiyonlar) barındırır.
        increas(state) {
            state.count++;     // Bu fonksiyonlara action denir ve global verimizi bu fonksiyonlar ile değiştiririz.
        },
        decreas(state) {
            state.count--;
        },
        refresh(state) {
            state.count = 0;
        },
        setAuthor(state, action){
            const name=action.payload.name;
            const surname=action.payload.surname;
            state.author.name=name;
            state.author.surname=surname;

        }
    }
})
export default Slice; // Slice ı dısarda kullanabilmek için export edildi
export const {increas,decreas,refresh,setAuthor}=Slice.actions // kullanılacak fonk.lar export ile dışarıya açtık.