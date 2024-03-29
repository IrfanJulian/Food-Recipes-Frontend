import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
// import { useRouter } from "next/router"

const AddRecipe = () => {

    const router = useRouter()
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
        const idUser = localStorage.getItem('id')
        const token = localStorage.getItem('token')
        setId(idUser)
        setToken(token)
    }, [])
    const [id, setId] = useState()
    const [token, setToken] = useState()

    const [input, setInput] = useState({
        tittle: '',
        ingredients: '',
        description: ''
    })

    const [photo, setPhoto] = useState([])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handlePhoto = (e) => {
        const handle = e.target.files[0]
        setPhoto(handle);
    }
    

    const handleUpload = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        const formData = new FormData()
        formData.append('userid', id)
        formData.append('tittle', input.tittle)
        formData.append('ingredients', input.ingredients)
        formData.append('description', input.description)
        formData.append('photo', photo, photo.name)
        if(token){
            Swal.fire({
                title: 'Are you sure?',
                text: "The recipes will upload",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then(async(result) => {
                if (result.isConfirmed) {
                    try {
                        await axios({
                            method: 'POST',
                            url: `${process.env.NEXT_PUBLIC_URL_API}/recipe`,
                            data: formData,
                            headers: {
                                authorization: `Bearer ${token}`
                            },
                            withCredentials: true
                        })
                        Swal.fire(
                            'Success Upload!',
                            'Congratulations.',
                            'success'
                            )
                        window.location.reload()
                    } catch (error) {
                        console.log(error);
                        Swal.fire(
                            'Upload Failed!',
                            'Try again.',
                            'error'
                            )
                        }
                    }
                })
        }
    }

  return (
    <div>
        <Navbar1 />
        <div className="container mx-auto">
            <form onSubmit={handleUpload} className="grid">
                <div className="flex items-center rounded-xl justify-center w-full mt-36">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">MP4 (MAX. 10Mb)</p>
                        </div>
                        <input id="dropzone-file" name="photo" onChange={handlePhoto} type="file" className="hidden" />
                    </label>
                </div> 
                <input type="text" name="tittle" onChange={handleChange} value={input.tittle} placeholder="Title" className="w-full rounded-xl py-7 px-10 bg-gray-100 mt-10" />
                <input type="text" name="ingredients" onChange={handleChange} value={input.ingredients} placeholder="Ingredients" className="w-full rounded-xl px-10 bg-gray-100 mt-10 h-44" />
                <input type="text" name="description" onChange={handleChange} value={input.description} placeholder="Description" className="w-full rounded-xl px-10 bg-gray-100 mt-10 h-64" />
                <button type="submit" className="px-36 py-4 bg-yellow-400 rounded-xl text-white text-xl font-semibold mx-auto my-10">Post</button>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default AddRecipe