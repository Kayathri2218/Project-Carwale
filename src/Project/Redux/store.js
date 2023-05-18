import { configureStore } from "@reduxjs/toolkit";
import AllData from './slice'

export const stroes = configureStore({
    reducer:{
        allDetail: AllData
    }
})