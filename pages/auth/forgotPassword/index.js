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
            <p className="text-lg text-gray-500 text-center my-10">We just need your registered e-mail address to send your password resend</p>
            <form action="" className="w-1/2 grid mx-auto border-t-2 border-b-2 py-8">
              <p className="text-md text-gray-500 font-semibold">E-mail</p>
              <input type="email" placeholder="Insert your email" className="mb-8 mt-3 h-12 border border-gray-400 w-full rounded-xl px-5" />
              <button className='h-14 bg-yellow-400 rounded-xl text-white'>Send Email</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default index