import {IRes} from '../types/res.type';
import {ITodo} from '../interfaces/todo.interface';
import {placeAxiosService} from './axios.service';
import {urls} from '../constants/urls';

const todoService = {
    getAll: (): IRes<ITodo[]> => placeAxiosService.get(urls.placeAPI.todos)
}

export {
    todoService
}