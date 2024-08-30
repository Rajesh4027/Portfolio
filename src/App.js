import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Hero from './components/Hero';

import Login from './Email Auth/Login'
import Register from './Email Auth/Register'
import Home from './Email Auth/Home';

function App() {
  return (
    <div className="App">
      
      


      

      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Hero />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/Register' element={<Register />}></Route>
          </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
}

export default App;
