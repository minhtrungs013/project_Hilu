import { Checkbox, Col, Row, message } from 'antd';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../api/service/AuthService";
import {
  ACCESS_TOKEN,
  ENTER_ALL_INFORMATION,
  REGEX,
  SLASH,
  TYPE_MESSAGE_ERROR,
  TYPE_MESSAGE_WARNING,
  USER_NAME_CHARACTERS
} from '../../commom/messageConstant';
import { setLoggedIn, setRoleUser, setUser } from '../redux/_actions/user.actions';
import "./login.css";

export default function Login() {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.userReducer.loggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate(SLASH);
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (REGEX.test(username)) {
      showMessage(TYPE_MESSAGE_WARNING, USER_NAME_CHARACTERS)
      return
    }
    if (username === null || password === null) {
      showMessage(TYPE_MESSAGE_WARNING, ENTER_ALL_INFORMATION)
      return
    } else {
      await loginAPI('auth/login', { username, password })
        .then((response) => {
          if (response) {
            localStorage.setItem(ACCESS_TOKEN, response.data.data.token)
            dispatch(setRoleUser(response.data.data.role))
            dispatch(setLoggedIn(true))
            dispatch(setUser(response.data.data))
            navigate(SLASH)
          }
        })
        .catch((error) => {
          showMessage(TYPE_MESSAGE_ERROR, error.response?.data?.message)
        });
    }

  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const showMessage = (type, message) => {
    messageApi.open({
      type: type,
      content: message,
    });
  }
  return (
    <>
      {contextHolder}
      <div className='login'>
        <div className='login_body'>
          <Row gutter={1}>
            <Col span={12}>
              <div className='login_left'>
                <div className='login_img'>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className='login_rigth'>
                <h1 className='login_heading'> Login</h1>
                <form onSubmit={handleSubmit} className='login_form'>
                  <div className='login_item'>
                    <label className='login_text'> User Name</label>
                    <input type="text" className='login_input' onChange={handleUsernameChange} placeholder='User name' />
                  </div>
                  <div className='login_item'>
                    <label className='login_text'> Password</label>
                    <input type="password" className='login_input' onChange={handlePasswordChange} placeholder='password' />
                  </div>
                  <div className='login_item'>
                    <Checkbox className='login_check'></Checkbox>
                    <span className='login_check-text'>Remember me</span>
                  </div>
                  <div className='login_item'>
                    <button type="submit" className='login_button'>Login</button>
                  </div>
                  <div className='login_item'>
                    <span className="login_register-text ">Do not have an account? </span>
                    <Link className="login_item-link " to="/register">Create an account</Link>
                  </div>
                </form>
              </div>

            </Col>
          </Row>


        </div>
      </div>
    </>

  )
}
