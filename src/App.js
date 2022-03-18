import logo from './logo.svg';
import './App.css';
import Login from './Login';
import DataTable from './DataTable';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';
import FormSubmission from './FormSubmission';
import ReactDOM from "react-dom";
import { BrowserRouter , Routes,Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/" element={<SideMenu />}>
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="form-submission" element={<FormSubmission/>}/>
            <Route path="data-table" element={<DataTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
