import {createContext, useReducer} from "react";

import {petReducer, petInitialState} from "../reducers/pet.reducer";


const StateContext = createContext(null);
const Provider = ({children}) => {
    const reducers = {
        cats: useReducer(petReducer, petInitialState),
        dogs: useReducer(petReducer, petInitialState)
    }
    return(
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    )
}

export {
    Provider,StateContext
}