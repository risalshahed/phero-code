
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './components/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

// npm i react-router-dom

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='/orderreview' element={<OrderReview />} />
        <Route path='/grandpa' element={<Grandpa />} />
      </Routes>
      
    </div>
  )
}

export default App;
