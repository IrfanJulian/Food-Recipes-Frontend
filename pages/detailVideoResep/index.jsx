/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Navbar1 from '../../components/navbar'

const DetailVideoResep = () => {
  return (
    <div className='border-l-23 border-yellow-400'>
        <Navbar1 />
        <div className="container mx-auto h-screen">
            <div className="flex h-screen">
                <div className="content1 w-3/4 mb-6 mt-auto">
                    <img src="/vid.png" alt="vid" />
                    <div className="wrappertext w-1/2 mt-6">
                        <p className='text-3xl font-semibold mb-6'>Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then mix it</p>
                        <p className='text-lg text-gray-500'>3 Months Ago</p>
                    </div>
                </div>
                <div className="content2 w-1/4 mb-6 mt-auto">
                    <p className='text-2xl font-bold mb-9'>Next</p>
                    <div className="wrappercontent mb-5">
                        <Link href='/'>
                        <div className="wrappervid w-[20rem] h-[10rem] overflow-hidden">
                            <img src="/vid2.png" alt="vid1" className='' />
                        </div>
                        <p className='text-lg font-semibold'>Beef Steak with Curry Sauce - [Step 5] Saute condiments together until turn brown</p>
                        <p className='text-sm text-gray-500'>HanaLohana - 3 month ago</p>
                        </Link>
                    </div>

                    <div className="wrappercontent mb-5">
                        <Link href='/'>
                        <div className="wrappervid w-[20rem] h-[10rem] overflow-hidden">
                            <img src="/vid3.png" alt="vid1" className='' />
                        </div>
                        <p className='text-lg font-semibold'>Beef Steak with Curry Sauce - [Step 6] Roast beef until it`s medium rare</p>
                        <p className='text-sm text-gray-500'>HanaLohana - 3 month ago</p>
                        </Link>
                    </div>

                    <div className="wrappercontent mb-5">
                        <Link href='/'>
                        <div className="wrappervid w-[20rem] h-[10rem] overflow-hidden">
                            <img src="/vid3.png" alt="vid1" className='' />
                        </div>
                        <p className='text-lg font-semibold'>Beef Steak with Curry Sauce - [Step 7] Roast beef until it`s medium rare</p>
                        <p className='text-sm text-gray-500'>HanaLohana - 3 month ago</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailVideoResep