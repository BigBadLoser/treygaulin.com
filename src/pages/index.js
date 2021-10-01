import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Social from "../components/social"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <hr />
    <Social />
  </Layout>
)

export default IndexPage

