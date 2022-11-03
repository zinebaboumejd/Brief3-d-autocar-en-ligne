import React from 'react'
import companyLogo  from '../images/autocar.png';

// import { ToastContainer, toast } from 'react-toastify';
function Home() {
  // const notify = () => toast("Wow so easy!");
  return (
   
    <>
     
 <div>
    
      
      </div>
<div className='mainSection'>
  <div className="containtBox">
  <h1 class="flex justify-center text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Réservation de billet d'autocar en ligne</h1>
  <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            {/* <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="" alt=""> */}
            <img src={companyLogo} className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" alt="BigCo Inc. logo"/>
            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">Réservation de billet d'autocar en ligne</p>



              
                <div class="flex items-center mt-6">
                    <form action="">
    <div class="-mx-3 flex flex-wrap">
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="DateDebut"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             lieu départ
            </label>
            <input
              type="date"
              name="DateDebut"
              id="DateDebut"
              placeholder="lieu départ"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="w-full px-3 sm:w-1/2">
          <div class="mb-5">
            <label
              for="Date d'arrivée"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
             lieu d'arrivée
            </label>
            <input
              type="date"
              name="Datearrivee"
              id="Datearrivee"
              placeholder="Date d'arrivée"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
    </form>
                </div>
            </div>
        </div>
    
  </div>


</div>


    </>
   

 
  )
}

export default Home