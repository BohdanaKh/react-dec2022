import React from 'react';
import {useForm} from "react-hook-form";

import {petActions} from "../../reducers/pet.reducer";
import {useAppReducer} from "../../hooks/useAppReducer";
import Dog from "./Dog";

const Dogs = () => {
    const {reset, register, handleSubmit, formState:{errors}} = useForm();
    const [{dogs},dispatch] = useAppReducer((state)=>state.dogs);

    const saveDog = (dog) => {
        dispatch(petActions.addDog(dog))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type="text" placeholder={'dog'} {...register('name',{required: {value: true, message: 'required'}})}/>
                {errors.name && <span>{errors.name.message}</span>}
                <button>s a v e</button>
            </form>
            {dogs.map(dog=> <Dog key={dog.id} dog={dog}/> )}
        </div>
    );
};

export default Dogs;