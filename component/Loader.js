import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className='fixed z-[9999] w-screen h-screen flex items-center justify-center bg-white/80 flex-col gap-y-0.5'>
      <Image src={"/loader.gif"} priority alt='Loading Image' width={110} height={110}/>
      <p className='text-lg animate-pulse font-mono font-medium'>Loading...</p>
    </div>
  )
}

export default Loader