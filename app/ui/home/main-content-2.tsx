import Image from 'next/image'

export const MainContentTwo = () => {
  return (
    <div className='container py-4 md:py-8 mx-auto  my-0'>
      <div className='flex flex-col md:flex-row gap-8 items-start justify-start'>
        
        <div className='basis-1/2 mx-auto my-0'>
          <Image
            src='/songs-images/icon-o-clash-songs-Mind-Radio.webp'
            alt='song cover image'
            height={800}
            width={800}
          />
        </div>

        <div className='basis-1/2 mx-auto my-0 flex flex-col items-start justify-start'>
          <h3 className='text-4xl  w-full h-full mb-6 text-left'>MIND RADIO</h3>
        </div>
      </div>
    </div>
  )
}
