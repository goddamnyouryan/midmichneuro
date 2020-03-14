import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

import Form from './form'

import { map, email, embed } from '../../constants/contact'

import title from '../../images/contact.png'

import style from "./index.module.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className={style.title}>
      <img src={title} alt="Title for Contact Page" />
    </div>
    <div className={style.container}>
      <div className={style.formContainer}>
        <h2 className={style.subtitle}>Send Us A Message:</h2>
        <Form email={email} />
      </div>
      <div className={style.mapContainer}>
        <h2 className={style.subtitle}>MidMichigan Neuropsychology Associates P.L.C.</h2>
        <a href={map}>
          4705 Towne Centre Road
          <br />
          Medical Arts I, Suite 304
          <br />
          Saginaw, MI 48604
        </a>
        <a href={map}>Get Directions</a>
        <div className={style.contact}>
          <strong>Phone:</strong> (989) 921-5100<br />
          <strong>Fax:</strong> (989) 921-5104<br />
          <strong>Email:</strong> <a href={'mailto:' + email}>{email}</a>
        </div>
        <iframe
          title='Google map embed'
          width="300"
          height="230"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={embed}/><small><a href={map}>View Larger Map</a></small>
      </div>
    </div>

  </Layout>
)

export default ContactPage
