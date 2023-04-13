import React from 'react';


const UserPosts = ({post}) => {

    return (
        <div>

            <div>id: {post.id}</div>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default UserPosts;