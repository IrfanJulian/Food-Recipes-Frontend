/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
// import { useEffect, useState } from "react"

const Navbar = () => {
  
  const [data, setData] = useState()

  useEffect(()=>{
    const getData = async() => {
        try {
            const res = await axios.get(`http://localhost:7500/user/profile`, {withCredentials: true})
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    getData()
}, [])

  const handleLogout = () => {
    
  }

  return (
    <div>
      { data ? 
        <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/addRecipe'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/profile'>Profile</Link></p>
              <div className="icon ml-auto flex">
                { data.photo ? 
                <img src={data.photo} alt="icon" className="w-[3rem] h-[3rem] rounded-full" />
                :
                <img src='/iconuser.png' alt="icon" className="w-[3rem] h-[3rem] rounded-full" />
              }
                <div className="ml-3 my-auto">
                  <Link href='/auth/login' onClick={''}><p className="text-blue-900 text-lg font-semibold">Logout</p></Link>
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
                  <Link href='/auth/login'><p className="text-blue-900 text-lg font-semibold">Login</p></Link>
                </div>
              </div>
          </div>
        }
      </div>
  )
}

// export async function getServerSideProps(context){
//   try {
//     // const cookie = context
//     // // Fetch data from external API
//     // console.log(cookie);
//     const token = localStorage.getItem(token)
//     const resUser = await axios({
//       method: 'GET',
//       url: `http://localhost:7500/user/profile`,
//       header: {
//         authorization: `Bearer ${token}`
//       }
//   })
//     const userDetail = await resUser.json()
//     console.log(userDetail);
//     // Pass data to the page via props
//     return { props: { userDetail } }
// } catch (error) {
//     console.log(error);
// }
// }

export default Navbar