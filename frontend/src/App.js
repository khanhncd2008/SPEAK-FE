import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
function App() {
  return (
   <>
    <Routes>
        <Route index element={<Login />}/>      
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />

    </Routes>
   </>
  );
}

export default App;
