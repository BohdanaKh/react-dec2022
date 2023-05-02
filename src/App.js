import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CarsPage from "./pages/CarsPage";

const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'cars'} element={<CarsPage/>}/>
          </Route>
      </Routes>
  );
};

export default App;
