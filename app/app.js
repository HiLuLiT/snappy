import 'cssrecipes-defaults/lib/document-remove-margin-padding.css';
import 'cssrecipes-defaults/lib/box-sizing.css';
import 'cssrecipes-defaults/lib/hidden.css';
import 'normalize.css/normalize.css';
import './assets/styles/main.scss';

import './assets/styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Root from './components/Root/Root';
import Admin from './components/Admin/Admin';

const muiTheme = getMuiTheme({
  textField: {
       focusColor: "#2CC6FF",
     },
 });

 
render(
  <BrowserRouter>
    <Switch>
     <MuiThemeProvider muiTheme={muiTheme}>
       <Route exact path="/" component={Root} />
       <Route exact path="/admin" component={ Admin }/>
     </MuiThemeProvider>,
    </Switch>
  </BrowserRouter>,
  document.querySelector('#app')
);
