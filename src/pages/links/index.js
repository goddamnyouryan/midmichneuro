import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

import title from '../../images/links.png'

import { links } from '../../constants/links'

import style from "./index.module.css"

const LinksPage = () => (
  <Layout>
    <SEO title="Links" />
    <div className={style.title}>
      <img src={title} alt="Title for Links Page" />
    </div>
    <ul>
      {links.map((link, index) => (
        <li className={style.item} key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </Layout>
)

export default LinksPage
