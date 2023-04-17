import React from 'react';
import './App.css';
import Cars from "./Cars/Cars";
import PostUser from "./PostUser/PostUser";
import PostComment from "./PostComment/PostComment";



const App = () => {
  return (
      <div>
<Cars/>


          <hr/>


          <PostUser/>


          <hr/>
          <PostComment/>

      </div>
  );
};

export default App;


