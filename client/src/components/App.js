import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Admin from './admin/admin';
import Login from './login/login';
import Register from './register/register';
import User from './users/user';

function App() {
  const navigate = useNavigate();
  const role = useSelector(state => state.userReducer.role);
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (!isLoggedIn) {
      if (!hasNavigated.current) {
        navigate("/login");
        hasNavigated.current = true;
      }
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={!isLoggedIn ? 'App_login' : 'App'}>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
      {isLoggedIn ? (
        <>
          {role === "Admin" ? <Admin></Admin> : <User></User>}
        </>
      ) : null}
    </div>
  );
}

export default App;