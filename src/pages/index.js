import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/SEO"
import MarkdownContent from "../components/MarkdownContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MarkdownContent path='/index' />
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
