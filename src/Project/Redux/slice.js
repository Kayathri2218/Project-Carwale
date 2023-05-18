import { createSlice } from "@reduxjs/toolkit";
import { carDetail, logoDetail } from "../Detail/LogoDetail";

const AllData = createSlice({
    name: "carwaleLogo",
    initialState: {
        logoImage: logoDetail,
        carDetailsList: carDetail,
        carDList: [],
        selectPrice: '',
        selectComapny: '',
        carSelectB : [],
        carSelectsA : []
    },
    reducers: {
        carDetailsList: (state, action) => {
            state.carDetail = action.payload
        },
        carDList: (state, action) => {
            state.carDList = action.payload
        },
        carSelectsA: (state, action) => {
            state.carSelectsA = action.payload
        },
        carSelectB: (state, action) => {
            state.carSelectB = action.payload
        },
        selectComapny: (state, action) => {
            state.selectComapny = action.payload
        },
        selectPrice: (state, action ) => {
            state.selectPrice = action.payload
        }
    }
})

export const { logoImage, carDetailsList, carDList, carSelectsA, carSelectB, selectComapny,selectPrice } = AllData.actions;
export default AllData.reducer;