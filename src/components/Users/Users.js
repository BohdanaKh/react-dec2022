import React, {useEffect} from 'react';

import User from "./User";
import {useAppReducer} from "../../hooks/useAppReducer";
import {placeholderService} from "../../services/placeholder.service";
import {placeActions} from "../../reducers/placeholderReducers";

const Users = () => {

    const [users,dispatch] = useAppReducer((state)=>state.users);

    useEffect(() => {
        placeholderService.getAllUsers().then(value => value.data)
            .then(value => dispatch(placeActions.getAll(value)))
    },[dispatch])
    console.log(users);


    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            <button onClick={()=>dispatch(placeActions.addUser())}>add user</button>
        </div>
    );
};

export default Users;