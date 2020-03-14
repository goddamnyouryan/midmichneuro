import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

import { map } from '../../constants/contact'

import style from "./index.module.css"

import history from '../../forms/history.pdf'
import hipaa from '../../forms/hipaa.pdf'
import consent from '../../forms/consent.pdf'

const FormsPage = () => (
  <Layout>
    <SEO title="Forms" />
    <h1 className={style.title}>Forms</h1>
    <ul className={style.list}>
      <li>
        <a href={history}>Adult Patient History</a>
      </li>
      <li>
        <a href={hipaa}>HIPAA Privacy Notice</a>
      </li>
      <li>
        <a href={consent}>Consent to Release Information</a>
      </li>
      <li>
        <a href={map}>Map to the MidMichigan Neuropsychology Offices</a>
      </li>
    </ul>
  </Layout>
)

export default FormsPage
