import Link from "next/link"

const Navbar1 = () => {
  return (
    <div>
        <div className="container w-full absolute top-0 left-0 right-0 mx-auto py-7 flex">
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Home</Link></p>
            <p className="mr-32 text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Add Recipe</Link></p>
            <p className="text-blue-900 my-auto font-semibold text-xl"><Link href='/'>Profile</Link></p>
            <div className="icon ml-auto">
                <Link href='/auth/login' className="flex">
                    <img src="/UserIcon.png" alt="icon" className="" />
                    <p className="text-white text-lg font-semibold ml-3 my-auto">Login</p>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar1


