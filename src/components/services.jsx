import React, { Component } from 'react';
import { Card, Typography, Avatar, ListItem, ListItemText, Box } from '@mui/material';
import FolderIcon from "@mui/icons-material/Folder";
import { Icon } from '@iconify/react';

export class services extends Component {
  render() {
    return (
      <div className= "services">

<Box className="services-main-box2" variant="outlined" >
        <Card className="services-card-2" variant="outlined" sx={{ border: "1px solid #BCB0A1" }}>
            <Typography variant="h2" className="service-title-2">
            How I Plug In
            </Typography>
            <Typography variant="subtitle2" className="service-text-2">
            I bring together a multitude of technologies to produce software that solves problems
            </Typography>
            <Box className="tech-wrapper">
                <Box className="lang-list">

                    <ListItemText className="list-group-item"> - HTML </ListItemText>

                    <ListItemText className="list-group-item"> - CSS </ListItemText>
                    <ListItemText className="list-group-item"> - Javascript </ListItemText>
                    <ListItemText className="list-group-item"> - Python </ListItemText>
                    <ListItemText className="list-group-item"> - SQL </ListItemText>
                </Box>
                <Box className="services-list">
                    <ListItemText className="list-group-item"> - Git </ListItemText>
                    <ListItemText className="list-group-item"> - Bash </ListItemText>
                    <ListItemText className="list-group-item"> - React </ListItemText>
                    <ListItemText className="list-group-item"> - MongoDB </ListItemText>
                    <ListItemText className="list-group-item"> - npm </ListItemText>
                </Box>
            </Box>
            
        </Card>
        </Box>



        <Box className="services-main-box1" variant="outlined" >
        <Card className="services-card-1" variant="outlined">
          <Box className="service-title">

          
            <Typography className="service-title-1" variant="h2">
            Software Used
            </Typography>

            </Box>
            <Box className="icon-list">
            <Avatar>
            <Icon icon="mdi:trello" color="secondary"/>
            </Avatar>
            
            <Avatar>
            <Icon icon="ph:figma-logo" />
            </Avatar>

            <Avatar>
            <Icon icon="mdi:slack" />
            </Avatar>
            </Box>
            
            <Box className="icon-list">
            <Avatar>
            <Icon icon="mdi:github" />
            </Avatar>
            
            <Avatar>
            <Icon icon="simple-icons:jest" />
            </Avatar>
            </Box>

            <Box className="icon-end">
              <Typography>
                I use these tools to help my design flow, and integrate with teams efficiently.
              </Typography>
              </Box>

            
            
            

        </Card>
        </Box>


        
        

        
      </div>
    )
  }
}

export default services;