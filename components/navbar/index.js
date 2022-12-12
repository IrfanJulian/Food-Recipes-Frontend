/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar1 = () => {

  // const token = localStorage.getItem('token')
  const [data, setData] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
      const token = localStorage.getItem('token')
      const getProfile = async () =>{
          try {         
              const result = await axios({
                method: 'GET',
                url: 'https://strange-red-gaiters.cyclic.app/user/profile',
                headers: {
                  'Authorization' : `Bearer ${token}`
                }
              })
              setData(result.data.data)
              setIsLogin(true)
          } catch (error) {
              console.log(error);
          }
      }
      getProfile()
      }, [])
      // console.log(data);
      const photo = data.photo
      // console.log(isLogin);

  const handleLogout = () => {
    localStorage.clear()
  }
  return (
    <div>
      { isLogin === true ?
        <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/addRecipe'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/profile'>Profile</Link></p>
              <div className="icon ml-auto flex">
                { photo ? 
                <img src={data.photo} alt="icon" className="w-[3rem] h-[3rem] rounded-full" />
                :
                <img src='/iconuser.png' alt="icon" className="w-[3rem] h-[3rem] rounded-full" />
                }
                <div className="ml-3 my-auto">
                  <Link href='/auth/login' onClick={handleLogout}><p className="text-white text-lg font-semibold">Logout</p></Link>
                </div>
              </div>
          </div> 
          :
          <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/addRecipe'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/profile'>Profile</Link></p>
              <div className="icon ml-auto flex">
                <img src='/iconuser.png' alt="icon" className="" />
                <div className="ml-3 my-auto">
                  <Link href='/auth/login'><p className="text-white text-lg font-semibold">Login</p></Link>
                </div>
              </div>
          </div>
      }
      </div>
  )
}

export default Navbar1


{/* <img src={data} alt="icon" className="" />
<div className="ml-3 my-auto">
  <Link href='/auth/login'><p className="text-white text-lg font-semibold">Login</p></Link>
</div>  */}


