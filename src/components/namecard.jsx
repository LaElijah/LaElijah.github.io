import React, { Component} from 'react';
import { Card, Typography, ButtonGroup, Button, bottomNavigationActionClasses, Box} from '@mui/material';
import { borders } from '@mui/system';

export class namecard extends Component {
  render() {
    return (
      <div className="namecard">
        <Box className="test">
        <Card className="card-pg1" variant="outlined" sx={{ border: "1px solid #BCB0A1" }} >
            {/* <Typography variant="h6" className="tag">
                Hi! My name is
                </Typography>       */}
            <Box className="top-pan">
            <Typography variant="h1" className="name-top">
                Elijah Allotey.
            </Typography>
            </Box>
            <Box className="bttm-pan">
            <Typography variant="h2" className="name-bottom">
                I'm a Full Stack Developer!
            </Typography>
            </Box>
            <Typography variant="subtitle1" className="intro-text">
            As a Full Stack developer, my focus is exemplified with my sufficiency in fabricating websites,
            and applications in a multitude of languages optimized for the clients needs.
            </Typography>
            <Box className="contact-btn-wrap">
                <Button variant="contained" className="contact-btn" color="secondary">
                Lets Talk!
                </Button>
            </Box>
            
        </Card>
        </Box>
      </div>
    )
  }
}

// this component should not have a border to make use of
// negative space, there should be specific borders
// specifically around each of the projects, with space
// aligining with the upper and lower page


export default namecard;