// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({lift}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() =>{
        fetch ('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts =>  {
                setPosts(allPosts);
            });
    }, [])



    return (
        <div>
            {
             posts.map(post => <Post post={post} key={post.id} lift={lift} />
             )}
        </div>
    );
};

export default Posts;