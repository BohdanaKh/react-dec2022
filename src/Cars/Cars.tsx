import React, {useEffect, useState} from 'react';
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import Car from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {Dispatch, FC, SetStateAction} from "react";


// interface IProps{
//     setCars:Dispatch<SetStateAction<ICar>>;
//     cars:ICar[];
//     allCars:ICar;
//     setAllCars:Dispatch<SetStateAction<ICar>>;
//     setCarForUpdate:Dispatch<SetStateAction<ICar>>;
//     carForUpdate:ICar;
//
//
// }

const Cars= () => {

    const [cars,setCars]= useState<ICar[]>([]);
    // @ts-ignore
    const [allCars,setAllCars] = useState<ICar>(null);
    // @ts-ignore
    const [carForUpdate,setCarForUpdate] = useState<ICar>(null);



    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars]);


    const carRemove:FC<ICar> = ((id) => {
        const newList = cars.filter(item => item.id !== id);
        carService.deleteById(id);

        setCars(newList);
    })


    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <hr/>

            {
                cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} carRemove={carRemove}/>)


            }
        </div>
    );
};

export default Cars;