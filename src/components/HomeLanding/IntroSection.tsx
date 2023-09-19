'use client'

import Image from 'next/image'
import React, { useRef, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import useGsapContext from '@/hooks/gsapContexts'
import FancyButton3d from '@/components/FancyButton3d'

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
        .from(
          '.intro_img--2',
          {
            // x: 50,
            y: -50,
            opacity: 0,
            ease: 'power2',
            duration: 8,
          },
          1
        )
    })
    return () => ctx.revert() //clean up animations when component unmounted
  }, [ctx])

  return (
    <section
      className='intro w-full max-w-[1024px] gap-6 pt-4 min-h-[calc(100vh-89px)] flex flex-col justify-center overflow-hidden md:pt-0 md:min-h-[calc(100vh-105px)] md:w-3/4 lg:w-full lg:items-center lg:flex-row lg:min-h-[calc(100vh-100px)] lg:gap-12 xl:pt-12'
      ref={landingBlock1Ref}
    >
      <div className='relative w-full h-auto min-h-[360px] md:min-h-[600px] lg:h-full lg:w-1/2'>
        <div className='intro_img--1 absolute overflow-hidden w-1/2 h-[250px] rounded-[2rem]  max-w-[390px]  left-[5%] top-[15%] z-[2] md:h-[360px] xl:h-[440px]  lg:w-3/5 lg:top-[25%] lg:left-0'>
          <Image
            src={
              'https://img.freepik.com/free-photo/high-angle-woman-working-laptop_23-2150132277.jpg?w=740&t=st=1694526267~exp=1694526867~hmac=2e01c9cc7caf41d402162a6a39618ba7c51aebdfba79306cd86a6b16f2264be9'
            }
            fill
            alt='hero Realt stacking'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 75vw,50vw'
            className='object-cover'
          />
        </div>
        <div className='intro_img--2 w-1/2 absolute overflow-hidden h-[250px] rounded-[2rem] max-w-[390px]  left-[45%] top-[30%] z-[1] md:h-[360px] xl:h-[440px] lg:w-3/5 lg:top-[10%] lg:left-[35%]'>
          <Image
            src='https://images.unsplash.com/photo-1567016251318-c85cc6f139c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='hero Realt stacking'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 75vw,50vw'
            className=' object-cover'
          />
        </div>
      </div>

      <div className='w-full h-1/2  flex flex-col gap-6 items-start pb-2 md:justify-center lg:h-full lg:w-1/2'>
        <h3 className='intro_title'>
          Fractional and frictionless real estate investing
        </h3>
        <h5 className='text-realt-blue-700'>OWNERSHIP REINVENTED</h5>
        <p className='intro_txt'>
          For the first time, investors around the globe can buy into the US
          real estate market through fully-compliant, fractional, tokenized
          ownership. Powered by blockchain.
        </p>
        <FancyButton3d href='/' text='Get Started' />
      </div>
    </section>
  )
}

export default IntroSection
