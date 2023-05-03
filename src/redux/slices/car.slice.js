import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    users:[],
    comments:[],
    cars: []
};

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload},
        addCar: (state, action) => {
            const car = action.payload.car;
            carService.create(car)},
        deleteCar:(state,action) =>{
            const idForDelCar = action.payload;
            carService.deleteById(idForDelCar)},
        setCarForUpdate:(state,action) =>{
            const {id,car} = action.payload
            carService.updateById(id,car)
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