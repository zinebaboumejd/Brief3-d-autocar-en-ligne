import React ,{ useState, useEffect }  from "react";
import {  useNavigate } from 'react-router-dom'
import InputsRech from '../../components/InputsRech'
function Voyage() {
   
    const navigate=useNavigate();
    const token = JSON.parse(localStorage.getItem("token"));
  const [data, setData] = useState([]);
 

 function getVoyage() {


    const origine = JSON.parse(localStorage.getItem("origine"));
    const destination = JSON.parse(localStorage.getItem("destination"));
    const datedepart = JSON.parse(localStorage.getItem("datedepart"));
    if(localStorage.getItem("origine") && localStorage.getItem("origine") !== null && localStorage.getItem("destination") && localStorage.getItem("destination") !== null && localStorage.getItem("datedepart") && localStorage.getItem("datedepart") !== null){
    fetch("http://localhost:9000/api/users/RechercheVoyage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            origine: origine,
            destination: destination,
            datedepart: datedepart,
        }),
    })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setData(result);
        });
    }else{
        fetch(`http://localhost:9000/api/users/AfficherVoyage`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
            });
    }
}
useEffect(() => {
    getVoyage();
}, []);
const reservation=()=>{
   
    const idvoyage = document.getElementById("btn_id").value;
    // tsocker id voyage sur localstorg 
    localStorage.setItem("idvoyage", JSON.stringify(idvoyage));
    if (!token) {
        navigate("/login");
    }
    else {
        navigate("/reservation");
    }

}

const Anuler=()=>{
    localStorage.removeItem("origine");
    localStorage.removeItem("destination");
    localStorage.removeItem("datedepart");
    window.location.reload();
}
  return (
    <div>

          <div className="bg-gray-100 pt-[150px]">
  
          <div className="container px-5 py-2 mx-auto">
                <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <InputsRech/>
               <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" 
               onClick={Anuler}>Anuler</button>

                  </div>
             
              </div>  
             </div>

{ data.map((voyage) => (
    <div className="bg-gray-100">


        <section className="text-gray-600 m-0 body-font ">
            <div className="container px-5 py-2 mx-auto">
                <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-40 w-40 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://www.economie.gouv.fr/files/styles/image_contenu_article_espace/public/files/directions_services/dgccrf/imgs/fiches_pratiques/2020/autocar-fotolia.jpg?itok=INDaYJNh"/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h1 className="text-black text-2xl title-font font-bold mb-2">
                    {/* map car par id */}
                    {voyage.car_id}

                      
                        </h1>
                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    <div className="py-4">
                        <div className=" inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-yellow-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="12" cy="12" r="9" />  
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                                <p className="title-font font-medium">Python</p>
                            </div>
                        </div>
                        <div className="inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-yellow-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="12" cy="12" r="9" />  
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                                <p className="title-font font-medium">C</p>
                            </div>
                        </div>
                        <div className=" inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-yellow-500 w-6 h-6 mr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  
                                    <circle cx="12" cy="12" r="9" />  
                                    <path d="M9 12l2 2l4 -4" />
                                </svg>
                                <p className="title-font font-medium">Php</p>
                            </div>
                        </div>
                        <div className=" inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-gray-500 w-6 h-6 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                    <circle cx="12" cy="12" r="10" />  
                                    <line x1="15" y1="9" x2="9" y2="15" /> 
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                                <p className="title-font font-medium">Swift</p>
                            </div>
                        </div>
                        
                        <div className=" inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-gray-500 w-6 h-6 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                    <circle cx="12" cy="12" r="10" />  
                                    <line x1="15" y1="9" x2="9" y2="15" /> 
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                                <p className="title-font font-medium">Java</p>
                            </div>
                        </div>
                        <div className=" inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                                <svg className="text-gray-500 w-6 h-6 mr-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                                    <circle cx="12" cy="12" r="10" />  
                                    <line x1="15" y1="9" x2="9" y2="15" /> 
                                    <line x1="9" y1="9" x2="15" y2="15" />
                                </svg>
                                <p className="title-font font-medium">Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex font-bold text-gray-800">
                        <div className="w-full md:w-1/2 flex space-x-3">
                            <div className="w-1/2">
                                <h2 className="text-gray-500">Origine</h2>
                                <p >{voyage.origine} </p>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-gray-500">Destination</h2>
                                <p>{voyage.destination}</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex space-x-3">
                            <div className="w-1/2">
                                <h2 className="text-gray-500">Date Depart</h2>
                            
                                <p>{voyage.datedepart} </p>   <p> {voyage.datetimedepart} </p>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-gray-500">Date d'arrivée</h2>
                                <p>  <p>{voyage.datedarrivee} </p>   <p> {voyage.datetimedarevee} </p></p>
                            </div>
                            <div className="w-1/2">
                                <h2 className="text-gray-500">Prix</h2>
                                <p>    {voyage.prix}  </p>
                            </div>
                            
                        </div>
                    </div>
                    {/* afficher button de value idvoyage */}
                    <div className="flex justify-center">
                        <button value={voyage._id} id='btn_id' onClick={reservation}
                        className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Reserver</button>
                    </div>
                
           

                    {/* <Link to='' onClick={reservation} value={voyage._id} id='idvoyage' className="mt-3 text-indigo-500 inline-flex items-center">Sélectionner
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </Link> */}
                </div>
                </div>
            </div>
        </section>
   
</div>
))
}
   


    </div>
  )
}

export default Voyage