import Image from 'next/image'

const BackgroundSide = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/backgroundSide.png')]">
        <div className="absolute h-screen w-full opacity-75 bg-yellow-500 grid align-middle">
          <Image className="mx-auto mt-auto mb-auto opacity-100" src="/logoRecipe.png" width={148} height={182} alt="logoRecipe" />
        </div>
    </div>
  )
}

export default BackgroundSide