import React ,{useEffect, useState} from 'react'
import {  useNavigate } from 'react-router'
// import {useNavigate} from 'react-router-dom';
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
 const navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user-info")){
     navigate("/")
    }
  },[])
  async function login(){
   console.warn(email,password)
    let item={email,password}
    let result=await fetch("http://localhost:5000/api/users/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
  });
  result=await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  navigate("/")
  }
  return (
        <>
        <section className='heading mx-auto w-full max-w-[550px]'>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
             Login
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-slate-400">Please create an account</p>
        </section>
    
        <section className='form mx-auto w-full max-w-[550px] '>
          <form >
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
