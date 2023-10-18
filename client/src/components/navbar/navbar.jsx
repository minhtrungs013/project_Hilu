import { BellOutlined, PoweroffOutlined } from '@ant-design/icons';
import { faBars, faBlog, faBook, faPen, faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { setLoggedIn, setUser } from '../redux/_actions/user.actions';
import "./navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const userName = useSelector(state => state.userReducer.userName);
    const dispatch = useDispatch();

    /**
     * Log out the user by clearing user data and changing the login status.
     *
     * This function dispatches actions to set the user to null and the login status to false.
     * It also navigates the user to the login page.
     */
    const logOut = () => {
        dispatch(setUser(null))
        dispatch(setLoggedIn(false))
        navigate("/login");
    }

    return (
        <div className='navbar_user'>
            <div className='navbar__item'>
                <div className='navbar__left'>
                    <div className='Navigate__heading1'>
                        <img src="https://estudyme.com/_next/image/?url=%2Fimages%2Fapp%2Festudyme%2Ficon-support-3d.png&w=256&q=100" alt="" className='user_img1' />
                    </div>
                </div>
                <div className='navbar__center'>
                    <ul className='navbar__center-list'>
                        <li className='navbar__center-item'>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }} className="navbar__center-item-link " to="/vocabulary">
                                <FontAwesomeIcon className='navbar__item-icon' icon={faBook} />
                                Vocabulary
                            </NavLink>
                        </li>
                        <li className='navbar__center-item'>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }} className="navbar__center-item-link " to="/grammar">
                                <FontAwesomeIcon className='navbar__item-icon' icon={faSpellCheck} />
                                Grammar
                            </NavLink>
                        </li>
                        <li className='navbar__center-item'>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }} className="navbar__center-item-link " to="/practice">
                                <FontAwesomeIcon className='navbar__item-icon' icon={faPen} />
                                Practice
                            </NavLink>
                        </li>
                        <li className='navbar__center-item'>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }} className="navbar__center-item-link " to="/blog">
                                <FontAwesomeIcon className='navbar__item-icon' icon={faBlog} />
                                Blog
                            </NavLink>

                        </li>
                        <li className='navbar__center-item'>
                            <NavLink style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }} className="navbar__center-item-link " to="/test">
                                <FontAwesomeIcon className='navbar__item-icon' icon={faBars} />
                                Test
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='navbar__rigth'>
                    <div className='user'>
                        {/* <img src={userData?.image} alt="" className='user_img' /> */}
                        <img src="https://nv.edu.vn/wp-content/uploads/2020/08/english-course.jpg" alt="" className='user_img' />
                        <span className='user__name'>{userName}</span>
                    </div>
                    <div className='navbar__rigth-user-icon'>
                        <BellOutlined />
                    </div>
                    <div className='navbar__rigth-user-icon' onClick={logOut}>
                        <PoweroffOutlined className='power' />
                    </div>
                </div>
            </div>
        </div>
    )
}
