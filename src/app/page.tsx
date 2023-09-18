import DefiSection from '@/components/HomeLanding/DefiSection'
import IntroSection from '@/components/HomeLanding/IntroSection'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className='flex min-h-screen pb-24 relative'>
      <div className='flex flex-col justify-start items-center w-[90%] mx-auto gap-16 md:gap-20'>
        <SmoothScroll />
        <IntroSection />
        <DefiSection />
      </div>
    </main>
  )
}
