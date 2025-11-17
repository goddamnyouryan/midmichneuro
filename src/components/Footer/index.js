import React from "react"
import Nav from '../Nav'

import style from "./index.module.css"

const links = [
  { name: 'Info', url: '/'},
  { name: 'About', url: '/about' },
  { name: 'Forms', url: '/forms' },
  { name: 'Links', url: '/links' },
  { name: 'Contact', url: '/contact' }
]

const Footer = () => (
  <footer className={style.footer + ' container'}>
    <div className={style.copyright}>
      Copyright ©{new Date().getFullYear()}{' '}
      MidMichigan Neuropsychology Associates, PLC.
      All rights reserved
    </div>
    <Nav className={style.nav} links={links} />
  </footer>
)

export default Footer
