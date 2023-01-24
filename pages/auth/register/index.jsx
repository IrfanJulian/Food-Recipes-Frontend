import Link from "next/link"
import { useState } from "react"
import BackgroundSide from "../../../components/backgroundSide"
import axios from 'axios'
import { useRouter } from "next/router"
import Swal from "sweetalert2"


const Register = () => {

  const router = useRouter()
  
  const [data, setData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  })

  const [newPassword, setNewPassword] = useState('')
  // const [isMatch, setIsMatch] = useState(false)

  const handlePassword = (e) => {
    setNewPassword(
      e.target.value
    )
  }

  const handleChange = (e) =>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const [check, setCheck] = useState(false)

  const handleCheck = (e) => {
    setCheck(e.target.checked)
  }

  const handleRegister = async(e) => {
    try {
      e.preventDefault()
      if(check === false){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to agree to terms and condition!'
        })
      }else if(data.password !== newPassword){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Password doesn`t match'
        })
      }else{
        await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/user/register`, data)
        // console.log(result);
        Swal.fire({
          icon: 'success',
          title: 'Sucess...',
          text: 'Register Sucess. just Login now'
        })
        router.push('/auth/login')
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Register failed. just try again!'
      })
    }
  }


  return (
    <div className='flex'>
        <div className="w-1/2">
          <BackgroundSide />
        </div>
        <div className="grid border w-1/2">
          <div className="my-auto">
            <p className="text-4xl font-bold text-yellow-400 text-center">Let`s get Started!</p>
            <p className="text-lg text-gray-500 text-center my-5">Create new account to access all features</p>
            <form onSubmit={handleRegister} className="w-1/2 grid mx-auto border-t-2 border-b-2 py-5">
              <p className="text-md text-gray-500 mb-3 font-semibold">Name</p>
              <input type="text" placeholder="Insert your name" name="name" onChange={handleChange} value={data.name} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 font-semibold mt-5">Email address*</p>
              <input type="email" placeholder="Insert your email" name="email" onChange={handleChange} value={data.email} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 font-semibold mt-5">Phone number</p>
              <input type="number" placeholder="Insert your phone number" name="phone" onChange={handleChange} value={data.phone} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 font-semibold mt-5">Create new password</p>
              <input type="password" placeholder="Insert your password" name="password" onChange={handleChange} value={data.password} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 font-semibold mt-5">Confirm password</p>
              <input type="password" placeholder="Insert your password" onChange={handlePassword} name="newPassword" value={newPassword} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <div className="flex my-5">
                <input type="checkbox" name="check" onChange={handleCheck} id="check" className="peer w-4 h-4 mt-1 mr-5" />
                <label htmlFor="check"></label>
                <p className="text-md text-gray-500">I Agree to Terms & Condition</p>
              </div>
              <button type="submit" className='h-14 bg-yellow-400 rounded-xl text-white'>Register</button>
              <Link href="/" className='mt-3 text-end'>Forgot Password?</Link>
            </form>
            <div className="flex mt-5 justify-center">
              <p className='text-md text-gray-500 mr-2'>Dont have an account?</p>
              <p><Link href="/auth/login" className='text-yellow-400 '>Sign in</Link></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Register