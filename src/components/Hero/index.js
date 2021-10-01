import React from 'react';
import {Box, Heading, Text, Button} from 'grommet';
import styled from "styled-components"
import '../../styles/hero.scss';
import Link from "../link"

const links = {}

const ActionButton = styled(Button)`
    font-size: medium;
  `;
  
const Hero = () => (
    <Box justify="center" align="center" margin="large">
      <Heading level="1"margin="none">Hello! 👋  I'm Trey Gaulin</Heading>
      <Text fill="true" size="xlarge" margin="medium">Developer and Student at Georgia Southern</Text>
      <Box direction="row" gap="large">
        <Link to="/projects/"><ActionButton size="large" primary color="#fb433a" label="My Resume" /></Link>
        <Link to="/projects/"><ActionButton size="large" round="xlarge" primary color="#148aef" label="My Projects" /></Link>
      </Box>
    </Box>
);

export default Hero;