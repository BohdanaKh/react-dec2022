import React from 'react';
import {Link,Routes,Route} from "react-router-dom";

import './App.css';
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Post from "./components/post/Post";
import Todos from "./components/todos/Todos";
const App = () => {
  return (
      <div>

          <div>

              <ul>
                  <li>
                      <Link to={'/todos'}>TODOS</Link>
                  </li>
                  <li>
                      <Link to={'/albums'}>ALBUMS</Link>
                  </li>
                  <li>
                      <Link to={'/comments'}>COMMENTS</Link>
                  </li>


              </ul>


          </div>

          <div>

              <Routes>
                  <Route path={'todos'} element={<Todos/>}></Route>
                  <Route path={'albums'} element={<Albums/>}></Route>
                  <Route path={'comments'} element={<Comments/>}>
                      <Route path={':postId'} element={<Post/>}></Route>
                  </Route>

              </Routes>

          </div>


      </div>
  );
};

export default App;


