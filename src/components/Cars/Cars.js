import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";
import {Car} from "./Car";
const Cars = () => {
    const dispatch = useDispatch();
    const {cars,carForUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setCars(value)))
    },[dispatch])

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }})

    const addCar = (e) =>{
        // e.preventDefault();
        const brand = e.target.brand.value;
        const price = e.target.price.value;
        const year = e.target.year.value;
        const car = {brand,price,year};
        dispatch(carActions.addCar({car}));
    }

        const updateCar = async (car) => {
            await carService.updateById(carForUpdate.id, car)
            // dispatch(carActions.setTrigger())
            dispatch(carActions.setCarForUpdate(null))
        }

    return (
        <div>
            <form onSubmit={addCar}>
                <input type="text" placeholder={'brand'} name={'brand'}/>
                <input type="text" placeholder={'price'} name={'price'}/>
                <input type="text" placeholder={'year'} name={'year'}/>
                <button>Save</button>

            </form>


            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};