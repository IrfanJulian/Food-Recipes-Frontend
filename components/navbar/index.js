import Link from "next/link"

const Navbar1 = () => {

  const token = localStorage.getItem('token')
  const handleLogout = () => {
    localStorage.clear()
  }
  return (
    <div>
        <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Profile</Link></p>
            <div className="icon ml-auto flex">
                
                    <img src="/UserIcon.png" alt="icon" className="" />
                    <div className="ml-3 my-auto">
                    {!token ?
                      <Link href='/auth/login'><p className="text-white text-lg font-semibold">Login</p></Link> :
                      <Link href='/auth/login' onClick={handleLogout}><p className="text-white text-lg font-semibold">Logout</p></Link>
                    }
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar1


