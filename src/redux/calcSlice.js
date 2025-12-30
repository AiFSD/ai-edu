import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     value:1
}

export const calculation = createSlice({
     name:"multiply",
     initialState,
     reducers : {
mul : (state) => {
state.value *= 2
}
     }
})

export const {mul} = calculation.actions

export default calculation.reducer