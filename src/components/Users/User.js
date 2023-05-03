import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {placeActions} from "../../reducers/placeholderReducers";

const User = ({user}) => {
    // const [,dispatch] = useAppReducer(state=>state.users);
    return (
        <div>
            <div>id:{user.id}</div>
            <div>name:{user.name}</div>
        </div>
    );
};

export default User;