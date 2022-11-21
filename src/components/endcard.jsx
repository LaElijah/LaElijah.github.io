import React, { Component } from 'react';
import { TextField, Card, Typography, Box, Avatar, Button, Grid, CardContent} from '@mui/material';
import FolderIcon from "@mui/icons-material/Folder";
import { Icon } from '@iconify/react';

export class endcard extends Component {
  render() {
    
    return (
      <div>

        <Box className="endcard-wrap" >
        <Box className="end-note" sx={{ border: "1px solid #BCB0A1" }}>
            
            <Card className="contact-letter">
            <Typography className="contact-item" variant="h1">
                End Note
            </Typography>
            <Typography className="contact-letter" variant="subtitle1">
                I am open to Front-End and Full-Stack oppurtunities, especially regarding MERN development.
                 </Typography>
                 <Typography className="contact-email" variant="subtitle2">
                - Email: Elijah.Allotey.W@gmail.com
                 </Typography>
                 <Typography className="contact-phone" variant="subtitle2">
                - Phone: 612-501-7047
                 </Typography>
            </Card>

            <Box className="icon-bar">

                <Box className="icon-1">
                    <Box className="icon-1a">
                    <Avatar>
                    <Icon icon="mdi:github" />
                    </Avatar>
                    </Box>
                    <Box className="icon-1b">
                    <Typography color="white">
                    Github
                    </Typography>
                    </Box>
                </Box>

                <Box className="icon-2">
                    <Box className="icon-2a">
                    <Avatar>
                    <Icon icon="mdi:stack-overflow" />
                    </Avatar>
                    </Box>
                    <Box className="icon-2b">
                    <Typography color="white">
                    Stack Overflow
                    </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
        <Box className="end-note-contact" >
        
        <Card>
        <Typography className="contact-title" variant="h2">
            Contact Me
        </Typography>
                    <CardContent>
                        <form>
                            <Grid className="location" container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholer="Enter first name" variant="outlined" fullWidth required sx={{ label: { color: "#fff" } }} />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholer="Enter Last name" variant="outlined" fullWidth required sx={{ label: { color: "#fff" } }} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="email" label="Email" placeholer="Enter email" variant="outlined" fullWidth required sx={{ label: { color: "#fff" } }} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="number" label="Phone" placeholer="Enter phone number" variant="outlined" fullWidth required sx={{ label: { color: "#fff" } }} />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message" placeholer="Type your message here" variant="outlined" fullWidth required multiline rows={4} sx={{ label: { color: "#fff" } }} />
                                </Grid><Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="secondary">Click Here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                </Box>
                </Box>
        
      </div>

    )
  }
}

// This component should not have a border,
//  it should be side by side with a 35/65 
//  ratio withthe left being a note and links 
//  out and the right being the contact form.

export default endcard;