import React, { Component } from 'react';
import { Button, Typography, AppBar } from '@mui/material';
// import { motion } from "framer-motion";

export class viewhead extends Component {
  render() {
    return (
      <div className="viewhead-wrapper">
        <Typography className="title">
            Portfolio
        </Typography>
    <Button className = "btn-1"> About </Button>
    <Button className = "btn-2"> Projects </Button>
    <Button className = "btn-3"> Contact Me </Button>
        </div>
    )
  }
}

export default viewhead;