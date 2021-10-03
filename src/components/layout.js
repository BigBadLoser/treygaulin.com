import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.scss"
import { Grommet, Anchor, Box, Footer, Text } from "grommet"
import { grommet } from "grommet/themes"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet
      theme={grommet}
      full
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box as="main" pad="medium" flex overflow="auto">
        {children}
      </Box>
    </Grommet>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout