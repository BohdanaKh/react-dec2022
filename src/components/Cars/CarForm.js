import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";
import {carService} from "../../services/car.service";


const CarForm = () => {
    const [{carForUpdate}, dispatch] = useAppReducer(state=>state.cars);
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await carService.create(car);
        dispatch(carActions.setTrigger())
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.setTrigger())
        reset()
        dispatch(carActions.setCarForUpdate(null))
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};