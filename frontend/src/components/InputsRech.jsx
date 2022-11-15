import { useState } from "react";
import axios from "axios"
import { Link , useNavigate} from "react-router-dom";
function InputsRech() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleChangefrom = (e) => {
    setFrom(e.target.value);
  };
  const handleChangeto = (e) => {
    setTo(e.target.value);
  };
  const handleChangedate = (e) => {
    setDate(e.target.value);
  };

  const searchFunction = async (e) => {
    e.preventDefault();

    const formData = {
      origine: from,
      destination: to,
      datedepart: date,
    };

    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),

    };

    fetch("http://localhost:9000/api/users/RechercheVoyage", requestOption)
      .then(async (response) => {
        console.log('formadata',formData);
        const data = await response.json();
        console.log(data);
        setData(data.data);
        
        //  stocke data sur localStorage
        localStorage.setItem("origine",JSON.stringify(formData.origine));
        localStorage.setItem("destination",JSON.stringify(formData.destination));
        localStorage.setItem("datedepart",JSON.stringify(formData.datedepart));
        navigate("/voyage");
        
        // localStorage.setItem("data",JSON.stringify(data.data));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  //   console.log(data);
  return (
    <div>
      {/* <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 "> */}
      <div className="w-full flex justify-center ">
        <form onSubmit={searchFunction}>
          <div className="-mx-3 flex flex-wrap ">
            <div className="w-full px-3 sm:w-1/4">
              <div className="mb-5">
                <label
                  for="lieu"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  lieu départ
                </label>
                <input
                  type="text"
                  name="origine"
                  id="lieu"
                  placeholder="lieu départ"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange= {handleChangefrom}
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/4">
              <div className="mb-5">
                <label
                  for="Date d'arrivée"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  lieu d'arrivée
                </label>
                <input
                  type="text"
                  name="destination"
                  id="Datearrivee"
                  placeholder="Date d'arrivée"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={handleChangeto}
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/4">
              <div className="mb-5">
                <label
                  for="datedepart"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date de voyage
                </label>
                <input
                  type="date"
                  name="datedepart"
                  id="datedepart"
                  placeholder=" Date de voyage"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onChange={handleChangedate}
                />
              </div>
            </div>

            <div className=" px-3 pt-5 sm:w-1/4 grid content-center">
              <div className="mb-5 ">
                {/* <Link to="/voyage"  type="submit"
                  className='btn btn-block border border-indigo-500 bg-indigo-500 text-white rounded-md   transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline'
                >
                  Submit
                </Link> */}
                <button
                  type="submit"
                  
                  className="w-full rounded-md border border-[#e0e0e0] bg-[#6A64F1] py-3 px-6 text-base font-medium text-white outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
}

export default InputsRech;
