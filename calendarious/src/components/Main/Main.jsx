import React from 'react'
import style from "./main.module.scss"
import MCalendar from '../MCalendar/MCalendar'
import { Route, Routes } from 'react-router-dom'
import WCalendar from '../WCalendar/WCalendar'
import DCalendar from '../DCalendar/DCalendar'
import Valentine from '../Valentine/Valentine'
import Login from "../Auth/Login"
import Register from "../Auth/Register"

export default function Main() {
  return (
    <main className={style.main}>
      <Routes>
        
        <Route path="/" element = {<MCalendar/>}/>
        <Route path="/week" element = {<WCalendar/>}/>
        <Route path="/day" element = {<DCalendar/>}/>
         <Route path="/valentine" element = {<Valentine/>}/>
         <Route path="/login" element = {<Login/>}/>
         <Route path="/register" element = {<Register/>}/>
        
        
        
      </Routes>

    </main>
  )
}
