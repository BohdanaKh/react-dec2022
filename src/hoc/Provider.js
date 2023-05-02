import {createContext, useReducer} from "react";

import {carReducer, carInitialState} from "../reducers/car.reducer";
import {userReducer,postReducer,placeInitialState} from "../reducers/placeholderReducers";

const StateContext = createContext(null);
const Provider = ({children}) => {
    const reducers = {
        users: useReducer(userReducer,placeInitialState),
        posts: useReducer(postReducer,placeInitialState),
        cars: useReducer(carReducer,carInitialState)
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    )
}

export {
    StateContext,
    Provider
}