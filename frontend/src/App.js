import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/DashBoard';

function App() {
  return (
   <>
    <Routes>
        <Route index element={<Login />}/>      
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />} >
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
    </Routes>
   </>
  );
}

export default App;
