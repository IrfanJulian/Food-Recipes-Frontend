import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
import { useRouter } from "next/router"

const Profile = () => {

    const token = localStorage.getItem('token')
    const [data, setData] = useState({})

    useEffect(()=>{
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
            } catch (error) {
                console.log(error);
            }
        }
        getProfile()
        }, [])
 
    
  return (
      <div>
        <Navbar1 />
        <div className="container grid mt-44 mx-auto mb-36">
            <div className="bio w-44 h-44 rounded-full overflow-hidden mx-auto">
                <img src={data.photo} alt="icon" className="w-44 h-44" />
            </div>
            <p className="text-3xl font-semibold text-center mt-10">{data.name}</p>
        </div>
        <div className="container mx-auto">
            <div className="flex">
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">My Recipe</p></Link>
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">Saved Recipe</p></Link>
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">Like Recipe</p></Link>
            </div>
            <hr className="my-10 border border-gray-200" />
            <div className="wrapperrecipe grid grid-cols-4 gap-20">
                <div className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <img src="/recipe1.png" alt="recipe" className="w-80 h-56" />
                    <div className="text absolute left-5 bottom-5 w-1/4">
                        <p className="text-3xl text-white font-semibold">Bomb Chicken</p>
                    </div>
                </div>
                <div className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <img src="/recipe2.png" alt="recipe" className="w-80 h-56" />
                    <div className="text absolute left-5 bottom-5 w-1/4">
                        <p className="text-3xl text-white font-semibold">Bananas Pancake</p>
                    </div>
                </div>
                <div className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <img src="/recipe1.png" alt="recipe" className="w-80 h-56" />
                    <div className="text absolute left-5 bottom-5 w-1/4">
                        <p className="text-3xl text-white font-semibold">Bomb Chicken</p>
                    </div>
                </div>
                <div className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <img src="/recipe2.png" alt="recipe" className="w-80 h-56" />
                    <div className="text absolute left-5 bottom-5 w-1/4">
                        <p className="text-3xl text-white font-semibold">Bananas Pancake</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile