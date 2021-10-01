import Link from "../components/link"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Nav, Heading, Button, ThemeContext } from "grommet"

const NavButton = styled(Button)`
  &:hover {
    color: black;
  }
  `;

const Header = ({ siteTitle }) => (

  <Nav direction="row" justify="center" pad="large" gap="xlarge">
    <Link margin="xxlarge" to="/projects/"><NavButton plain label="Projects" color="dark-6"/></Link>
    <Link to="/projects/"><NavButton plain label="About" color="dark-6"/></Link>
    <Link to="/projects/"><NavButton plain label="Contact" color="dark-6"/></Link>
  </Nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header