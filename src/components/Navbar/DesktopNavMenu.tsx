'use client'

import Link from 'next/link'
import React, { useRef } from 'react'

const DesktopNavMenu = () => {
  const linksConteinerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  const handleBorderWidth = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const containerStart =
      window.innerWidth > 1440 ? 30 + (window.innerWidth - 1440) / 2 : 40

    barRef.current!.style.setProperty(
      '--width-percentage',
      `${
        ((e.clientX - containerStart) * 100) /
        linksConteinerRef.current!.offsetWidth
      }%`
    )
  }

  const restoreBorderWidth = () => {
    barRef.current!.animate(
      {
        width: `0%`,
      },
      { duration: 300 }
    )
    setTimeout(() => {
      barRef.current!.style.setProperty('--width-percentage', `0%`)
    }, 250)
  }

  return (
    <div className='hidden lg:grid w-[calc((100%-164px)/2)] relative  text-[15px] font-semibold'>
      {/* width calc comes from half of the header minus the centered logo */}

      <div className='absolute w-10 h-full -left-10 top-1/2 -translate-y-1/4 bg-realt-blue-600 shadow-header-box'></div>
      <div
        className='h-[60px] w-3/4 pl-8 grid grid-cols-5 gap-2 justify-items-center items-center border-b-[1px] border-slate-400 relative'
        onMouseMove={(e) => handleBorderWidth(e)}
        onMouseLeave={restoreBorderWidth}
        ref={linksConteinerRef}
      >
        <div
          className='absolute min-w-[2rem] h-[3px] bg-realt-red left-0 bottom-[-2px]'
          style={{ width: `var(--width-percentage)` }}
          ref={barRef}
        ></div>
        <div className='cursor-pointer h-full grid place-items-center w-full'>
          Tokens Actions
        </div>
        <div className='cursor-pointer h-full grid place-items-center w-full'>
          DeFi
        </div>
        <div className='cursor-pointer h-full grid place-items-center w-full'>
          Team
        </div>
        <div className='cursor-pointer h-full grid place-items-center w-full'>
          Learn
        </div>
        <Link href='/' className='cursor-pointer'>
          Blog
        </Link>
      </div>
    </div>
  )
}

export default DesktopNavMenu
