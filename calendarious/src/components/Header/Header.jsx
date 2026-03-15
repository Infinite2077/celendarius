import React from 'react'
//import PropTypes from 'prop-types'
import style from "./Header.module.scss"
import { NavLink } from 'react-router-dom'
//import { IoCalendar } from "react-icons/fa6";
//import { FaCalendarAlt } from "react-icons/fa";
//import { FaCalendarDay } from "react-icons/lia";
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from "../../store/AuthReducer"

function Header(props) {
  let isAuth = useSelector(state => state.auth.token) != null;
  let dispatch = useDispatch()
  let logout = () => {
    dispatch(removeToken())
  }
  return (
    <header className={style.wrapper}>
      <div className={style.iconBar}></div>

      <h3>Calendarious of Master Planious</h3>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? style.active : style.link}>Main</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? style.active : style.link}>Month</NavLink>
        <NavLink to="/week" className={({ isActive }) => isActive ? style.active : style.link}>Week</NavLink>
        <NavLink to="/day" className={({ isActive }) => isActive ? style.active : style.link}>Day</NavLink>

        {!isAuth ? (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? style.active : style.link}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? style.active : style.link}>register</NavLink>
          </>

        ) : (
          <NavLink onClick={logout}>Log Out</NavLink>
        )
        }
      </nav>
    </header>
  )
}

// Header.propTypes = {}

export default Header
