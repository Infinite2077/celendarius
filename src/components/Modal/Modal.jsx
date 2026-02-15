import {useEffect, useState, useRef, useContext} from 'react'
import style from "./Modal.module.scss"
import { BsCalendarX } from "react-icons/bs";
import { ContextStore } from '../../store/ContextStore';
import { useForm } from "react-hook-form";

export default function Modal (props) {
    

    let { addEvent } = useContext(ContextStore)

    let {register, handleSubmit, formState: {errors}, reset} = useForm()

    const submit = (data) => {
        console.log(data)
        addEvent(data)
        props.open(false)
        reset()
    }


    

  return (
    <div className={style.wrapper} 
        onClick={(e)=>{
            if(e.target === e.currentTarget) props.open(false)
        }}
    >
        <form onSubmit ={handleSubmit(submit)} className={style.inner}>
            <button className={style.closeButton} onClick={()=>props.open(false)}>
                <BsCalendarX />
            </button>
            <h1>Додати подію</h1>
            <section>
                <label htmlFor="title">Назва події</label>
                <input type="text" name='title' id='title' {...register("title",{

                    required: true,
                    minLength: 3,
                    maxLength: 40,
                    pattern: {
                        value: /^[a-zA-Z0-9/s]*$/,
                        message: "Only letters or numbers"

                    },
                    message: "Wrong title"
                })}
                
                />
                <div className={style.error}ref={titleRef}>Назва закоротка</div>
            </section>
             <section>
                <label htmlFor="date">Дата події</label>
                <input type="date" name='date' id='date' {...register("data",({
                    
                required:{
                    value: true,

                }
            }))}
                />
                <div className={style.error} ref={dateRef}>Дата не встановлена</div>
            </section> <section>
                <label htmlFor="time">Час події</label>
                <input type="time" name='time' id='time' {...register("time")}
       
                />
                <div className={style.error} ref={timeRef}>Час не встановлений</div>
            </section> <section>
                <label htmlFor="color">Колір події</label>
                <input type="color" name='color' id='color' {...register("color",{value: "#0000"})}
                 
                />
            </section>
            <section>
                {(errors.title || errors.date || errors.time) && (
                    <span className={style.error}>
                    {errors.title?.message}
                    {errors.date?.message}
                    {errors.time?.message}
                    
                    </span>
                )}
            </section>
            <button type="submit" disabled={errors.title || errors.date || errors.time}>Додай подію</button>
        </form>
    </div>
  )
}
