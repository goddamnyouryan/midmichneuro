import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import Markdown from "../../components/Markdown"

import style from "./index.module.css"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className={style.about}>
      <Markdown path='/about' />
    </div>
  </Layout>
)

export default AboutPage
