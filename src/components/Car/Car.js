import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car,setCarForUpdate}) => {

    const{id,brand,price,year} = car;


    return (
        <div>

            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={()=>{carService.deleteById(id)}}>Delete</button>
            <hr/>

        </div>
    );
};

export default Car;