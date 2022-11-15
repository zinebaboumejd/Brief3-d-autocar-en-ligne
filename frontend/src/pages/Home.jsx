import React from 'react'
// import companyLogo  from '../images/autocar.png';
import image from '../images/imgtest.png'
import { Link } from 'react-router-dom';
import bgimage from '../images/juan-encalada-6mcVaoGNz1w-unsplash.jpg'
import image1 from '../images/death-valley-g758c7b70c_1920.jpg'
import image2 from '../images/chuttersnap-kq8iWoh5-mU-unsplash.jpg'
import image3 from  '../images/hobi-industri-C-zgN_LEKb8-unsplash.jpg'
import InputsRech from '../components/InputsRech'
// import { ToastContainer, toast } from 'react-toastify';
function Home() {
  // const notify = () => toast("Wow so easy!");
  return (
   
    <>

  <div class="static lg:flex lg:items-center bg-cover h-screen mb-[100px] " style={{backgroundImage: `url(${bgimage})`}}>
   <h1 class="flex justify-center text-3xl font-semibold text-gray-800 capitalize w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 lg:text-4xl dark:text-white">Réservation de billet d'autocar en ligne</h1>
   <div class="mt-6 m-64 lg:w-1/2 lg:mt-0 lg:mx-6 ">
      <InputsRech/>
   </div>

                  </div>
    
  {/* </div>


</div> */}

<div className="container">
<div class="flex flex-col ">


  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg> */}
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Locations flexibles</h2>
        <p class="mt-2 text-sm text-gray-500"></p>
      </div>
    </div>

   
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg> */}
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Pas de frais cachés</h2>
        <p class="mt-2 text-sm text-gray-500">Sachez exactement ce que vous payez.

</p>
      </div>
    </div>
    <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div class="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg> */}
      </div>

      <div class="ml-4">
        <h2 class="font-semibold">Nous alignons nos tarifs</h2>
        <p class="mt-2 text-sm text-gray-500">Vous avez trouvé la même offre pour moins cher ? Nous ajusterons notre tarif en conséquence.</p>
      </div>
    </div>
  </div>
</div>

</div>












  <div class="w-full my-20 z-50 sticky  rounded-3xl px-6 ">
<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            Locations flexibles
            </h2>
            <p class="text-black text-base md:text-lg"> Vous pouvez annuler ou modifier la plupart des réservations gratuitement jusqu’à 48 heures avant la prise en charge du véhicule.
            </p>
          </div>
          <div class="flex items-center space-x-3">
      
          </div>
        </div>
        <img className='rounded-md' width="25" alt="google auth logo" style={{ width: 450, height: 450 }}  src={image1} />
      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        
      <img className='rounded-md' width="25" alt="google auth logo" style={{ width: 450, height: 450 }}   src={image2} />


        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            Pas de frais cachés
            </h2>
            <p class="text-black text-base md:text-lg">Sachez exactement ce que vous payez.

            </p>
          </div>
          
        </div>
      </div>
    </div>



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div class="max-w-xl mb-6">
            
            <h2 class="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
            Nous alignons nos tarifs
            </h2>
            <p class="text-black text-base md:text-lg">Vous avez trouvé la même offre pour moins cher ? Nous ajusterons notre tarif en conséquence.
            
            </p>
          </div>
         
        </div>
        <img className='rounded-md' width="25" alt="google auth logo" style={{ width: 450, height: 450 }}   src={image3} />
      </div>
    </div>


 
  
          </div>

    </>
   

 
  )
}

export default Home