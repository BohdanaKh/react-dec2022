import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import PostPage from "./pages/PostPage";
import CommentPage from "./pages/CommentPage";
import PetsPage from "./pages/PetsPage";
const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'posts'}/>}/>
              <Route path={'posts'} element={<PostPage/>}/>
              <Route path={'comments'} element={<CommentPage/>}/>
              <Route path={'pets'} element={<PetsPage/>}/>
          </Route>
      </Routes>
  );
};

export default App;
