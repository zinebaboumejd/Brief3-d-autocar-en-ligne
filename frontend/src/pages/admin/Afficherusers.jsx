import React ,{ useState, useEffect }  from "react";
import Navbar from "../../components/Navbar";

// import { IconBase } from "react-icons/lib";
// import  {CiEdit,CiTrash}  from "react-icons/ci";
function Afficherusers() {
    // afficher user 
    const token = JSON.parse(localStorage.getItem("token"));
   
    const [data, setData] = useState([]);
    function getuser() {
        fetch("http://localhost:9000/api/admin/AfficherUsers", {
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
        getuser();
    }, );
    
    return (
        <>
        
        <section>
        <div class="bg-gray-100 sm:grid grid-cols-5 grid-rows-2  px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">
    
       
        <div class="h-96 col-span-1 ">
          <div class="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
       <input type="text" placeholder="seach" class=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
      <span><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg></span>
          </div>
        <Navbar/>
        </div>
        <div class="flex flex-col  h-96 col-span-4 bg-gradient-to-tr rounded-md items-center">  {/*from-indigo-800 to-indigo-500 */}
        <div class="overflow-x-auto shadow-md sm:rounded-lg ">
            <div class="inline-block min-w-full align-middle">
         
        <div class="overflow-hidden ">
                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <thead class="bg-gray-100 dark:bg-gray-700">
                            <tr>
                              
                              
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                ID
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Nom
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Prenom
                                </th>
                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Email
                                </th>
                                <th scope="col" class="p-4">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                             {
                           
                              data.map((user) => (
                            
                                <tr key={user.Id} class="hover:bg-gray-100 dark:hover:bg-gray-700">
                              
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                                  {user._id}                         
                              </td>
                             <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                              
                                      {user.nom}
                                
                                </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                                  {user.prenom}                         
                              </td>
                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                           
                                  {user.email}                         
                              </td>
                              
    
                              <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">                     
                              <div class="flex mt-3 -mx-2">
                                {/* <CiEdit id={user.Id} className="h-6 w-6 text-blue-700 cursor-pointer mr-4" />
                                <CiTrash onClick={() => deleteuser(user._id)} className="h-6 w-6 text-red-500 cursor-pointer" />
                                 */}
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
        </div>
    
      </section>
    
    
    
    
           
        </>
        
        
       )
}

export default Afficherusers