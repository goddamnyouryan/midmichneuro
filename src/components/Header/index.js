import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../Nav"

import style from "./index.module.css"

const links = [
  { name: 'Info', url: '/'},
  { name: 'About', url: '/about' },
  { name: 'Forms', url: '/forms' },
  { name: 'Links', url: '/links' },
  { name: 'Contact', url: '/contact' }
]

const Header = ({ siteTitle }) => (
  <header className={style.header + ' container'}>
    <h1 className={style.title}>
      <Link className={style.logo}to="/">{siteTitle}</Link>
    </h1>
    <Nav className={style.nav} links={links} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
