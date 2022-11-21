import React, { Component } from 'react';

import { Typography, Card, CardContent, TextField, Button, Box, Grid } from '@mui/material';

export class test extends Component {
    render() {
        return (
            <div className="App">
                <Typography gutterBottom variant="h3" align=
                    "center">
                    React-App
                </Typography>
                <Card style={{ maxWidth:450, margin: "0 auto",padding:"20px 5px"}}>
                    <CardContent>
                        <form>
                            <Grid container spacing={1}>
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
                                    <Button type="submit" variant="contained">Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default test;