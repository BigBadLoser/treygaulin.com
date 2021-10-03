import React from 'react';
import {Box, Heading, Text, Button, ThemeContext} from 'grommet';
import styled from "styled-components"
import '../../styles/hero.scss';


const links = {}

const ActionButton = styled(Button)`
    transition: transform 0.3s ease-in-out;
    font-size: medium;

    &.RedCTA:hover {
      color: white;
      box-shadow: 0 7px 14px 0 rgba(255, 90, 110, .3) , 0 3px 6px 0 rgba(255, 90, 110, .3);
    }
    &.BlueCTA:hover {
      color: white;
      box-shadow: 0 7px 14px 0 rgba(92, 106, 230, 0.3); , 0 3px 6px 0 rgba(92, 106, 230, 0.3);;
    }
  `;

  const customBreakpoints =  {
    global: {
      breakpoints: {
        small: {
          value: 450
        },
        medium: {
          value: 900
        },
        large: 3000
      }
    }
  };
  
const Hero = () => (
    <Box justify="center" align="center" className="hero" direction="column">
      <h1>Hello! 👋  I'm Trey Gaulin</h1>
      <Text fill="true" size="xlarge" margin={{vertical:"2.5vh"}}>Developer and Student at Georgia Southern</Text>
      <ThemeContext.Extend value={customBreakpoints}>
      <Box direction="row-responsive" breakpoint="small" gap="4em" align="center" id="HeroButtons">
        <ActionButton className="RedCTA" size="large" primary color="#fe183e" label="My Resume" />
        <Box className="Link"><ActionButton className="BlueCTA" size="large" primary color="#330ae1" label="My Projects" /></Box>
      </Box>
      </ThemeContext.Extend>
    </Box>
);

export default Hero;