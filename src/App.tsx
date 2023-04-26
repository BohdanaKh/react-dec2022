import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts/MainLayout";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import PetsPage from "./pages/PetsPage";


const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'posts'}/>}/>
              <Route path={'posts'} element={<PostsPage/>}/>
              <Route path={'comments'} element={<CommentsPage/>}/>
              <Route path={'pets'} element={<PetsPage/>}/>
              </Route>
      </Routes>
  )
}

export default App;


