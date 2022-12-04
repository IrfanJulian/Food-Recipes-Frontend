import Footer from "../../components/footer"
import Navbar1 from "../../components/navbar"

const DetailResep = () => {
  return (
    <div>
        <Navbar1 />
        <div className="container mx-auto">
            <p className="text-5xl text-blue-900 text-center font-semibold mt-44">Loream Sandwich</p>
            <div className="img w-[59rem] h-[36rem] overflow-hidden border rounded-3xl mx-auto my-24">
                <img src="/content.png" alt="content" className="w-[60rem]" />
            </div>
            <ul className="list-disc">
                <p className="text-4xl font-semibold mb-6">Ingredients</p>
                <li className="ml-6"><p className="text-xl">2 Eggs</p></li>
                <li className="ml-6"><p className="text-xl">2 tbsp mayonnaise</p></li>
                <li className="ml-6"><p className="text-xl">3 slices bread</p></li>
                <li className="ml-6"><p className="text-xl">a little butter</p></li>
                <li className="ml-6"><p className="text-xl">⅓ carton of cress</p></li>
                <li className="ml-6"><p className="text-xl">2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</p></li>
                <li className="ml-6"><p className="text-xl">crisps , to serve</p></li>
            </ul>
            <div className="wrapperVideo grid">
                <p className="text-4xl font-semibold mt-20 mb-8">Video Step</p>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
                <button className="py-6 px-36 w-1/4 bg-yellow-400 text-white font-bold rounded-xl mb-8">Play</button>
            </div>
            <div className="comment my-8">
                <input type="text" className="h-[24rem] w-full rounded-xl bg-gray-200 px-10" placeholder="Comment :" />
                <p className="text-3xl font-semibold my-16">Comment :</p>
                <div className="flex">
                    <div className="pict w-[4rem] h-[4rem] rounded-full overflow-hidden mr-8">
                        <img src="/iconprofile.png" alt="icon" className="w-[4rem] h-[4rem]" />
                    </div>
                    <div className="wrappertext">
                        <p className="text-xl font-semibold">User Name</p>
                        <p className="text-md text-gray-600">Nice recipe. simple and delicious, thankyou</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DetailResep