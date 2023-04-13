// #Advance
//
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)

import React, {useEffect, useState} from 'react';
import User from "../User/User";
import {getUsers} from "../../services/user-service";

const Users = ({chooseUser}) => {

    let [users,setUsers] = useState([]);

    useEffect(() =>{
      getUsers().then(value =>
        setUsers(value.data));
    }, [])

    return (
        <div>
            {
                users.map(value => <User user={value} key={value.id} chooseUser={chooseUser}/>)
            }
        </div>
    );
};

export default Users;