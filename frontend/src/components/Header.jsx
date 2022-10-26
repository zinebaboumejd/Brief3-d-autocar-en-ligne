import React from 'react'
import {FaSignInAlt, FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css';
import '../index.css';
function Header() {
  return (
    <nav class="nav font-semibold text-lg">
    <ul class="flex items-center">
        <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
        <Link to="/">HOME</Link>
        </li>
        <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
        <Link to="/login"><FaSignInAlt/>Login</Link>
        </li>
        <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
        <Link to="/register"> <FaUser/>Register </Link>
        </li>
        <li class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
        <Link to="/">Home</Link>
        </li>
    </ul>
</nav>

    // <header className="header">
  
    //  <Link to="/"> home</Link>
    //  <ul>
    //     <li>
    //     <Link to="/login"><FaSignInAlt/>Login</Link>
    //     </li>
    //     <li> 
    //         <Link to="/register">
    //             <FaUser/>Register
    //         </Link>
    //     </li>
    //  </ul>
    // </header>
  )
}

export default Header