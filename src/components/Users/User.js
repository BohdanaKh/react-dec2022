import React from 'react';

const User = ({user}) => {
    const {id, username, email} = user;

    return (
        <div>
<div>id:{id}</div>
<div>username:{username}</div>
<div>email:{email}</div>
        </div>
    );
};

export {User};