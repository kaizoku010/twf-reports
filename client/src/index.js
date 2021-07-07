import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./componets/Appsidebar";
import Low_Dash from "./componets/dashboard/dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<React.StrictMode>
       <Router>
      <Header>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/low_dash" component={Low_Dash} />        
      </Switch>
      </Header>
    </Router>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
