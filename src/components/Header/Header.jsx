import React from 'react'
// import PropTypes from 'prop-types'
import style from "./Header.module.scss"
import { NavLink } from 'react-router-dom'
// import { IoCalendar } from "react-icons/fa6";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaCalendarDay } from "react-icons/lia";

function Header(props) {
  return (
    <header className={style.wrapper}>
      <div className={style.iconBar}></div>
      
      <h3>Calendarious of Master Planious</h3>
      <nav>
        <NavLink to="/" className={({isActive})=> isActive ? style.active : style.link}>Main</NavLink>
        <NavLink to="/" className={({isActive})=> isActive ? style.active : style.link}>Month</NavLink>
        <NavLink to="/week" className={({isActive})=> isActive ? style.active : style.link}>Week</NavLink>
        <NavLink to="/day" className={({isActive})=> isActive ? style.active : style.link}>Day</NavLink>

      </nav>
    </header>
  )
}

// Header.propTypes = {}

export default Header
