
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UpdateUser from './components/UpdateUser/UpdateUser';


function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='user/add' element={<AddUser />} />
        <Route path='update/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}
 
export default App;