import axios from "axios"
import Link from "next/link"

const Navbar1 = () => {

  const data = {
    token: localStorage.getItem('token'),
    name: localStorage.getItem('name'),
    photo: localStorage.getItem('photo')
  }

  const handleLogout = () => {
    localStorage.clear()
  }
  return (
    <div>
      { data ? 
        <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/landingPage'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/addRecipe'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/profile'>Profile</Link></p>
              <div className="icon ml-auto flex">
                <img src={data.photo} alt="icon" className="w-[3rem] h-[3rem] rounded-full" />
                <div className="ml-3 my-auto">
                  <Link href='/' onClick={handleLogout}><p className="text-white text-lg font-semibold">Logout</p></Link>
                </div>
              </div>
          </div> 
          :
          <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/addRecipe'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/profile'>Profile</Link></p>
              <div className="icon ml-auto flex">
                <img src={"/UserIcon.png"} alt="icon" className="" />
                <div className="ml-3 my-auto">
                  <Link href='/' onClick={handleLogout}><p className="text-white text-lg font-semibold">Logout</p></Link>
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


