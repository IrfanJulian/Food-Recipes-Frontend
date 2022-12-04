import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer grid h-[33rem] mt-28 bg-yellow-400">
        <div className="w border relative grid">
        <div className="text my-auto">
            <p className="text-6xl text-blue-900 text-center">Eat, Cook, Repeat</p>
            <p className="text-2xl text-center mt-12 text-gray-500">Share your best recipe by uploading here !</p>
        </div>
            <div className="text absolute flex w-full justify-center mb-14 bottom-0">
                <p className="text-gray-500 text-xl mx-5"><Link href='/'>Product</Link></p>
                <p className="text-gray-500 text-xl mx-5"><Link href='/'>Company</Link></p>
                <p className="text-gray-500 text-xl mx-5"><Link href='/'>Learn More</Link></p>
                <p className="text-gray-500 text-xl mx-5"><Link href='/'>Get in Touch</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Footer