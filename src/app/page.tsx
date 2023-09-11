import IntroSection from '@/components/HomeLanding/IntroSection'

export default function Home() {
  return (
    <main className='flex min-h-screen pb-24 h-[200vh] relative'>
      <div className='flex flex-col justify-start items-center w-[90%] mx-auto'>
        <IntroSection />
      </div>
    </main>
  )
}
