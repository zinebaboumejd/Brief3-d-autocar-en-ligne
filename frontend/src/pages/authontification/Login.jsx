import React ,{useEffect, useState} from 'react'
import {  useNavigate } from 'react-router-dom'
import { Toaster} from 'react-hot-toast';

// import {useNavigate} from 'react-router-dom';
function Login() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();


  const login = async (event) => {
    event.preventDefault();
    let item={email,password}
    
    let result=await fetch("http://localhost:9000/api/users/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
  });
  result=await result.json();
  // console log the token only 
  console.log(result.token)

  // tester si le user est admin ou pas
  if(result.isAdmin === true){
    localStorage.setItem("admin_id",JSON.stringify(result._id))
    localStorage.setItem("token",JSON.stringify(result.token))
    localStorage.setItem("isAdmin",JSON.stringify(result.isAdmin))
    navigate("/admin/dashbordAdmin")
  }else if(result.isAdmin === false){
    localStorage.setItem("user_id",JSON.stringify(result._id))
    localStorage.setItem("token",JSON.stringify(result.token))
    localStorage.setItem("isAdmin",JSON.stringify(result.isAdmin))
   if(localStorage.getItem("user_id")){    
    navigate("/users/dashbordUser")
     if ( localStorage.getItem("idvoyage") && localStorage.getItem("idvoyage") !== null){
      navigate("/voyage")
  }
}
  else if(localStorage.getItem("admin_id")){
    navigate("/admin/dashbordAdmin")
  }
  }
  
  }

  useEffect(() => {
  //   if(localStorage.getItem("user_id")){    
  //     navigate("/users/dashbordUser")
  //      if ( localStorage.getItem("idvoyage") && localStorage.getItem("idvoyage") !== null){
  //       navigate("/voyage")
  //   }
  // }
  //   else if(localStorage.getItem("admin_id")){
  //     navigate("/admin/dashbordAdmin")
  //   }

  }, [])

  return (
        <>
        <Toaster/>
        <section className='heading mx-auto w-full max-w-[550px]'>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
             Login
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">Please create an account</p>
        </section>
    
        <section className='form mx-auto w-full max-w-[550px] '>
          <form method='Post'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control mb-3'
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                placeholder='Enter password'
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
           
            <div className='form-group'>
              <button type='submit' 
              onClick={login}
              className='btn btn-block border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"'>
                
                Submit
              </button>
            
            </div>
          </form>
        </section>
      </>
      )
    }


export default Login
