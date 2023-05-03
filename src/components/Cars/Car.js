import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";
import {carService} from "../../services";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id,brand,price,year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id);
        dispatch(carActions.setTrigger())
    };

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div style={{display: 'flex', margin: '5px'}}>
                <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
                <button onClick={() => deleteCar()} >delete</button>
            </div>
            <hr/>
        </div>
    );
};

export {Car};