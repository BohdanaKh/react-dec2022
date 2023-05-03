import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import { userActions} from "../../redux";
import {User} from "./User";

const Users = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users);

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(userActions.setUsers(value)))
    },[dispatch])


    const save = (e) =>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const user = {id:new Date().getTime(),username,email};
        dispatch(userActions.addUser({user}));

    }


    return (
        <div>
            <form onSubmit={save}>
                <input type="text" placeholder={'username'} name={'username'}/>
                <input type="text" placeholder={'email'} name={'email'}/>
                <button>Save</button>

            </form>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};