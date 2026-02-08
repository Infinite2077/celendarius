import {useEffect, useState, useRef, useContext} from 'react'
import style from "./Modal.module.scss"
import { BsCalendarX } from "react-icons/bs";
import { ContextStore } from '../../store/ContextStore';

export default function Modal (props) {
    

    let { addEvent } = useContext(ContextStore)


    

  return (
    <div className={style.wrapper} 
        onClick={(e)=>{
            if(e.target === e.currentTarget) props.open(false)
        }}
    >
        <div className={style.inner}>
            <button className={style.closeButton} onClick={()=>props.open(false)}>
                <BsCalendarX />
            </button>
            <h1>Додати подію</h1>
            <section>
                <label htmlFor="title">Назва події</label>
                <input type="text" name='title' id='title' 
                
                />
                <div className={style.error}ref={titleRef}>Назва закоротка</div>
            </section>
             <section>
                <label htmlFor="date">Дата події</label>
                <input type="date" name='date' id='date' 
          
                />
                <div className={style.error} ref={dateRef}>Дата не встановлена</div>
            </section> <section>
                <label htmlFor="time">Час події</label>
                <input type="time" name='time' id='time' 
       
                />
                <div className={style.error} ref={timeRef}>Час не встановлений</div>
            </section> <section>
                <label htmlFor="color">Колір події</label>
                <input type="color" name='color' id='color' 
                 
                />
            </section>
            
        </div>
    </div>
  )
}
