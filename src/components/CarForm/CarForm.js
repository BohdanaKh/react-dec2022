import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars,carForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors,isValid},setValue} = useForm({mode:"all", resolver:joiResolver(carValidator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])


    const save = async (car) => {
const {data} = await carService.create(car);
setAllCars(prev => !prev)
        reset()
    }

const update = async (car) =>{
const {data} = await carService.updateById(carForUpdate.id,car);
setAllCars(prev=>!prev)
    reset()

}

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>

            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            { /*
                {pattern:{
                    value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                    message: 'Only letters min 1 max 20'
                },
                required:{value:true, message:'required'}
            })} />
*/}


            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            { /*
                {valueAsNumber:true,
                min:{value:0, message:'min 0'},
                max:{value:1000000, message: 'max 1000000'},
                required:{value:true, message:'required'}
            })}/>

*/}

            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            { /*
                {valueAsNumber:true,
                min:{value:1990, message:'min 1990'},
                max:{value:new Date().getFullYear(), message:'current'},
                required:{value:true, message:'required'}
            })}/>

*/}
            <button disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>




        </form>
    );
};

export default CarForm;