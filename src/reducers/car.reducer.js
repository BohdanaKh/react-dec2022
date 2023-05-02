
const carActionTypes = {
    SET_ALL: 'SET_ALL',
    UPDATE_CAR: 'UPDATE_CAR',
    DELETE_CAR: 'DELETE_CAR',
    TRIGGER:'TRIGGER'
}

const carActions = {
    setAll:(cars)=>({type:carActionTypes.SET_ALL, payload:cars}),
    setCarForUpdate:(car)=>({type:carActionTypes.UPDATE_CAR, payload:car}),
    deleteCar:(car)=>({type:carActionTypes.DELETE_CAR, payload:car}),
    setTrigger:()=>({type:carActionTypes.TRIGGER})
}


const carInitialState = {
    cars: [],
    carForUpdate: null,
    deleteCar:null,
    trigger: null
}
const carReducer = (state, action) => {
    switch (action.type) {
        case carActionTypes.SET_ALL:
            return {...state, cars: action.payload}
        case carActionTypes.UPDATE_CAR:
            return {...state, carForUpdate: action.payload}
        case carActionTypes.DELETE_CAR:
            const idForDeleteCar = action.payload;
            const carIndex = state.cars.findIndex(value => value.id===idForDeleteCar);
            state.cars.splice(carIndex, 1)
            return {...state};
        case carActionTypes.TRIGGER:
            return {...state, trigger: !state.trigger}
        default:
            return state
    }
}


export {
    carActions,
    carReducer,
    carInitialState
}
