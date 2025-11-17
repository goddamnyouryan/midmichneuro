import React from "react"
import Nav from '../Nav'

import style from "./index.module.css"

const Footer = () => (
  <footer className={style.footer + ' container'}>
    <div className={style.copyright}>
      Copyright ©{new Date().getFullYear()}{' '}
      MidMichigan Neuropsychology Associates, PLC.
      All rights reserved
    </div>
    <Nav className={style.nav} />
  </footer>
)

export default Footer
