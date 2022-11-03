import React,{useEffect,
    //  useState
    } from 'react'
import { Navigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";

function Ajoutervoyage() {
    // afficher car 
    const token = JSON.parse(localStorage.getItem("token"));
    const [car,setCar]=React.useState([]);

  function getCar(){
    fetch("http://localhost:9000/api/admin/AfficherCar",{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":`Bearer ${token}`
    },
   
    }).then((res)=>res.json())
    .then((result)=>{
        // console.log(result)
        setCar(result)
        
    });
   
  }

//   const addvoyage  =async(e)=>{
// const item={
//    "origine":e.target.origine.value,
//     "destination":e.target.destination.value,
//     "datedepart":e.target.datedepart.value,
//     "datearrive":e.target.datearrive.value,
//     "datetimedepart":e.target.datetimedepart.value,
//     "datetimearrive":e.target.datetimearrive.value,
//     "prix":e.target.prix.value,
//     "carid":e.target.carid.value,
// }
// let result=await fetch("http://localhost:9000/api/admin/AjouterVoyage",{
//         method:'POST',
//         headers:{
//           "Content-Type":"application/json",
//           "Accept":"application/json",
//             "Authorization":`Bearer ${token}`
//         },
//         body:JSON.stringify(item)
//     });
//     result=await result.json();
//     console.log(result)
//   Navigate("/admin/dashbordAdmin")

// }
    
  


    useEffect(()=>{
        getCar();
    },)
  
  
    // ajouter un voyage
    const addVoyage = async () => {
        let item={
            "origine":document.getElementById("origine").value,
            "destination":document.getElementById("destination").value,
            "datedepart":document.getElementById("datedepart").value,
            "datearrive":document.getElementById("datearrive").value,
            "datetimedepart":document.getElementById("datetimedepart").value,
            "datetimearrive":document.getElementById("datetimearrive").value,
            "prix":document.getElementById("prix").value,
            "carid":document.getElementById("carid").value,
        }
        let result=await fetch("http://localhost:9000/api/admin/AjouterVoyage",{
            method:'POST',
            headers:{
              "Content-Type":"application/json",
              "Accept":"application/json",
                "Authorization":`Bearer ${token}`
            },
            body:JSON.stringify(item)
        });
        result=await result.json();
        console.log(result)
        Navigate("/admin/dashbordAdmin")
    }


  return (

    <section>
    <div className="bg-gray-100 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

   
    <div className="h-96 col-span-1 ">
      <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
   <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
  <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></span>
      </div>
    <Navbar/>
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
        value={car.origine}
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
         value={car.destination}
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
          value={car.datedepart}
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
        {car.map((car) => (
            
            <option value={car.id}>{car.matricule}</option>
        ))}
       
    </select>
      </div>
      <div>
        <button
          className="hover:shadow-form rounded-md mt-4 mx-5 bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        onClick={addVoyage}
        >
          Ajouter
        </button>
      </div>
    </form>
        </div>
        </div>
    
  </section>
  )
}

Ajoutervoyage.propTypes = {}

export default Ajoutervoyage
