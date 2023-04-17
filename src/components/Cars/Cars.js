import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars,setCars] = useState([]);
    const [allCars,setAllCars] = useState(null);
    const [carForUpdate,setCarForUpdate] = useState(null);


    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[allCars]);


    const carRemove = ((id) => {
        const newList = cars.filter((item) => item.id !== id);
        carService.deleteById(id);

        setCars(newList);
    })

    return (
        <div>

                <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
                <hr/>
            {
                cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} carRemove={carRemove} />)
            }

        </div>
    );
};

export default Cars;