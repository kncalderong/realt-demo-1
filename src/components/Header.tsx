import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
const Header = () => {
  return (
    <header className='fixed z-10 flex items-center w-full gap-6 px-6 py-3 bg-gradient-to-b from-realt-blue-250 to-white'>
      <div className='block lg:hidden'>
        <Navbar />
      </div>
      <Link href='/' className='flex justify-center grow'>
        <Image
          alt='realT-logo'
          src={'/realt_logo.svg'}
          width={125}
          height={65}
        />
      </Link>
      <Link href='/'>
        <FontAwesomeIcon
          icon={faCartShopping}
          className='w-[30px] h-[30px] text-realt-dark-blue'
        />
      </Link>
    </header>
  )
}

export default Header
