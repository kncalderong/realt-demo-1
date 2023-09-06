'use client'

import {
  faBarsStaggered,
  faCaretDown,
  faCircleUser,
  faDollarSign,
  faStore,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

const Navbar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)
  const isUser = true

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsNavbarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isNavbarOpen])

  useEffect(() => {
    setIsNavbarOpen(false)
  }, [pathname, searchParams])

  return (
    <>
      <button onClick={() => toggleNavbar()}>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className='w-[30px] h-[30px] text-realt-dark-blue'
        />
      </button>
      <aside
        className={`absolute left-0 top-0 w-full h-screen z-[2] bg-transparent  transition-all duration-200 ${
          isNavbarOpen
            ? 'pointer-events-auto backdrop-blur-sm'
            : 'pointer-events-none'
        }`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsNavbarOpen(false)
          }
        }}
      >
        <nav
          className={`relative  z-[2] w-[90%] h-[95%] mt-[14%] rounded-tr-lg shadow-md transition-transform duration-200 flex flex-col text-white overflow-hidden ${
            isNavbarOpen ? 'translate-x-0' : '-translate-x-[101%]'
          }`}
        >
          <div className='flex items-center justify-between px-4 py-5 bg-realt-blue-700/90'>
            {isUser ? (
              <div className='flex items-center justify-between gap-3'>
                <div className='relative flex justify-center items-center rounded-full overflow-hidden w-[50px] h-[50px]'>
                  <Image
                    src={'/avatar/image-amyrobson.png'}
                    alt='user-photo'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='grow'>
                  <div className='w-[88%]'>
                    <p className='text-lg truncate'>Amy Robson Long Name</p>
                    <p className='text-sm truncate'>amyrobson@test.com</p>
                  </div>
                </div>
              </div>
            ) : (
              <Link href={'/'} className='flex items-center gap-4'>
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className='w-[35px] h-[35px]'
                />
                <p className='text-lg'>Register / Login</p>
              </Link>
            )}

            <div
              className='flex items-center justify-center w-[35px] h-[35px] rounded-md bg-realt-blue-600/90'
              onClick={() => toggleNavbar()}
            >
              <FontAwesomeIcon icon={faClose} className='w-[25px] h-[25px]' />
            </div>
          </div>
          <div className='flex flex-col h-full gap-4 p-4 bg-realt-blue-750/[85]'>
            <Link href='/' className='flex items-center gap-4 px-4'>
              <FontAwesomeIcon icon={faStore} />
              <p>Marketplace</p>
            </Link>
            <div className='flex items-center justify-between px-4'>
              <div className='flex gap-4'>
                <FontAwesomeIcon icon={faDollarSign} />
                <p>Token Actions</p>
              </div>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Navbar