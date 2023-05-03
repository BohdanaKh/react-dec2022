import {carsAxiosService} from './axios.service';
import {urls} from '../constants';

const carService = {
    getAll: () => carsAxiosService.get(urls.carAPI.cars),
    create: (car)=> carsAxiosService.post(urls.carAPI.cars, car),
    updateById: (id, car) => carsAxiosService.put(urls.carAPI.byId(id), car),
    deleteById: (id)=> carsAxiosService.delete(urls.carAPI.byId(id))
}

export {
    carService
}