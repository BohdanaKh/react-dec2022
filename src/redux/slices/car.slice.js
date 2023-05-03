import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[],
    comments:[],
    cars: [],
    trigger: null,
    carForUpdate: null
};

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload},
        setCarForUpdate:(state,action) =>{
            state.carForUpdate = action.payload},
        setTrigger:(state,action) => {
            state.trigger = !state.trigger
        }
    }
});


const {reducer:carReducer,actions} = slice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}