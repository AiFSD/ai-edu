import { configureStore } from "@reduxjs/toolkit";
import calculationReducer from "../redux/calcSlice"
export const database = configureStore({
     reducer:{
multiply:calculationReducer
     }
})