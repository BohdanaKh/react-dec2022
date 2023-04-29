import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {petActions} from "../../reducers/pet.reducer";

const Cat = ({cat}) => {
    const [,dispatch] = useAppReducer(state=>state.cats);
    const {id,name} =cat;

    return (
        <div>
            <div>{name}</div>
            <button onClick={()=>dispatch(petActions.deleteCat(id))}>Delete</button>
        </div>
    );
};

export default Cat;