import React from 'react'
import {useState, useEffect} from 'react'
import{FaSignInAlt} from 'react-icons/fa'
function Login() {
  const [formData,setFormData ] = useState({
    email: '',
    password: '',
  })

const { email, password} = formData
const onSubmit = async (e) => {
  e.preventDefault()
  console.log(formData)
}
const onChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
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
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='email'
            className='form-control mb-3'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
       
        <div className='form-group'>
          <button type='submit' className='btn btn-block border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"'>
            Submit
          </button>
        </div>
      </form>
    </section>
  </>
  )
}

export default Login