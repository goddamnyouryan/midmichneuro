import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "../Nav"

import style from "./index.module.css"

const Header = ({ siteTitle }) => (
  <header className={style.header}>
    <h1 className={style.title}>
      <Link className={style.logo}to="/">{siteTitle}</Link>
    </h1>
    <Nav className={style.nav} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
