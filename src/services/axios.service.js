import axios from "axios";

import {baseURL} from "../constants/urls";
import {baseCarApiURL} from "../constants/urls";


const axiosService  = axios.create({baseURL});
console.log(axiosService);

const carsAxiosService = axios.create({baseCarApiURL});
console.log(carsAxiosService);


export {
   axiosService,
    carsAxiosService
}