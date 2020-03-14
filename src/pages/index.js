import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Markdown from "../components/Markdown"
import info from '../images/info.png'
import allForms from '../forms/all-forms.pdf'

import style from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={style.map}>
      <img src={info} useMap="#info-map" alt="Nav links for MNA Site" />
      <map name="info-map">
        <area shape="rect" coords="701,20,944,90" href="/about" alt="About Link" />
        <area shape="rect" coords="703,114,944,183" href="/contact" alt="Contact Link" />
        <area shape="rect" coords="702,211,943,278" href={allForms} alt="Forms Link" />
      </map>
    </div>
    <Markdown path='/info' />
  </Layout>
)

export default IndexPage
