import React ,{ useState, useEffect }  from "react";


import { ToastContainer , toast } from 'react-toastify';
import  {CiEdit,CiTrash}  from "react-icons/ci";
 function DashbordAdmin() {

  // recoprer tokn et id admin
  const token = JSON.parse(localStorage.getItem("token"));
 
  const [data, setData] = useState([]);


 function getVoyage() {
   
    fetch("http://localhost:9000/api/admin/AfficherVoyage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result);
 
      });
  }
  useEffect(() => {
    getVoyage();
  }, );
 
  function deleteVoyage(id) {
    fetch(`http://localhost:9000/api/admin/SupprimerVoyage/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        getVoyage();
      });
      console.log(id)
      toast("voyage supprimer avec succés")
  }
   return (
    <>
    
    <section>
    <ToastContainer />
    {/* <div class="bg-gray-800 sm:grid grid-cols-5 grid-rows-2 px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4"> */}

    <div class="flex flex-col w-90  col-span-4 bg-gradient-to-tr rounded-md items-center">  {/*from-indigo-800 to-indigo-500 */}
    <div class="overflow-x-auto shadow-md sm:rounded-lg ">
        <div class="inline-block min-w-full align-middle">
     
    <div class=" ">
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                          
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Origine
                          
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Destination
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Datedepart
                            </th>       
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">                
                            Datedarrivee
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Temps depart
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Temps arrivee
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Prix
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            Action
                            </th>
                            <th scope="col" class="p-4">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                         {
                          data.map((voyage) => (
                            <tr key={voyage.Id} class="hover:bg-gray-100 dark:hover:bg-gray-700">
                          
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.origine}                         
                          </td>
                         <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          
                                  {voyage.destination}
                            
                            </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.datedepart}                         
                          </td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.datedarrivee}                         
                          </td>
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.datetimedepart}                         
                          </td>
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.datetimedarevee}                         
                          </td>
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                              {voyage.prix}                         
                          </td>

                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                     
                          <div class="flex mt-3 -mx-2">
                            <CiEdit id={voyage.Id} className="h-6 w-6 text-blue-700 cursor-pointer mr-4" />
                            <CiTrash onClick={() => deleteVoyage(voyage._id)} className="h-6 w-6 text-red-500 cursor-pointer" />
                            </div>               
                          </td>
                          </tr>
                         ))
                          }
                       
                    </tbody>                 
                    </table>
            </div>
        </div>
    </div>
</div>
    {/* </div> */}

  </section>




       
    </>
    
    
   )
 }
 
 export default DashbordAdmin 