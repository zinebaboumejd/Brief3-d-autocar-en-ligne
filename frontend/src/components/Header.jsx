import React from 'react'
import {FaSignInAlt,FaUser} from 'react-icons/fa'
import {Link, useNavigate } from 'react-router-dom'

import '../App.css';
import '../index.css';
function Header() {
  const Navigate=useNavigate();
  // logout function
  function logout(){
   
    localStorage.clear()
    Navigate("/login")
  }
  return (
    <nav className='nav font-semibold text-lg'>
    <ul className='flex items-center'>
        <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active'>
        <Link to='/'>HOME</Link>
        </li>
        <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
        <Link to='/login'><FaSignInAlt/>Login</Link>
        </li>
        <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
        <Link to='/register'> <FaUser/>Register </Link>
        </li>
        <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
        <Link to='/'>Home</Link>
        </li>
        <li className='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
       <button  onClick={logout}
       className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
        <FaSignInAlt/>Déconnexion
        </button>
        </li>
    </ul>
</nav>

    // <header className='header'>
  
    //  <Link to='/'> home</Link>
    //  <ul>
    //     <li>
    //     <Link to='/login'><FaSignInAlt/>Login</Link>
    //     </li>
    //     <li> 
    //         <Link to='/register'>
    //             <FaUser/>Register
    //         </Link>
    //     </li>
    //  </ul>
    // </header>
  )
}

export default Header