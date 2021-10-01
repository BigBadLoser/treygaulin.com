import React from 'react';
import {Box, Heading, Text, Button} from 'grommet';
import styled from "styled-components"
import '../../styles/hero.scss';
import Link from "../link"
import { Github, LinkedinOption, Twitter, Mail} from 'grommet-icons';


const SButton = styled(Button)`
    &:hover > * {
        fill:black;
    }
  `;


  
const Social = () => (
    <Box justify="center" align="center" gap="large" direction="horizontal">
      <SButton href="https://Github.com/bigbadloser" icon={ <Github size="35dp" color="dark-6" /> } />
      <SButton href="https://twitter.com/bigbadloser" icon={ <Twitter size="35dp" color="dark-6"  /> } />
      <SButton href="https://www.linkedin.com/in/trey-gaulin-8b821421b/" icon={ <LinkedinOption size="35dp" color="dark-6" /> } />
      <SButton href="mailto:loserizer@gmail.com" icon={ <Mail size="35dp" color="dark-6" /> } />
    </Box>
);

export default Social;