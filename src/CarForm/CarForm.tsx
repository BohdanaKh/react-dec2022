import React from 'react';
import {useEffect} from "react";
import {SubmitHandler, useForm} from 'react-hook-form';
import {ICar} from '../interfaces/car.interface';
import {carService} from '../services/car.service';
import {carValidator} from "../validators/car.validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {Dispatch, FC, SetStateAction} from "react";


interface IProps{
    setAllCars:Dispatch<SetStateAction<ICar>>;
    carForUpdate:ICar;
}

const CarForm:FC<IProps> = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])

    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        // setAllCars(prev=>!prev)
        reset()
    };

    const update:SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        // setAllCars()
        reset()
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};