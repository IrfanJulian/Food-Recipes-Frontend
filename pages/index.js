/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Footer from "../components/footer"
import Navbar1 from "../components/navbar"
import axios from "axios"
import Link from "next/link"

const LandingPage = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token')
    const getRecipes = async() => {
        try {
            const result = await axios({
                method: 'GET',
                url: 'https://strange-red-gaiters.cyclic.app/recipe',
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setData(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    getRecipes()
}, [])
// console.log(data);

  return (
    <div className="wrapper w-full h-screen">
      <Navbar1 />
      <div className="container flex h-full my-auto mx-auto">
        <div className="w-1/2 my-auto">
          <p className="text-8xl text-blue-900 font-semibold">Discover Recipe & Delicious Food</p>
          <input type="text" placeholder="Search Restaurants or Food" className="bg-gray-200 my-16 py-6 px-12 w-full rounded-xl" />
        </div>
        <div className="w-1/2 my-auto">
          <img src="/content.png" alt="content" className="ml-auto w-3/4 h-3/4" />
        </div>
      </div>

      <div className="container mx-auto">
        <div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
          <p className="text-4xl font-semibold">Popular For You !</p>
        </div>
        <div className="flex">
          <div className="wrappercontent w-1/2 py-24">
            <img src="/content2.png" alt="content2" className="w-4/6 h-6/6" />
          </div>
          <div className="wrappercontent grid w-1/2">
            <div className="wrappertext w-1/2 my-auto">
              <p className="text-4xl font-semibold">Healthy Bone Broth Ramen (Quick & Easy)</p>
              <p className="text-lg text-gray-500 my-8">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That`s right!</p>
              <button className="py-4 px-12 bg-yellow-400 text-white rounded-xl">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
          <p className="text-4xl font-semibold">New Recipe</p>
        </div>
        <div className="flex">
          <div className="wrappercontent w-1/2 py-24">
            <img src="/content3.png" alt="content2" className="w-4/6 h-6/6" />
          </div>
          <div className="wrappercontent grid w-1/2">
            <div className="wrappertext w-1/2 my-auto">
              <p className="text-4xl font-semibold">Healthy Bone Broth Ramen (Quick & Easy)</p>
              <p className="text-lg text-gray-500 my-8">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That`s right!</p>
              <button className="py-4 px-12 bg-yellow-400 text-white rounded-xl">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
          <p className="text-4xl font-semibold">Popular Recipe</p>
        </div>
          <div className="grid grid-cols-3 gap-28 py-7">
            { data.map((item)=>
            <Link href={`/detailResep/${item.id}`} key={item.id}>
            <div className="card relative rounded-2xl overflow-hidden border w-[28rem] h-[28rem]">
              <img src={item.photo} alt="asset" className="h-[28rem] w-[60rem]" />
              <div className="absolute left-10 bottom-10 w-1/4">
                <p className="text-3xl text-white font-semibold">{item.tittle}</p>
              </div>
            </div>
            </Link>
              )}
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default LandingPage