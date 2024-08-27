import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from './components/Header';
import AddEmployeePage from './pages/AddEmployeePage';
import EmployeeList from './pages/EmployeeList';
import Employee from './pages/Employee';
import UpdateEmployee from './pages/UpdateEmployee';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<EmployeeList/>}/>
          <Route path='/add' element={<AddEmployeePage/>}/>
          <Route path='/employee/:id' element={<Employee/>}/>
          <Route path='/update/:id' element={<UpdateEmployee/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
