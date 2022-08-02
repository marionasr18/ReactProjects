import React from "react";

import { Routes, Route, Outlet } from "react-router-dom"
import Login from "./Login";
import { Auth } from "./Auth";
import SignUp from "./SignUp";
import DefinePlayer from "./DefinePlayer";
import CardList from "./CardList";
import UserContextWrapper from "./LoadingContextWrapper";
import Loading from "./Loading";
import LoadingContextWrapper from "./LoadingContextWrapper";




function App() {




  return (
    <LoadingContextWrapper>

      <Loading />



      <Routes>
        <Route path='/signUp' element={<SignUp />} />
        <Route element={<Auth />}>
          <Route path='/' element={<Outlet />}>
            <Route path='profile/'  >
              <Route path='' element={<CardList />} />
              <Route path='edit' element={<DefinePlayer />} />
              <Route path='add' element={<DefinePlayer />} />
            </Route>
          </Route>

          <Route path='/login'>
            <Route index element={<Login />} />
          </Route>

        </Route>

      </Routes >


    </LoadingContextWrapper>
  );
}

export default App;
