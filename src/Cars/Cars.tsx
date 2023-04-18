import React, {useEffect, useState} from 'react';
import {ICar} from "../interfaces/car.interface";
import {carService} from "../services/car.service";
import Car from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";



const Cars= () => {

    const [cars,setCars]= useState<ICar[]>([]);
    // @ts-ignore
    const [allCars,setAllCars] = useState<boolean>(null);
    // @ts-ignore
    const [carForUpdate,setCarForUpdate] = useState<ICar>(null);



    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars]);


    const del:any = ((id:number) => {
        // const newList = cars.filter(item => item.id !== id);
        carService.deleteById(id).then(r =>{
            const newList = cars.filter(item => item.id !== id );
            setCars(newList);
        })


    })


    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <hr/>

            {
                cars.map(car => <Car car={car} key={car.id} setCarForUpdate={setCarForUpdate} del={del}/>)


            }
        </div>
    );
};

export default Cars;