import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from '../src/Components/Users/Content/Home'
import Login from '../src/Components/Admin/Pages/Login.js'
import SignUP from '../src/Components/Admin/Pages/SignUp.js'
import ForgotPassword from '../src/Components/Admin/Pages/ForgotPassword.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUP />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
