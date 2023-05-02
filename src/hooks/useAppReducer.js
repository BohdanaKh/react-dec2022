import {useContext} from "react";

import {StateContext} from "../hoc/Provider";

const useAppReducer = (state)=>state(useContext(StateContext))

console.log(useAppReducer);


export {
    useAppReducer
}