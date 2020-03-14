import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

import title from '../../images/links.png'

import style from "./index.module.css"

const AboutPage = () => (
  <Layout>
    <SEO title="Links" />
    <div className={style.title}>
      <img src={title} alt="Title for Links Page" />
    </div>
    <ul>
      {links.map((link, index) => (
        <li className={style.item} key={index}>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  </Layout>
)

const links = [
  {
    link: 'http://www.saginawcounty.com/Coa/Default.aspx',
    name: 'Saginaw County - Commission on Aging',
  },
  {
    link: 'http://www.baycounty-mi.gov/aging/',
    name: 'Bay County - Division on Aging',
  },
  {
    link: 'http://www.alz.org/index.asp',
    name: 'Alzheimer’s Disease and Related Disorder Association',
  },
  {
    link: 'http://www.apdaparkinson.org/userND/index.asp',
    name: 'American Parkinson’s Disease Association',
  },
  {
    link: 'http://www.biusa.org/michigan',
    name: 'Michigan Brain Injury Association',
  },
  {
    link: 'http://www.nationalmssociety.org/index.aspx',
    name: 'National Multiple Sclerosis Society',
  },
  {
    link: 'http://www.braintumor.org/GeneralMenu/',
    name: 'National Brain Tumor Society',
  },
  {
    link: 'http://www.epilepsyfoundation.org/',
    name: 'National Epilepsy Foundation',
  },
  {
    link: 'http://www.stroke.org/site/PageNavigator/HOME',
    name: 'National Stroke Foundation',
  },
  {
    link: 'http://www.cdc.gov/concussion/index.html',
    name: 'CDC Concussion and Mild TBI',
  },
  {
    link: 'http://www.seniorservicesmidland.org/',
    name: 'Midland County Council on Aging',
  },
  {
    link: 'http://lighthouserehab.com/',
    name: 'The Lighthouse Neurological Rehabilitation Center',
  },
  {
    link: 'https://riversbendrehabilitation.com/',
    name: 'Riversbend Rehabilitation',
  },
  {
    link: 'http://americanbrainfoundation.org/',
    name: 'American Brain Foundation',
  },
]

export default AboutPage
