import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import teal from '@material-ui/core/colors/teal';
import indigo from '@material-ui/core/colors/indigo';
const theme= createMuiTheme({
  palette: {
    primary: teal,
    secondary: {
      main: indigo[400],
      light: '#E8EAF6',
      dark: indigo.A200
    },
    //type: 'dark'
  }
});
console.log(theme);


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
