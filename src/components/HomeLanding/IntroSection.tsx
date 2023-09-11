'use client'

import Image from 'next/image'
import React, { useRef, useLayoutEffect } from 'react'
import heroBlockStacking from '../../../public/hero-block-stacking.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import useGsapContext from '@/hooks/gsapContexts'

gsap.registerPlugin(ScrollTrigger)

const IntroSection = () => {
  const landingBlock1Ref = useRef<HTMLDivElement>(null)

  const ctx = useGsapContext(landingBlock1Ref)

  useLayoutEffect(() => {
    ctx.add(() => {
      // animate the intro elements into place
      const tl = gsap.timeline({ delay: 0.5 })
      tl.from('.intro_title', {
        // x: 100,
        y: 400,
        ease: 'power4',
        duration: 3,
      })
        .from(
          '.intro_txt',
          {
            x: -100,
            opacity: 0,
            ease: 'power4',
            duration: 3,
          },
          0.7
        )
        .from(
          '.intro_img--1',
          {
            // x: -50,
            y: 50,
            opacity: 0,
            ease: 'power2',
            duration: 4,
          },
          1
        )
    })
    return () => ctx.revert() //clean up animations when component unmounted
  }, [ctx])

  return (
    <section
      className='intro w-full max-w-[960px] gap-6 min-h-[calc(100vh-10rem)] flex flex-col justify-center overflow-hidden md:w-3/4 lg:w-full lg:items-center lg:flex-row-reverse '
      ref={landingBlock1Ref}
    >
      <div className='relative w-full lg:w-1/2'>
        <Image
          src={heroBlockStacking}
          alt='hero Realt stacking'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 75vw,50vw'
          className='intro_img--1 w-full h-auto  '
        />
      </div>

      <div className='w-full lg:w-1/2 flex flex-col gap-6 items-start'>
        <h3 className='intro_title'>
          Fractional and frictionless real estate investment
        </h3>
        <h5 className='text-realt-blue-700'>Reinvented property</h5>
        <p className='intro_txt'>
          For the first time, investors around the world can buy into the US
          real estate market through tokenized, fractional, fully compliant
          ownership. Powered by blockchain.
        </p>
        <button>Start</button>
      </div>
    </section>
  )
}

export default IntroSection