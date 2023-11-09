// https://github.com/emalorenzo/nerdearla-workshop-2022
// https://www.youtube.com/watch?v=0tE2M53z2Eg

//  import { MainContentOne, MainContentTwo } from './ui/home'
import { PageTitleBar3d } from './ui/home/ptb-hero-3d';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-start border'>
      <PageTitleBar3d />
      {/* <MainContentOne />
      <MainContentTwo /> */}
    </main>
  )
}
