// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React, {useState, useEffect} from 'react';
import Flight from '../Flight/Flight'
const Flights = () => {

    let [flights, setFlights] = useState([]);

    useEffect(() =>{
        fetch ('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allFlights =>  {
                setFlights(allFlights);
            });
    }, [])

    return (
        <div>
            {
                flights.map((flight,index) => (<Flight flight={flight} key={index}/>))
            }
        </div>
    );
};

export default Flights;