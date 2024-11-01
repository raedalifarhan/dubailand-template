import Image from 'next/image'
import React from 'react'

const BannerHome = () => {
  return (
    <div className='relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 rounded-md'>
        <div className='mx-auto px-8 py-12 flex flex-col md:flex-row gap-2 items-center justify-evenly'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>البوابة الداخلية</h1>
                <p className='text-lg md:text-xl text-white mb-2'>دائرة الاراضي والاملاك في دبي</p>
                <h2 className='text-2xl md:text-5xl uppercase font-bold text-yellow-400'>انجز مهامك ببساطة وبدقة</h2>
            </div>
            <div className='w-1/3 relative aspect-video'>
                <Image
                    src={`/banner-image.png`}
                    fill
                    alt='Banner Image'
                    className='object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default BannerHome