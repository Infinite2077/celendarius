import React from 'react'
import style from "./footer.module.scss"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <h3>&copy; Master plan inc. All this is our {new Date().getFullYear()}</h3>
    </footer>
  )
}
