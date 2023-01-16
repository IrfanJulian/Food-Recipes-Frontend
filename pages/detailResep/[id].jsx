/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
import { useRouter } from "next/router"
import axios from "axios"

const DetailResep = () => {

    const router = useRouter()

    const [data, setData] = useState({})
    // const [ingredients, setIngredients] = useState()

    useEffect(()=>{
        const id = router.query.id
        const token = localStorage.getItem('token')
        const getDetail = async() => {
                try {
                const result = await axios({
                    method: 'GET',
                    url: `http://localhost:7500/recipe/${id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setData(result.data.data[0])
            } catch (error) {
                console.log(error);
            }
        }
        getDetail()
    }, [router.query.id])
    console.log(data);

  return (
    <div>
        <Navbar1 />
        <div className="container mx-auto">
            <p className="text-5xl text-blue-900 text-center font-semibold mt-44">{data.tittle}</p>
            <div className="img w-[59rem] h-[36rem] overflow-hidden rounded-3xl mx-auto my-24">
                <video className="w-[59rem] h-[36rem]" controls>
                    <source src={data.photo} type="video/mp4" />
                </video>
            </div>
            <div className="mb-16">
                <p className="text-4xl font-semibold mb-6">Description</p>
                <div>
                    <p className="text-xl">{data.description}</p>
                </div>
            </div>
            <div className="">
                <p className="text-4xl font-semibold mb-6">Ingredients</p>
                <div>
                    <p className="text-xl">{data.ingredients}</p>
                </div>
            </div>
            {/* <div className="wrapperVideo grid">
                <p className="text-4xl font-semibold mt-20 mb-8">Video Step</p>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
            </div> */}
            <div className="comment my-8">
                <input type="text" className="h-[24rem] w-full rounded-xl bg-gray-200 px-10" placeholder="Comment :" />
                <p className="text-3xl font-semibold my-16">Comments :</p>
                <div className="flex">
                    <div className="pict w-[4rem] h-[4rem] rounded-full overflow-hidden mr-8">
                        <img src="/iconprofile.png" alt="icon" className="w-[4rem] h-[4rem]" />
                    </div>
                    <div className="wrappertext">
                        <p className="text-xl font-semibold">User Name</p>
                        <p className="text-md text-gray-600">Nice recipe. simple and delicious, thankyou</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DetailResep