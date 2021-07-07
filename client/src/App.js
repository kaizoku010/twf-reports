import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./componets/Appsidebar"
import ReportList from "./componets/Entrylist";
import { Provider } from "react-redux";
import store from "./store";
import AddReportBtn from "./componets/ReportModel";
import { Container } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Provider store ={store}>
      <div className="App">
        {/* /header */}
        <Navbar />
        {/* body */}

        <Container className="container">
          {/* adding contenr btn */}
          <AddReportBtn />
          {/* main content */}
        <ReportList />
        </Container>

        
      </div>
      </Provider>
      </Router>
  );
}

export default App;
