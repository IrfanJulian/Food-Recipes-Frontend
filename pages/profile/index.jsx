/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
import { useRouter } from "next/router"
import Swal from "sweetalert2"

const Profile = () => {

    const [data, setData] = useState({})
    const [update, setUpdate] = useState([])
    const [dataRecipes, setDataRecipe] = useState([])
    const [myRecipe, setMyRecipe] = useState()
    const [img, setImg] = useState()
    const router = useRouter()

    // const env = process.env.PROFILE
    // console.log(env);

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            Swal.fire(
                'Login first',
                'Login first',
                'error'
                )
            router.push('/auth/login')
        }
    })

    useEffect(()=>{
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('id')
        console.log(token);
        const getProfile = async () =>{
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/user/${id}`, { headers: { authorization: `Bearer ${token}` } }, { withCredentials: true })
                setData(result.data.data)
                setImg(result.data.data.photo)
            } catch (error) {
                console.log(error);
            }
        }
        getProfile()
        }, [])
        

    useEffect(()=>{
        const getRecipes = async() => {
            try {
                const token = localStorage.getItem('token')
                const result = await axios({
                    method: 'GET',
                    url: `${process.env.NEXT_PUBLIC_URL_API}/recipe`,
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
    }, [])

    const [id, setId] = useState()
    useEffect(()=>{
        const idUser = localStorage.getItem('id')
        setId(idUser)
    }, [])
    // console.log(id);
    
    useEffect(()=>{
        const getMyRecipe = async() => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_URL_API}/recipe/myrecipe/${id}`)
                setMyRecipe(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getMyRecipe()
    }, [id])

        const handlePhoto = (e) => {
            const handle = e.target.files[0]
            setUpdate(handle);
        }

        const handleUpload = async(e) => {
            e.preventDefault()
            const token = localStorage.getItem('token')
            const formData = new FormData()
            formData.append('photo', update, update.name)
            try {
                await axios({
                    method: 'PUT',
                    url: `${process.env.NEXT_PUBLIC_URL_API}/user/${data.id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    },
                    data: formData,
                    withCredentials: true
                })
                Swal.fire({
                    icon: 'success',
                    title: 'Update Photo Success'
                  })
                    router.push('/')
                window.location.reload()
            } catch (error) {
                console.log(error);
            }
        }

  return (
      <div>
        <Navbar1 />
        <div className="container grid mt-44 mx-auto mb-36">
            <div className="bio w-44 h-44 rounded-full overflow-hidden mx-auto">
                {img ?
                <img src={img} alt="icon" className="w-44 h-44" /> : <img src='/iconuser2.png' alt="icon" className="w-44 h-44" /> 
                }
            </div>
                <label htmlFor="changephoto" className="text-center mx-auto my-10">
                    <span className="text-xl text-gray-700"><img src="/edit-picture.png" alt="edit" /></span>
                    <input id="changephoto" name="photo" onChange={handlePhoto} type="file" className="hidden" />
                </label>
                <button type="submit" onClick={handleUpload} className="border-yellow-400 text-xl font-semibold text-white py-3 px-5 rounded-xl bg-yellow-400 w-max mx-auto">Change</button>
            {data ?
            <p className="text-3xl font-semibold text-center mt-10">{data.name}</p>
            : null }
        </div>
        <div className="container mx-auto">
            <div className="flex">
                <Link href='/'><p className="text-xl text-gray-600 font-semibold mr-8">My Recipe</p></Link>
            </div>
            <hr className="my-10 border border-gray-200" />
            <div className="h-60 wrapperrecipe grid grid-cols-4 gap-20 overflow-hidden">
                {myRecipe ? myRecipe.map((item)=>
                <Link href={`/detailResep/${item.id}`} key={item.id}>
                <div key={item.id} className="card relative w-80 h-56 rounded-xl overflow-hidden">
                    <video className="w-80 h-56" controls>
                        <source src={item.photo} type="video/mp4" />
                    </video>
                    <div className="text absolute left-5 bottom-5 w-1/4">
                        <p className="text-3xl text-white font-semibold">{item.tittle}</p>
                    </div>
                </div>
                </Link>
                ) : null }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile