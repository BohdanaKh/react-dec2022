
import axios from "axios";
import {IComment} from "../interfaces/comment.interface";



const  axiosInstance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/comments',
    headers:{'Content-type': 'application/json; charset=UTF-8'},
});


const saveComment = (data:IComment) => axiosInstance.post('',{data});



export {
    saveComment
}