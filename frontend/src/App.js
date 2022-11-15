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
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Voyage from './pages/users/Voyage'
import Reservation from '../src/pages/users/Rservation';
function App() {
  return (
 <div>
     {/* <div className='container'> */}
  <ToastContainer />

    <Router>   
     
        {/* tester is admin  */}
       
      {
        localStorage.getItem('isAdmin') === 'true' ? (   
             <Navbar />     
        ) : (
          <Header />
        )
      }
     
      
     <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin/dashbordAdmin' element={<DashbordAdmin/>}/>
        <Route path='/users/dashbordUser' element={<DashbordUser/>}/>
        <Route path='/admin/ajoutervoyage' element={<Ajoutervoyage/>}/>
        <Route path='/admin/modifiervoyage/:id' element={<ModifierVoyage/>}/>
        <Route path='/admin/afficherusers' element={<Afficherusers/>}/>
        <Route path='/voyage' element={<Voyage/>}/>
       <Route path='/reservation' element={<Reservation/>}/>
     </Routes>
    
    </Router>
 
          <Footer></Footer>       
     
   
     </div>
    // </div>
  );
}

export default App;
