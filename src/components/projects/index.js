import React from 'react';
import {Box, Heading, Text} from 'grommet';


import ProjectCard from './projectCard.js';

//SHARE
  
const Projects = () => (
    <Box direction="column" id="Projects" alignSelf="center">
      <h2 id="projectTitle">Projects.</h2>
        <ProjectCard name="portfolio" />
        <ProjectCard name="dungeonMaster" />
        <ProjectCard name="iosApp" />
    </Box>
);

export default Projects;

//