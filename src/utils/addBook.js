import { createSlice } from "@reduxjs/toolkit";
import mockBooks from "./mockData"


const addBook=createSlice({
    name:"addBook",
    initialState:{
        items:[...mockBooks],
    },
    reducers:{
        addbook:(state,action)=>{
            const lastItem = state.items[state.items.length - 1];
            const newId = lastItem ? lastItem.id + 1 : 1;
            const { title, author, description, rating,img } = action.payload;
            const obj = { id:newId,title, author, description, rating ,img};
            state.items.push(obj);
           
        }
    }

})

export const {addbook} = addBook.actions

export default addBook.reducer