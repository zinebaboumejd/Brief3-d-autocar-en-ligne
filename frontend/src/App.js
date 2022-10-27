import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authontification/Login';
import Register from './pages/authontification/Register';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
// fetch('http://localhost:5000/api')
// .then((response) =>{
//     console.log(response)
// })
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
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

     </Routes>

      </div>
    </Router>
     
    
    </div>
  );
}

export default App;
