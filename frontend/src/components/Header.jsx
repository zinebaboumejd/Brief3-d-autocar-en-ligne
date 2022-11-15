import React from 'react'
import {FaSignInAlt
  // ,FaUser
} from 'react-icons/fa'
import {Link, useNavigate } from 'react-router-dom';


import '../App.css';
import '../index.css';
function Header() {
  const Navigate=useNavigate();
  // logout function
  function logout(){
    const isAdmin=localStorage.getItem('isAdmin');
    
    console.log(isAdmin);
    // tester si un valeu existe dans le local storage puor afficher le bouton logout

    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("admin_id");
    localStorage.removeItem("datedepart");
    localStorage.removeItem("destination");
    localStorage.removeItem("origine");
    localStorage.removeItem("idvoyage");
    Navigate("/login")
  }
  return (
 <div className='static'>
  <div className="flex flex-wrap absolute">
    <div className="w-screen">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-900 rounded">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <Link to='/' className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
             sup Autocar
            </Link>
            <button className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div> 
          <div className="flex lg:flex-grow items-center" id="example-navbar-info">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
            <Link to='/'  className="text-indigo-900 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
            Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/voyage' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                 List Voyages </Link>
              </li>
           {
              localStorage.getItem('token')?
              <li className="nav-item">
              <button  onClick={logout}
              className="rounded-md  bg-indigo-600 hover:bg-indigo-500 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
               <FaSignInAlt/>Déconnexion
        </button> 
            </li>
              :
              <>
             <li className="nav-item">
                <Link to='/login' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                 Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/register' className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                register
                </Link>
              </li>
              </>        
           }        
  
            </ul>
      
          </div>
        </div>
      </nav>
    </div>
  
    </div>

</div>




    
  )
}

export default Header