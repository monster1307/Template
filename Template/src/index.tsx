import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Helpers
import { History } from 'Helpers';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render((
  <Router history={History}>
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <App />
        </CssBaseline>
    </ThemeProvider>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
