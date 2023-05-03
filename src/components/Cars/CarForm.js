import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {carActions} from "../../redux";
import {carService} from "../../services";




const CarForm = () => {
    const {carForUpdate} = useSelector(state=>state.cars);
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
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