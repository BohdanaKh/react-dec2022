import {useAppReducer} from "../../hooks/useAppReducer";
import {carActions} from "../../reducers/car.reducer";
import {carService} from "../../services/car.service";


const Car = ({car}) => {
    const [, dispatch] = useAppReducer(state=>state.cars);
    const {id, brand, price, year} = car;


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteCar(car))}>delete</button>

        </div>
    );
};

export {Car};