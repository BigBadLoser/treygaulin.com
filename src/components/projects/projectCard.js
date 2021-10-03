import React from 'react';

import {Box, Text, Button} from 'grommet';
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import ShareBoxIcon from 'remixicon-react/ShareBoxFillIcon';
import '../../styles/projects.scss';
import Data from '../../data/Projects.yaml';
import Link from '../../components/link'
import images from '../../static/images';
import testImage from '../../static/dungeonmaster.png'

//{images[props.name]

const ProjectCard = (props) =>(
    <Box className="projectBox" direction="row-responsive">
        <Box className="imgBox">
            <img class="projectimg" src={images[props.name]} />
        </Box>
        <Box className="projectText">
            <h3 class="projectTitle">{Data[props.name].title}</h3>
            <p>{Data[props.name].desc}</p>
            <Box direction="row" gap="small" align="center" className="tags">
                {Data[props.name].tags.map((data, index) => {
                return <li key={`${Data[props.name]}_tags_${index}`}>{data}</li>
                })}
            </Box>
            <Box className="iconLinks" gap="small" direction="row">
                <a href={["https://github.com/BigBadLoser/" + Data[props.name].repo]}><GithubLineIcon className="icon" size="1em" /></a>
                <a href={[Data[props.name].live]}><ShareBoxIcon className="icon" size="1em" /></a>
            </Box>
        </Box>
    </Box>
);

export default ProjectCard;