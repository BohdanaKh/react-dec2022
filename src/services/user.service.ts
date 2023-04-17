import axios from "axios";
import {IUser} from "../interfaces/user.interface";

const  axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/users',
    headers:{'Content-type': 'application/json; charset=UTF-8'},
});


const saveUser = (data:IUser) => axiosInstance.post('',{data});



export {
    saveUser
}