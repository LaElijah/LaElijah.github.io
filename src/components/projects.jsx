import React, { Component } from 'react';
import { Card, Typography, ButtonGroup, Button, bottomNavigationActionClasses, Box} from '@mui/material';

export class projects extends Component {
  render() {
    return (
    <div className="project-element">
      <Box className="project-main-box" variant="outlined" >
        <Box className="project-tag" >
            <Typography variant="h2" sx={{ color: "#fff" }}>
                Projects
            </Typography>
        </Box>
        <Box className="project-wrap" >
            <Box className="top-layer">
                <Box className="proj-box-1">
                    <Card className="proj-card-1" variant="outlined">
                        <Typography variant="h3">
                            PlaceHolder
                        </Typography>
                    </Card>
                </Box>
                <Box className="proj-box-2">
                    <Card className="proj-card-2" variant="outlined">
                        <Typography variant="h3">
                            PlaceHolder
                        </Typography>
                    </Card>
                </Box>
            </Box>
            <Box className="bottom-layer">
                <Box className="proj-box-3">
                    <Card className="proj-card-3" variant="outlined">
                        <Typography variant="h3">
                            PlaceHolder
                        </Typography>
                    </Card>
                </Box>
                <Box className="proj-box-4">
                    <Card className="proj-card-4" variant="outlined">
                        <Typography variant="h3">
                            PlaceHolder
                        </Typography>
                    </Card>
                </Box>   
            </Box>    
        </Box>
      </Box>
    </div>
    )
  }
}

export default projects;