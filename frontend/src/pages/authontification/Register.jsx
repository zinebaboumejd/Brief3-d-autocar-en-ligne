import React , {useState} from 'react'
import { useNavigate } from "react-router-dom";





function Register() {
const [nom,setNom]=useState('');
const [prenom,setPrenom]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const Navigate=useNavigate();
async function register(){
console.warn(nom,prenom,email,password)
let item={nom,prenom,email,password}
console.warn(item)
let result=await fetch("http://localhost:5000/api/users/register",{
method:'POST',
headers:{
"Content-Type":"application/json",
"Accept":"application/json"
},
body:JSON.stringify(item)
});
result=await result.json();
console.warn("result",result)
localStorage.setItem("user-info",JSON.stringify(result))
Navigate("/")
}

  return (
    <div >register
    <section className='heading mx-auto w-full max-w-[550px]'>
       <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
          Register
       </h1>
       <p className="mt-3 text-lg leading-relaxed text-slate-400">Please create an account</p>
     </section>

    <section className='form mx-auto w-full max-w-[550px] '>
      <form >
      <div className='form-group'>
          <input
            type='text'
            className='form-control mb-3'
            id='nom'
            name='nom'
            value={nom}
            placeholder='Enter your NOM'
            // onchange permet de changer la valeur de l'input
           onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control mb-3'
            id='prenom'
            name='prenom'
            value={prenom}
            placeholder='Enter your PRENOM'
            onChange={(e) => setPrenom(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control mb-3'
            id='email'
            name='email'
            value={email}
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <div className='form-group'>
          <button type='submit' onClick={register} 
           className='btn btn-block border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"'>
            Submit
          </button>
        </div>
      </form>
    </section>
    </div>
  )
}


export default Register


// import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// // import { FaUser } from 'react-icons/fa'
// import { register, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

// function Register() {
//   const [formData, setFormData] = useState({
//     nom: '',
//     prenom: '',
//     email: '',
//     password: '',
//     password2: '',
//   })

//   const { nom,prenom, email, password, password2 } = formData

//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const { user, isLoading, isError, isSuccess, message } = useSelector(
//     (state) => state.auth
//   )

//   useEffect(() => {
//     if (isError) {
//       toast.error(message)
//     }

//     if (isSuccess || user) {
//       navigate('/')
//     }

//     dispatch(reset())
//   }, [user, isError, isSuccess, message, navigate, dispatch])

//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const onSubmit = (e) => {
//     e.preventDefault()

//     if (password !== password2) {
//       toast.error('Passwords do not match')
//     } else {
//       const userData = {
//         nom,
//         prenom,
//         email,
//         password,
//       }

//       dispatch(register(userData))
//     }
//   }

//   if (isLoading) {
//     return <Spinner />
//   }


//   return (
//     <>
//     <section className='heading mx-auto w-full max-w-[550px]'>
//       <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
//          Register
//       </h1>
//       <p className="mt-3 text-lg leading-relaxed text-slate-400">Please create an account</p>
//     </section>

//     <section className='form mx-auto w-full max-w-[550px] '>
//       <form onSubmit={onSubmit}>
//       <div className='form-group'>
//           <input
//             type='text'
//             className='form-control mb-3'
//             id='nom'
//             name='nom'
//             value={nom}
//             placeholder='Enter your NOM'
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='text'
//             className='form-control mb-3'
//             id='prenom'
//             name='prenom'
//             value={prenom}
//             placeholder='Enter your PRENOM'
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='email'
//             className='form-control mb-3'
//             id='email'
//             name='email'
//             value={email}
//             placeholder='Enter your email'
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             className='form-control'
//             id='password'
//             name='password'
//             value={password}
//             placeholder='Enter password'
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             className='form-control'
//             id='password2'
//             name='password2'
//             value={password}
//             placeholder='Enter password'
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <button type='submit' className='btn btn-block border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"'>
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
//   </>
//   )
// }

// export default Register