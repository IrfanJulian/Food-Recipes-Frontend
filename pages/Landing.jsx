/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Link from "next/link"
import { useRouter } from "next/router"
// import { useRouter } from "next/router"

const LandingPage = ({data}) => {

  const [dataRecipes, setDataRecipes] = useState()
  const [dataPopular, setDataPopular] = useState()
  const [id, setId] = useState()
  const router = useRouter()

  useEffect(()=>{
      setDataRecipes(data)
      setDataPopular(data[0])
      // setId(localStorage.getItem('idrecipe'))
  }, [data])

  // useEffect(()=>{
  //   if(id){
  //     localStorage.removeItem('idrecipe')
  //   }
  // }, [])

  const handleMoveDetail = () => {
    router.push(`/detailResep/${dataPopular.id}`)
  }

  return (
    <div className="wrapper w-full h-screen">
      <Navbar />
      <div className="container flex h-full my-auto mx-auto">
        <div className="w-1/2 my-auto">
          {/* <form onSubmit={handleSearch}> */}
            <p className="text-8xl text-blue-900 font-semibold">Discover Recipe & Delicious Food</p>
            {/* <input placeholder="Search Restaurants or Food" className="bg-gray-200 my-16 py-6 px-12 w-full rounded-xl" />
            <button type="submit">Search</button> */}
            {/* <Link type="submit" href={'/'}><img src="/search.png" alt="search" className="w-[2rem] h-[2rem]" /></Link> */}
          {/* </form> */}
        </div>
        <div className="w-1/2 my-auto">
          <img src="/content.png" alt="content" className="ml-auto w-3/4 h-3/4" />
        </div>
      </div>
      { dataPopular ?
      <div className="container mx-auto">
        <div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
          <p className="text-4xl font-semibold">Popular For You !</p>
        </div>
        <div className="flex">
          <div className="wrappercontent w-1/2 py-24">
            <img src="/ramen.jpg" alt="content2" className="w-4/6 h-6/6" />
          </div>
          <div className="wrappercontent grid w-1/2">
            <div className="wrappertext w-1/2 my-auto">
              <p className="text-4xl font-semibold">{dataPopular.tittle}</p>
              <p className="text-lg text-gray-500 my-8">{dataPopular.description}</p>
              <button onClick={handleMoveDetail} className="py-4 px-12 bg-yellow-400 text-white rounded-xl">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      : null }
      <div className="container mx-auto">
        <div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
          <p className="text-4xl font-semibold">Popular Recipe</p>
        </div>
          <div className="grid grid-cols-3 gap-28 py-7">
            { dataRecipes ? dataRecipes.map((food)=>
            <Link href={`/detailResep/${food.id}`} key={food.id} >
            <div className="card relative rounded-2xl overflow-hidden w-[28rem] h-[28rem]">
              <video className="h-[28rem] w-[60rem]" controls>
                <source src={food.photo} type="video/mp4" />
              </video>
              {/* <img src={food.photo} alt="asset" className="h-[28rem] w-[60rem]" /> */}
              <div className="absolute left-10 bottom-10 w-1/4">
                <p className="text-3xl text-white font-semibold">{food.tittle}</p>
              </div>
            </div>
            </Link>
            ): null }
          </div>
        </div>

        <Footer />
    </div>
  )
}
// export async function getServerSideProps() {
//   try {      
//       // Fetch data from external API
//       const res = await fetch(`http://localhost:7500/user/profile`)
//       const dataUser = await res.json()
      
//       // Pass dataUser to the page via props
//       return { props: { dataUser } }
//   } catch (error) {
//       console.log(error);
//   }
// }

export default LandingPage


{/* <div className="container mx-auto">
<div className="wrappertext border-l-8 border-yellow-400 py-7 pl-10">
  <p className="text-4xl font-semibold">New Recipe</p>
</div>
<div className="flex">
  <div className="wrappercontent w-1/2 py-24">
    <img src="/content3.png" alt="content2" className="w-4/6 h-6/6" />
  </div>
  <div className="wrappercontent grid w-1/2">
    <div className="wrappertext w-1/2 my-auto">
      <p className="text-4xl font-semibold">{dataRecipes[1].tittle}</p>
      <p className="text-lg text-gray-500 my-8">{dataRecipes[1].tittle}</p>
      <button onClick={()=>router.push(`/detailResep/${dataRecipes[1].id}`)} className="py-4 px-12 bg-yellow-400 text-white rounded-xl">Learn More</button>
    </div>
  </div>
</div>
</div> */}