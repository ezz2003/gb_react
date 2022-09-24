import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from '@emotion/react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const orangeTheme = createTheme({
  palette: {
    mode: 'light',
    primary:
    {
      main: '#ffa420'
    },
    secondary: {
      main: '#e32a'
    },
    background: {
      paper: '#fff7f0',
      default: '#77f'
      
    },
    text: {
      primary: "#523100"
    },
    

  },

})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={orangeTheme}>
    {/* {console.log(orangeTheme)} */}

    <App />

    </ThemeProvider>
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
