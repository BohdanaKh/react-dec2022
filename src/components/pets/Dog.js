import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {petActions} from "../../reducers/pet.reducer";

const Dog = ({dog}) => {
    const [,dispatch] = useAppReducer(state=>state.dogs);
    const {id,name} = dog;
    return (
        <div>
           <div>{name}</div>
         <button onClick={()=>dispatch(petActions.deleteDog(id))}>Delete</button>
        </div>
    );
};

export default Dog;