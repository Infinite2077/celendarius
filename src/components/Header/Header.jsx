import React from 'react'
// import PropTypes from 'prop-types'
import style from "./Header.module.scss"
// import { IoCalendar } from "react-icons/fa6";
// import { FaCalendarAlt } from "react-icons/fa";
// import { FaCalendarDay } from "react-icons/lia";

function Header(props) {
  return (
    <header className={style.wrapper}>
      <div className={style.iconBar}></div>
      
      <h3>Calendarious of Master Planious</h3>
      <nav>
        <a href="" className={style.link}>Main</a>
        <a href="" className={style.link}>Month</a>
        <a href="" className={style.link}>Week</a>
        <a href="" className={style.link}>Day</a>

      </nav>
    </header>
  )
}

// Header.propTypes = {}

export default Header
