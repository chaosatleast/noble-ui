import logo from './logo.svg';
import Login from './Login';
import './App.css';
import Customer from './Customer';
import ReactDOM from "react-dom";
import { BrowserRouter , Routes,Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
