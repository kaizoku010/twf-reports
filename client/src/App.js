import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./componets/Appsidebar"
import ReportList from "./componets/Entrylist";
import { Provider } from "react-redux";
import store from "./store";
import AddReportBtn from "./componets/ReportModel";
import { Container } from "reactstrap";

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        {/* /header */}
        <Navbar />
        {/* body */}
        <Container>
        <AddReportBtn/>
        <ReportList />
        </Container>
      </div>
      </Provider>
  );
}

export default App;
