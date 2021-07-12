import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./componets/Appsidebar"
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./componets/dashboard__";
import { Component } from 'react';

class App extends Component {

  compnenetDidMount() {
    store.dispatch(loadUser());
  }
  
  render(){
  return (

    
    <Provider store={store}>
      <Router>
        <div className="App">
        {/* /header */}
          <Navbar />
          
          <Switch>
            <Container className="container">
              
              <Route path="/">
                <Dashboard/>
          </Route>
    
    
        </Container>
        </Switch>
        
      </div>
     
      </Router>
      </Provider>
 
  );
}
}

export default App;
