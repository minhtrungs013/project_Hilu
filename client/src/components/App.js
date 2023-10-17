import React from 'react';
import { Route, Routes, } from "react-router-dom";
import './App.css';
import Admin from './admin/admin';
import Login from './login/login';
import Register from './register/register';
import User from './users/user';

function App() {
  // const navigate = useNavigate();
  const role = "Admin";
  const isLoggedIn = false;

  // useEffect(() => {
  //   if (isLoggedIn === false || isLoggedIn === null) {
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

  return (
    <div className={isLoggedIn === false || isLoggedIn === null ? 'App_login' : 'App'}>
      <Routes>
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/register" exact element={<Register />} />
      </Routes>
      {isLoggedIn === true ? (
        <>
          {role === "Admin" ? <Admin></Admin> : <User></User>}
        </>
      ) : null}
    </div>
  );
}

export default App;