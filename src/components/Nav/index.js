import { Link } from "gatsby"
import React from "react"

import style from "./index.module.css"

const Nav = ({ className, links }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <li className={style.item} key={index}>
        <Link className={style.link} to={link.url}>{link.name}</Link>
      </li>
    ))}
  </ul>
)

export default Nav
