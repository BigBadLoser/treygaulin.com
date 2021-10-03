import React from 'react';
import {Box, Button} from 'grommet';
import '../../styles/social.scss';
import { Github, LinkedinOption, Twitter, Mail} from 'grommet-icons';
  
const Social = () => (
    <Box justify="center" direction="row" id="SocialBox">
      <Button href="https://Github.com/bigbadloser" className="SocialIcon" icon={ <Github size="35dp" /> } />
      <Button href="https://twitter.com/bigbadloser" className="SocialIcon" icon={ <Twitter size="35dp"   /> } />
      <Button href="https://www.linkedin.com/in/trey-gaulin-8b821421b/" className="SocialIcon" icon={ <LinkedinOption size="35dp" color="dark-6" /> } />
      <Button href="mailto:loserizer@gmail.com" icon={ <Mail size="35dp" className="SocialIcon" color="dark-6" /> } />
    </Box>
);

export default Social;