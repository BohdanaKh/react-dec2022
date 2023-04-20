import {FC} from 'react';

import {ITodo} from "../../interfaces/todo.interface";

interface IProps {
    todo:ITodo;

}

const Todo: FC<IProps> = ({todo}) => {
    const {userId, id,title,completed} = todo;
    return (
        <div className={'todo'}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed.toString()}</div>

        </div>
    );
};

export {Todo};