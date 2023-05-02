import {carsAxiosService} from "./axios.service";
import {carsUrl} from "../constants/urls";



const carService = {
    getAll: () => carsAxiosService.get(carsUrl.cars),
    create: (car) => carsAxiosService.post(carsUrl.cars, car),
    getById: (id) => carsAxiosService.get(`${carsUrl.cars}/${id}`),
    updateById: (id, car) => carsAxiosService.put(`${carsUrl.cars}/${id}`, car),
    deleteById: (id) => carsAxiosService.delete(`${carsUrl.cars}/${id}`)
}



export {
    carService
}