/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"
import { useRouter } from "next/router"
import axios from "axios"
import Swal from "sweetalert2"

const DetailResep = () => {

    const router = useRouter()

    const [data, setData] = useState({})
    const [userid, setUserid] = useState()
    const [recipeid, setRecipeid] = useState()
    const [comment, setComment] = useState('')
    // console.log(comment);

    useEffect(()=>{
        const id = router.query.id
        // console.log(id);
        const token = localStorage.getItem('token')
        const getDetail = async() => {
                try {
                const result = await axios({
                    method: 'GET',
                    url: `${process.env.NEXT_PUBLIC_URL_API}/recipe/${id}`,
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setData(result.data.data[0])
                localStorage.setItem('idrecipe', result.data.data[0].id)
            } catch (error) {
                console.log(error);
            }
        }
        getDetail()
    }, [router.query.id])

    useEffect(()=>{
        const iduser = localStorage.getItem('id')
        const idrecipe = localStorage.getItem('idrecipe')
        setUserid(iduser)
        setRecipeid(idrecipe)
        console.log(iduser, '====>>>>>' , idrecipe);
    }, [data.id])

    const [foodComment, setFoodComment] = useState([])

    useEffect(()=>{
        const getDetailComment = async() => {
            try {
                const res = await axios({
                    method: 'GET',
                    url: `${process.env.NEXT_PUBLIC_URL_API}/comment/${recipeid}`
                })
                setFoodComment(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        getDetailComment()
    }, [recipeid])

    const handleComment = async(e) => {
        e.preventDefault()
        const dataUpload = {
            userid: userid,
            recipeid: recipeid,
            comment: comment
        }
        try {
            await axios({
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_URL_API}/comment`,
                data: dataUpload,
                // headers: {
                //     "Content-Type": "application/json"
                // },
                withCredentials: true
            })
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Send Comment Success'
              })
              window.location.reload()
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              })
        }
    }

  return (
    <div>
        <Navbar1 />
        <div className="container mx-auto">
            { data ? 
            <div className="wrapperr">
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
            </div>
            : <p className="text-4xl font-bold text-center">Something Wrong . . .</p>}

            <div className="comment mb-8 mt-28 grid">
                <input type="text" name="comment" value={comment} onChange={(e)=>setComment(e.target.value)} className="w-full rounded-xl bg-gray-200 py-24 px-10 outline-none" placeholder="Comment :" />
                <button onClick={handleComment} className="bg-yellow-400 rounded-xl text-xl text-white px-7 py-3 mt-7 ml-auto">Comment</button>
                <p className="text-3xl font-semibold my-16">Comments :</p>
                { foodComment ? foodComment.map((comment)=>
                <div className="flex mb-4 pb-4 border-b w-1/2" key={comment.id}>
                    <div className="pict w-[4rem] h-[4rem] rounded-full overflow-hidden mr-8">
                        <img src={comment.photo} alt="icon" className="w-[4rem] h-[4rem]" />
                    </div>
                    <div className="wrappertext">
                        <p className="text-xl font-semibold">{comment.name}</p>
                        <p className="text-md text-gray-600">{comment.comment}</p>
                    </div>
                </div>
                ) : <p className="text-xl font-semibold text-center text-gray-400">No Comment</p> }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DetailResep