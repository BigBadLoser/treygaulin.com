import Link from "../link"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import { Nav, Heading, Button, ThemeContext } from "grommet"
import '../../styles/nav.scss';

  

const Header = ({ siteTitle }) => (

  <Nav direction="row" justify="center" pad="large" gap="xlarge">
    <Link margin="xxlarge" to="/projects/"><Button className="NavButton" plain label="Projects" color="#AEAEAE"/></Link>
    <Link to="/projects/"><Button className="NavButton" plain label="Skills" color="#AEAEAE"/></Link>
    <Link to="/projects/"><Button className="NavButton" plain label="About" color="#AEAEAE"/></Link>
    <Link to="/projects/"><Button className="NavButton" plain label="Contact" color="#AEAEAE"/></Link>
  </Nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header