import React from 'react';

const Post = ({post,lift}) => {
    return (
        <div>

            <div>id: {post.id}</div>
            <h3>Title: {post.title}</h3>
            <button onClick={()=> {
                lift(post);
            }}>s   h   o   w</button>
            <button onClick={() => {lift(null)}}>h   i   d   e</button>

        </div>
    );
};

export default Post;