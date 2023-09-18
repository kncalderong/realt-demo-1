'use client'

import useGsapContext from '@/hooks/gsapContexts'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FancyButton3d from '../FancyButton3d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGears,
  faPersonCircleQuestion,
  faPersonSnowboarding,
} from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(ScrollTrigger)

const DefiSection = () => {
  const DefiSectionRef = useRef<HTMLDivElement>(null)

  const ctx = useGsapContext(DefiSectionRef)

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to('.card-image', {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.card',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [ctx])

  return (
    <section
      ref={DefiSectionRef}
      className='w-full min-h-screen flex flex-col gap-10 lg:flex-row-reverse lg:max-w-[1440px] lg:gap-20'
    >
      <div className='card relative block w-full min-h-[365px] overflow-hidden lg:w-1/2 '>
        <Image
          className='card-image'
          src='https://images.unsplash.com/photo-1695010811495-d7b9eba38584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='demo image'
          width={1364}
          height={1705}
          style={{
            height: '200%',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 75vw'
        />
      </div>
      <div className='relative w-full h-auto flex flex-col gap-6 lg:w-1/2 lg:justify-center'>
        <h3>DeFi Integrated</h3>
        <h5 className='text-realt-blue-550'>
          Discover The Power Of RealT{' '}
          <span className='text-realt-red'>RMM</span> Platform
        </h5>
        <p>
          Leverage your assets like never before with the power of Decentralized
          Finance on the blockchain.
        </p>
        <p>
          <a href='/' className='text-realt-blue-550 mr-2'>
            The RealT RMM collateralization platform
          </a>
          <span>
            lets you supercharge your tokenized real estate portfolio.
          </span>
        </p>
        <div className='flex flex-wrap gap-4 items-center p-4 bg-realt-blue-100 rounded-2xl'>
          <Link
            href={'/'}
            className='bg-realt-blue-850 flex justify-center items-center flex-col gap-2 border-[rgba(255,255,255,0.1)] rounded-lg relative w-full h-[7rem] lg:h-[9rem] lg:w-[calc((100%-2rem)/3)]'
          >
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1520500374161-c2f4f955fda5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
              }}
              className='w-full h-full rounded-lg bg-cover bg-center opacity-30 transition-opacity duration-200 absolute left-0 top-0 hover:opacity-80 z-[1]'
            ></div>
            <FontAwesomeIcon
              icon={faGears}
              color='#fff'
              className='z-[2] w-12 h-12 pointer-events-none'
            />
            <p className='text-white font-bold z-[2] pointer-events-none'>
              How It Works
            </p>
          </Link>
          <Link
            href={'/'}
            className='bg-realt-blue-850 flex justify-center items-center flex-col gap-2 border-[rgba(255,255,255,0.1)] rounded-lg relative w-full h-[7rem] lg:h-[9rem] lg:w-[calc((100%-2rem)/3)]'
          >
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1458419948946-19fb2cc296af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
              }}
              className='w-full h-full rounded-lg bg-cover bg-center opacity-30 transition-opacity duration-200 absolute left-0 top-0 hover:opacity-80 z-[1]'
            ></div>
            <FontAwesomeIcon
              icon={faPersonCircleQuestion}
              color='#fff'
              className='z-[2] w-12 h-12 pointer-events-none'
            />
            <p className='text-white font-bold z-[2] pointer-events-none'>
              Why It Works
            </p>
          </Link>
          <Link
            href={'/'}
            className='bg-realt-blue-850 flex justify-center items-center flex-col gap-2 border-[rgba(255,255,255,0.1)] rounded-lg relative w-full h-[7rem] lg:h-[9rem] lg:w-[calc((100%-2rem)/3)]'
          >
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
              }}
              className='w-full h-full rounded-lg bg-cover bg-center opacity-30 transition-opacity duration-200 absolute left-0 top-0 hover:opacity-80 z-[1]'
            ></div>
            <FontAwesomeIcon
              icon={faPersonSnowboarding}
              color='#fff'
              className='z-[2] w-12 h-12 pointer-events-none'
            />
            <p className='text-white font-bold z-[2] pointer-events-none'>
              How To Use It
            </p>
          </Link>
        </div>
        <div className='w-full flex justify-center items-center'>
          <FancyButton3d
            href='/'
            text='Go To The RMM'
            isExternalLink={true}
            color='red'
          />
        </div>
        <div className='flex justify-center items-center'>
          <p className='font-bold'>
            Powered by{' '}
            <a href='/' className='text-realt-blue-600'>
              AAVE
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default DefiSection
