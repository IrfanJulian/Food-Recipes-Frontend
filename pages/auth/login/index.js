import Link from "next/link"
import BackgroundSide from "../../../components/backgroundSide"

const index = () => {
  return (
    <div className='flex'>
        <div className="w-1/2">
          <BackgroundSide />
        </div>
        <div className="grid border w-1/2">
          <div className="my-auto">
            <p className="text-4xl font-bold text-yellow-400 text-center my-auto">Welcome</p>
            <p className="text-lg text-gray-500 text-center my-10">Log in into your existing account</p>
            <form action="" className="w-1/2 grid mx-auto border-t-2 border-b-2 py-8">
              <p className="text-md text-gray-500 mb-5 font-semibold">E-mail</p>
              <input type="email" placeholder="Insert your email" className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <p className="text-md text-gray-500 mb-3 mt-5 font-semibold">Password</p>
              <input type="password" placeholder="Insert your password" className="h-12 border border-gray-400 w-full rounded-xl px-5" />
              <div className="flex my-9">
                <input type="checkbox" name="themeToggler" id="themeToggler" className="peer w-4 h-4 mt-1 mr-5" />
                <label for="themeToggler"></label>
                <p className="text-md text-gray-500">I Agree to Terms & Condition</p>
              </div>
              <button className='h-14 bg-yellow-400 rounded-xl text-white'>Log In</button>
              <Link href="/" className='mt-3 text-end'>Forgot Password?</Link>
            </form>
            <div className="flex mt-5 justify-center">
              <p className='text-md text-gray-500 mr-2'>Dont have an account?</p>
              <p><Link href="/" className='text-yellow-400 '>Sign up</Link></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default index