/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
import { useRouter } from "next/router"

const Profile = () => {

    const token = localStorage.getItem('token')
    const [data, setData] = useState({})
    const [update, setUpdate] = useState([])
    const [dataRecipes, setDataRecipe] = useState([])
    const photo = data.photo

    // const env = process.env.PROFILE
    // console.log(env);

    useEffect(()=>{
        const getProfile = async () =>{
            try {         
                const result = await axios({
                  method: 'GET',
                  url: `${process.env.URL_PROFILE}`,
                  headers: {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                  }
                })
                setData(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProfile()
        }, [])
        

    useEffect(()=>{
        const getRecipes = async() => {
            try {
                const result = await axios({
                    method: 'GET',
                    url: `${process.env.URL_GET_RECIPES}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setDataRecipe(result.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getRecipes()
    }, [token])

        const handlePhoto = (e) => {
            const handle = e.target.files[0]
            setUpdate(handle);
        }

        const handleUpload = async(e) => {
            e.preventDefault()
            // console.log(token);
            const formData = new FormData()
            formData.append('photo', update, update.name)
            try {
                const updateData = await axios({
                    method: 'PUT',
                    url: `${process.env.URL_UPDATE_PROFILE_PICT}/${data.id}`,
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "authorization": `Bearer ${token}`
                    }
                })
                alert('Update Photo Sucess')
                // console.log(updateData);
            } catch (error) {
                console.log(error);
            }
        }

  return (
      <div>
        <Navbar1 />
        <div className="container grid mt-44 mx-auto mb-36">
            <div className="bio w-44 h-44 rounded-full overflow-hidden mx-auto">
                {photo ?
                <img src={data.photo} alt="icon" className="w-44 h-44" /> : <img src='/iconuser2.png' alt="icon" className="w-44 h-44" /> 
                }
            </div>
                <form onSubmit={handleUpload} className="flex justify-center mt-5">
                    <label htmlFor="changephoto" className="text-center mr-3">
                        <span className="text-xl text-gray-700"><img src="/edit-picture.png" alt="edit" /></span>
                        <input id="changephoto" name="photo" onChange={handlePhoto} type="file" className="hidden" />
                    </label>
                    <button type="submit" className="border-yellow-400 text-xl">Change</button>
                </form>
            <p className="text-3xl font-semibold text-center mt-10">{data.name}</p>
            {/* <p className="text-3xl font-semibold text-center mt-10">VALUE ENV = {process.env.URL_PROFILE}</p> */}
        </div>
        <div className="container mx-auto">
            <div className="flex">
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">My Recipe</p></Link>
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">Saved Recipe</p></Link>
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">Like Recipe</p></Link>
            </div>
            <hr className="my-10 border border-gray-200" />
            <div className="h-60 wrapperrecipe grid grid-cols-4 gap-20 overflow-hidden">
                {dataRecipes.map((item)=>
                <Link href={`/detailResep/${item.id}`} key={item.id}>
                <div key={item.id} className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <img src={item.photo} alt="recipe" className="w-80 h-56" />
                    <div className="text absolute left-5 bottom-5 w-1/4">
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

export default Profile