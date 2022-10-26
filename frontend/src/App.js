import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header'

function App() {
  return (
    <div >
    {/* <h1 className="text-3xl font-bold underline bg-orange-600">
      Hello world!
    </h1> */}

    <Router>
      <div className='container'>
        <Header />
     <Routes>
        <Route path='/' element={<Home/>} className="text-3xl font-bold underline bg-orange-600"/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

     </Routes>
      </div>
    </Router>
     
    </div>
  );
}

export default App;
