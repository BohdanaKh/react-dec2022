import React from 'react';

const User = ({user,chooseUser}) => {
    return (
        <div>

            <h3>{user.id} - {user.name}</h3>
            <button onClick={()=> {
                chooseUser(user.id);
            }}>posts</button>
            <button onClick={() => {chooseUser(null)}}>h   i   d   e</button>

        </div>
    );
};

export default User;