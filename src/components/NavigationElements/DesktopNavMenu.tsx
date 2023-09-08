'use client'

import { faAngleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useRef, useState } from 'react'

type DropdownElements = 'tokens' | 'DeFi' | 'team' | 'learn'

const DesktopNavMenu = () => {
  const linksConteinerRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  const [activeMenuElement, setActiveMenuElement] =
    useState<null | DropdownElements>(null)

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
        <div
          className='cursor-pointer h-full grid place-items-center w-full relative'
          onMouseEnter={() => setActiveMenuElement('tokens')}
          onMouseLeave={() => {
            setActiveMenuElement(null)
          }}
        >
          Tokens Actions
          <FontAwesomeIcon
            icon={faAngleDown}
            className='absolute right-0 top-1/2 -translate-y-1/2 text-realt-blue-700'
          />
          {activeMenuElement === 'tokens' && (
            <>
              <div className='absolute w-full h-[150%] left-0 top-0 bg-transparent'></div>
              <FloatingMenuContainer elementActive='tokens' />
            </>
          )}
        </div>
        <div
          className='cursor-pointer h-full grid place-items-center w-full relative'
          onMouseEnter={() => setActiveMenuElement('DeFi')}
          onMouseLeave={() => {
            setActiveMenuElement(null)
          }}
        >
          DeFi
          <FontAwesomeIcon
            icon={faAngleDown}
            className='absolute right-0 top-1/2 -translate-y-1/2 text-realt-blue-700'
          />
          {activeMenuElement === 'DeFi' && (
            <>
              <div className='absolute w-full h-[150%] left-0 top-0 bg-transparent'></div>
              <FloatingMenuContainer elementActive='DeFi' />
            </>
          )}
        </div>
        <div
          className='cursor-pointer h-full grid place-items-center w-full relative'
          onMouseEnter={() => setActiveMenuElement('team')}
          onMouseLeave={() => {
            setActiveMenuElement(null)
          }}
        >
          Team
          <FontAwesomeIcon
            icon={faAngleDown}
            className='absolute right-0 top-1/2 -translate-y-1/2 text-realt-blue-700'
          />
          {activeMenuElement === 'team' && (
            <>
              <div className='absolute w-full h-[150%] left-0 top-0 bg-transparent'></div>
              <FloatingMenuContainer elementActive='team' />
            </>
          )}
        </div>
        <div
          className='cursor-pointer h-full grid place-items-center w-full relative'
          onMouseEnter={() => setActiveMenuElement('learn')}
          onMouseLeave={() => {
            setActiveMenuElement(null)
          }}
        >
          Learn
          <FontAwesomeIcon
            icon={faAngleDown}
            className='absolute right-0 top-1/2 -translate-y-1/2 text-realt-blue-700'
          />
          {activeMenuElement === 'learn' && (
            <>
              <div className='absolute w-full h-[150%] left-0 top-0 bg-transparent'></div>
              <FloatingMenuContainer elementActive='learn' />
            </>
          )}
        </div>
        <Link href='/' className='hover:text-realt-red'>
          Blog
        </Link>
      </div>
    </div>
  )
}

const FloatingMenuContainer = ({
  elementActive = null,
}: {
  elementActive: DropdownElements | null
}) => {
  return (
    <div className='absolute left-0 bottom-0 translate-y-[calc(100%+10px)] flex flex-col gap-4 p-4 rounded-md shadow-lg text-sm border-t-4 border-realt-blue-650 bg-white z-10'>
      {elementActive === 'tokens' && (
        <>
          <Link href='/' className='hover:text-realt-red'>
            Collateralize Tokens
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            Sell Tokens
          </Link>
        </>
      )}
      {elementActive === 'DeFi' && (
        <>
          <Link href='/' className='hover:text-realt-red'>
            Community Dashboard
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            1Inch Network
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            EPNS
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            YAM
          </Link>
        </>
      )}
      {elementActive === 'team' && (
        <>
          <Link href='/' className='hover:text-realt-red'>
            About Us
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            Jobs
          </Link>
        </>
      )}
      {elementActive === 'learn' && (
        <>
          <Link href='/' className='hover:text-realt-red'>
            Education
          </Link>
          <Link href='/' className='hover:text-realt-red'>
            FAQ
          </Link>
        </>
      )}
    </div>
  )
}

export default DesktopNavMenu
