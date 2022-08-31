import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import 'aos/dist/aos.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
