import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from "@mui/material";
import App from './App';


const theme = createTheme({
  
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      main: "#000",
      contrastText:"#fff"
    },
    secondary: {
      main: "#BCB0A1",
      contrastText:"#000"
    },
    background: {
      paper: "#000",
      
    },
    text: {
      primary: "#fff"

    },
    
  },
  
  
  
  }
    
    

  
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

