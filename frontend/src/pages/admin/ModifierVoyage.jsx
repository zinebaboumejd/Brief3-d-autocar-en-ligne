import React from 'react'

function ModifierVoyage() {
    
    return (

        <section>
        <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
    
       
        <div className="h-96 col-span-1 ">
          <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
  {/*      <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
      <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg></span>
         
        {/* <Navbar/> */} 
        </div>
        </div>
        <div className="flex flex-col  h-96 col-span-4 bg-gradient-to-tr max-w-[800px] rounded-md items-center"> 
       
        <form action="" method="POST">
        <div class="mb-4 md:flex md:justify-between">
          <div className="mx-5">
            <label
              for="origine "
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
                   origine 
            </label>
            <input
              type="text"
              name="origine"
              id="origine"
              placeholder="origine"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mx-5">
            <label
              for="destination"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
               Destination
            </label>
            <input
              type="text"
              name="destination"
              id="destination"
              placeholder="destination"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div class="mb-4 md:flex md:justify-between">
          <div className="mx-5">
            <label
              for="datedepart"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
          Date départ 
            </label>
            <input
              type="date"
              name="datedepart"
              id="datedepart"
              placeholder="datedepart"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div className="mx-5">
            <label
              for="datedarrivee"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
             Date  D'arrivée
            </label>
            <input
              type="date"
              name="datedarrivee"
              id="datedarrivee"
              placeholder="datedarrivee"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          </div>
          <div class="mb-4 md:flex md:justify-between">
          <div className="mx-5">
            <label
              for="timedepart"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Heure Départ
            </label>
            <input
              type="time"
              name="timedepart"
              id="timedepart"
              placeholder="timedepart"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mx-5">
            <label
              for="timedarevee"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
           Heure D'arrivée
            </label>
            <input
              type="time"
              name="timedarevee"
              id="timedarevee"
              placeholder="timedarevee"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          
          </div>
          <div className="mx-5">
            <label
              for="timedarevee"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
          Prix
            </label>
            <input
              type="number"
              name="prix"
              id="prix"
              placeholder="prix"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mx-5">
            <label
              for="idcar"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
          Id Car
            </label>
            <select id="idcar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled>Choisissez un Car </option>
    {/* afficher car sur option */}
            {/* {car.map((car) => (
                
                <option value={car.id}>{car.matricule}</option>
            ))} */}
    
            {/* <option value="">car</option> */}
           
        </select>
          </div>
          <div>
            <button
              className="hover:shadow-form rounded-md mt-4 mx-5 bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            // onClick={addVoyage}
            >
              Modifer
            </button>
          </div>
        </form>
            </div>
            </div>
        
      </section>
      )
}

export default ModifierVoyage