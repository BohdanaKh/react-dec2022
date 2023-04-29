import React from 'react';
import {useForm} from "react-hook-form";

import {petActions} from "../../reducers/pet.reducer";
import {useAppReducer} from "../../hooks/useAppReducer";
import Cat from "./Cat";

const Cats = () => {
    const {reset, register, handleSubmit, formState:{errors}} = useForm();
    const [{cats},dispatch] = useAppReducer((state)=>state.cats);

    const saveCat = (cat) => {
        dispatch(petActions.addCat(cat))
        reset()
    };

    return (
        <div>
        <form onSubmit={handleSubmit(saveCat)}>
            <input type="text" placeholder={'cat'} {...register('name', {required: {value: true, message: 'required'}})}/>
            {errors.name && <span>{errors.name.message}</span>}

            <button>s a v e</button>
        </form>
            {cats.map(cat=> <Cat key={cat.id} cat={cat}/> )}

        </div>
    );
};

export default Cats;