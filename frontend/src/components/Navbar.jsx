import React from 'react'
import { Link } from 'react-router-dom'
import DashbordAdmin from '../pages/admin/DashbordAdmin'
function Navbar() {
  return (
  
      <div class="bg-white  rounded-md">

<h1 class="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Service</h1>
<div class="bg-white rounded-md list-none  text-center ">
  <li class="py-3 border-b-2"><Link to="/admin/dashbordAdmin" class="list-none  hover:text-indigo-600">Afficher des Voyage</Link></li>
  <li class="py-3 border-b-2"><Link to="/admin/ajoutervoyage" class="list-none  hover:text-indigo-600">Ajouter des voyages</Link></li>
 <li class="py-3 border-b-2"><Link to="/admin/afficherusers" class="list-none  hover:text-indigo-600">Afficher utilisateurs </Link></li>
   {/* <li class="py-3 border-b-2"><Link to="#" class="list-none  hover:text-indigo-600">Hire</Link></li>
  <li class="py-3 "><Link to="#" class="list-none border-b-2 hover:text-indigo-600">Business</Link></li> */}
</div>
</div>
   
   



  )
}

export default Navbar