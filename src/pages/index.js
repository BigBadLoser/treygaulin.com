import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Social from "../components/social"
import Section from "../components/projects"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => (
    <div id="wrapper">
      <SEO title="Home" />
      <Header />
      <Hero />
      <Social />
      <Section />
      <Footer />
    </div>
)

export default IndexPage

