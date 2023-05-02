import React, {useEffect} from 'react';

import User from "./User";
import {useAppReducer} from "../../hooks/useAppReducer";
import {placeholderService} from "../../services/placeholder.service";
import {placeActions} from "../../reducers/placeholderReducers";
import {placeActionTypes} from "../../reducers/placeholderReducers";

const Users = () => {

    const [users,dispatch] = useAppReducer((state)=>state.users);
    console.log(users);
    console.log(dispatch);


    useEffect(() => {
        placeholderService.getAllUsers().then(value => value.data)
            .then(value => dispatch(placeActions.getAll(value)))
    },[])
    console.log(users);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             dispatch(placeActions.loadUsers(value))
    //             console.log(value);
    //         });
    // }, []);

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;