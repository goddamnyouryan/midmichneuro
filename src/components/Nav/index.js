import { Link } from "gatsby"
import React from "react"

import style from "./index.module.css"

const Nav = ({ className }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <li className={style.item} key={index}>
        <Link className={style.link} to={link.url}>{link.name}</Link>
      </li>
    ))}
  </ul>
)

const links = [
  { name: 'Info', url: '/'},
  { name: 'About', url: '/about' },
  { name: 'Forms', url: '/forms' },
  { name: 'Links', url: '/links' },
  { name: 'Contact', url: '/contact' }
]

export default Nav
