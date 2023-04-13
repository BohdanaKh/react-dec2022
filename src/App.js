import React, {useState} from 'react';
import Posts from "./components/posts/Posts";
import FullPost from "./components/FullPost/FullPost";
import './App.css';
import Flights from "./components/Flights/Flights";
import Users from "./components/Users/Users";
import UserPosts from "./components/UserPosts/UserPosts";
import {getPosts} from "./services/user-service";


const App = () => {

    let [chosenPost,setChosenPost] = useState([]);
    const lift = ((obj) => {
        setChosenPost({...obj})
    });


        let [chosenUser,setChosenUser] = useState([]);
    const chooseUser = (id) => {
        getPosts(id).then(value =>
        setChosenUser(value.data));
    };


    return (
      <div className={'allData'}>
        <div className={'posts'}>
            <Posts lift={lift}/>
        </div>

          {chosenPost &&
          (<div className={'chosen'}>
            <FullPost post={chosenPost} />
          </div>)}




          <div className={'wrapper'}>

          <h1>FLIGHTS SPACE-X</h1>

          <Flights/>

          </div>




<div className={'usersAndPosts'}>
          <h1>USERS</h1>


        <Users chooseUser={chooseUser}/>

          {
chosenUser && (
                chosenUser.map(post => <UserPosts post={post} key={post.id}/>)
              )
          }
</div>
      </div>
  );
};

export default App;
