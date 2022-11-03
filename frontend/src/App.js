import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authontification/Login';
import Register from './pages/authontification/Register';
import DashbordAdmin from './pages/admin/DashbordAdmin';
import DashbordUser from './pages/users/DashbordUser';
import Ajoutervoyage from './pages/admin/Ajoutervoyage';
import ModifierVoyage from './pages/admin/ModifierVoyage';
import Afficherusers from './pages/admin/Afficherusers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'

function App() {
  return (
 <div>
    
  <ToastContainer />
  


    <Router>   
      <div className='container'>
        {/* tester is admin  */}
      
       <Header />
       
     <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/dashbordAdmin' element={<DashbordAdmin/>}/>
        <Route path='/users/dashbordUser' element={<DashbordUser/>}/>
        <Route path='/admin/ajoutervoyage' element={<Ajoutervoyage/>}/>
        <Route path='/admin/modifiervoyage/:id' element={<ModifierVoyage/>}/>
        <Route path='/admin/afficherusers' element={<Afficherusers/>}/>
     </Routes>
      </div>
    </Router>
     
    
    </div>
  );
}

export default App;
