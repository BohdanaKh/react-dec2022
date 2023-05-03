import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id,brand,price,year} = car;
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
                <button onClick={() => dispatch(carActions.deleteCar(id))} >delete</button>
            </div>
            <hr/>
        </div>
    );
};

export {Car};