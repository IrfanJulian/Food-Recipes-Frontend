import Link from "next/link"
import { useState } from "react"
import BackgroundSide from "../../../components/backgroundSide/index"
import axios from 'axios'
import { useRouter } from "next/router"
import Swal from "sweetalert2"

const Login = () => {

  const router = useRouter()
  const [dataUser, setdataUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) =>{
      setdataUser({
        ...dataUser,
        [e.target.name]: e.target.value
      })
  }

  const [check, setCheck] = useState(false)

  const handleCheck = (e) => {
    setCheck(e.target.checked)
  }

  const handleLogin = async(event) =>{
    try {
      event.preventDefault()
      if(check === false){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You need to agree terms and condition!'
        })
      }else{
        const result = await axios.post(`http://localhost:7500/user/login`, dataUser, {withCredentials: true} )
        localStorage.setItem('token', result.data.data.token)
        localStorage.setItem('id', result.data.data.id)
        localStorage.setItem('refreshToken', result.data.data.refreshToken)
        localStorage.setItem('name', result.data.data.name)
        localStorage.setItem('photo', result.data.data.photo)

        // console.log(result)
        handleLogin()
        Swal.fire({
          icon: 'success',
          title: 'Login Success'
        })
          router.push('/')
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
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
            <p className="text-4xl font-bold text-yellow-400 text-center my-auto">Welcome</p>
            <p className="text-lg text-gray-500 text-center my-10">Log in into your existing account</p>
            <form className="w-1/2 grid mx-auto border-t-2 border-b-2 py-8">
              <p className="text-md text-gray-500 mb-5 font-semibold">E-mail</p>
              <input type="email" name="email" placeholder="Insert your email" onChange={handleChange} value={dataUser.email} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 mt-5 font-semibold">Password</p>
              <input type="password" name="password" placeholder="Insert your password" onChange={handleChange} value={dataUser.password} className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <div className="flex my-9">
                <input type="checkbox" name="check" id="check" onChange={handleCheck} className="peer w-4 h-4 mt-1 mr-5" />
                <label htmlFor="check"></label>
                <p className="text-md text-gray-500">I Agree to Terms & Condition</p>
              </div>
              <button type="submit" onClick={handleLogin} className='h-14 bg-yellow-400 rounded-xl text-white'>Log In</button>
              <Link href="/" className='mt-3 text-end'>Forgot Password?</Link>
            </form>
            <div className="flex mt-5 justify-center">
              <p className='text-md text-gray-500 mr-2'>Dont have an account?</p>
              <p><Link href="/auth/register" className='text-yellow-400 '>Sign up</Link></p>
            </div>
          </div>
        </div>
    </div>
  )
}

// export async function getServerSideProps(context){
//   const {token} = context.req.cookie
//   console.log(token);
// }

export default Login