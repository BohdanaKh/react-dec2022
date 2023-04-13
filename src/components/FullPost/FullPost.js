import React from 'react';

const FullPost = ({post}) => {
    return (
        <div>
           <p>User: {post.userId}</p>
            <p>Id: {post.id}</p>
            <h4>Title: {post.title}</h4>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default FullPost;