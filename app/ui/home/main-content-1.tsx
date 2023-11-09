import Image from 'next/image'

import { Button } from '@nextui-org/react'

export const MainContentOne = () => {
  return (
    <div className='container py-4 md:py-8 mx-auto my-0'>
      <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
        <div className='basis-1/2 mx-auto my-auto flex flex-col items-start justify-center'>
          <h3 className='text-4xl  w-full h-full mb-6'>
            &quot;Moving away from time&quot;
          </h3>
          <Button className='text-foreground hover:bg-foreground-200 border-foreground' variant='bordered' radius='none' size="lg">
            MORE ABOUT US
          </Button>
        </div>
        <div className='basis-1/2 mx-auto my-auto py-10'>
          <Image
            src='/home-images/Time-icon-o-clash.webp'
            alt='black lines in white background'
            height={530}
            width={707}
          />
        </div>
      </div>
    </div>
  )
}
