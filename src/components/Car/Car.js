import React from 'react';



const Car = ({car,setCarForUpdate,carRemove}) => {

    const{id,brand,price,year} = car;


    return (
        <div>

            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={()=>carRemove(id)}>Delete</button>
            <hr/>

        </div>
    );
};

export default Car;