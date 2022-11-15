import React from 'react'
import { Link ,Navigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
function Navbar() {
  function logout(){
    const isAdmin=localStorage.getItem('isAdmin');
    
    console.log(isAdmin);
    // tester si un valeu existe dans le local storage puor afficher le bouton logout

    localStorage.clear()
    Navigate("/login")
  }
  return (
  <>
  

     <div class="bg-white  rounded-md">
        <div class="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md"
                x-show="profileOpen" x-transition>
                  
                </div>
  <aside class="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2" 
            x-show="asideOpen">
            <Link class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span class="text-2xl"><i class="bx bx-home"></i></span>
                <span>Dashboard</span>
          </Link>

            <Link class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span class="text-2xl"><i class="bx bx-cart"></i></span>
                <span>Cart</span>
          </Link>

            <Link class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span class="text-2xl"><i class="bx bx-shopping-bag"></i></span>
                <span>Shopping</span>
           </Link>

            <Link class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span class="text-2xl"><i class="bx bx-heart"></i></span>
                <span>My Favourite</span>
          </Link>

            <Link class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <span class="text-2xl"><i class="bx bx-user"></i></span>
                <span>Profile</span>
          </Link>
          <Link>
          <button  onClick={logout}
              className="rounded-md  bg-indigo-600 hover:bg-indigo-500 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
               <FaSignInAlt/>Déconnexion
        </button> 
          </Link>
        </aside>

</div>


</>
  )
}

export default Navbar