import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Nav from "../components/Nav"
import Markdown from "../components/Markdown"
import info from '../images/info.png'
import allForms from '../forms/all-forms.pdf'

import style from "./index.module.css"

const links = [
  { name: 'Learn More', url: '/about'},
  { name: 'Make an Appointment', url: '/contact' },
  { name: 'Print Forms', url: '/forms' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />.
    <div className={style.retirement}>
      <p>
        Dr. MacInnes and Zigmond Kozicki have retired as of
        <strong> July 31, 2026</strong>.
        {' '}
        We are no longer accepting new patient referrals.
        {' '}
        Unfortunately, there are no other neuropsychologists in the Tri-City area.
      </p>
      <p>
        If you need neuropsychological records from a previous 
        evaluation that we have conducted please contact Kristen,
        our office manager, at <a href="tel:989-921-5100">989-921-5100</a>.
        You can also contact her by email at
        <a href="mailto:neuropsych@mnabrain.com"> neuropsych@mnabrain.com</a>.
        She will be our long-term custodian of records.
      </p>
    </div>

    <div className={style.map}>
      <img src={info} useMap="#info-map" alt="Nav links for MNA Site" />
      <map name="info-map">
        <area shape="rect" coords="701,20,944,90" href="/about" alt="About Link" />
        <area shape="rect" coords="703,114,944,183" href="/contact" alt="Contact Link" />
        <area shape="rect" coords="702,211,943,278" href={allForms} alt="Forms Link" />
      </map>
    </div>

    <div className={style.alternativeToMap}>
      <div className={style.doctor}>
        <h2>William D. MacInnes Ph.D</h2>
        <h3>Diplomate in Clinical Neuropsychology</h3>
        <h3>American Board of Neuropsychology</h3>
      </div>

      <div className={style.doctor}>
        <h2>Zigmond Kozicki, MA, MSHA</h2>
        <h3>Limited License Psychologist</h3>
      </div>

      <Nav className={style.altNav} links={links} />
    </div>

    <div className={style.covid}>
      We are pleased to announce that are entire staff has been fully vaccinated against Covid-19.
      Our office follows CDC guidelines regarding safe practices regarding the Covid virus.
      We clean all surfaces and testing materials regularly and we maintain social distancing guidelines at all times.
      We require all patients and their families to wear face masks while in our office.
      We also require every patient to have at least one Covid-19 vaccination to be seen in our office as we do have 
      immune-compromised staff.
    </div>
    <Markdown path='/info' />
  </Layout>
)

export default IndexPage
