'use client'

import { Canvas } from '@react-three/fiber'
import { PtbHomeScene1 } from '../scenes'

export const PageTitleBar3d = () => {
  return (
    <section className='relative w-full h-screen pointer-events-none bg-foreground'>
      <div className='absolute flex items-center justify-between align-middle px-6 py-3 mx-auto   z-10 bottom-8 left-8'>
        <h1 className='pointer-events-auto pointer mx-auto text-left mb-4 text-4xl font-extrabold leading-none tracking-tight text-primary-50 md:text-6xl'>
          ICON <span className='text-primary-700'>O&apos;</span> CLASH
        </h1>
      </div>
      <Canvas
        className='fixed inset-0 z-0'
        shadows
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
        <PtbHomeScene1 />
      </Canvas>
    </section>
  )
}

// https://www.youtube.com/watch?v=LdNoGGZd72c
// https://www.youtube.com/watch?v=SgeW3av3SFg
