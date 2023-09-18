import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import Sidebar from './Sidebar'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import DesktopNavMenu from './NavigationElements/DesktopNavMenu'

const Header = () => {
  return (
    <header className='sticky top-0 z-10 w-full bg-gradient-to-b from-realt-blue-250 to-white '>
      <div className=' flex items-center gap-6 px-6 py-3 w-full md:px-10 md:py-5 lg:justify-between lg:max-w-[1440px] lg:mx-auto'>
        <div className='block lg:hidden'>
          <Sidebar />
        </div>

        <DesktopNavMenu />

        <Link
          href='/'
          className='flex justify-center grow lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'
        >
          <div className='relative w-[125px] h-[65px] lg:w-[164px] lg:h-[82px]'>
            <Image
              alt='realT-logo'
              src={'/realt_logo.svg'}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </Link>

        <div className='justify-end hidden lg:flex w-[calc((100%-164px)/2)] '>
          {/* width calc comes from half of the header minus the centered logo */}

          <div className='flex justify-end pr-4 font-semibold text-[15px] grow xl:pr-16 '>
            <div className='grid items-center w-3/4 grid-cols-2 gap-2 justify-items-center'>
              <Link
                href='/marketplace'
                className='w-full h-full grid place-items-center relative group/marketplace-link hover:text-realt-red'
              >
                <div className='absolute w-0 h-[3px] bg-realt-red group-hover/marketplace-link:w-full left-0 bottom-0 transition-all duration-300'></div>
                Marketplace
              </Link>
              <Link
                href='/'
                className='w-full h-full grid place-items-center relative group/affilitate-program-link hover:text-realt-red'
              >
                <div className='absolute w-0 h-[3px] bg-realt-red group-hover/affilitate-program-link:w-full left-0 bottom-0 transition-all duration-300'></div>
                Affiliate Program
              </Link>
            </div>
          </div>

          <div className='relative flex gap-4'>
            <div className='absolute w-[140%] h-[1px] -right-10 top-1/2 z-[1] bg-slate-400 xl:w-[160%]'></div>
            <Link
              href='/'
              className='w-[60px] h-[60px] p-2 flex justify-center items-center border border-realt-blue-450 outline-1 outline outline-realt-blue-450  outline-offset-[-6px] rounded-full z-[2] bg-realt-blue-50 group/user-link'
            >
              <FontAwesomeIcon
                icon={faUser}
                className='w-[25px] h-[25px] text-realt-blue-850 group-hover/user-link:text-realt-gold transition-colors'
              />
            </Link>
            <Link
              href='/'
              className='w-[60px] h-[60px] p-2 flex justify-center items-center border border-realt-blue-450 outline-1 outline outline-realt-blue-450  outline-offset-[-6px] rounded-full z-[2] bg-realt-blue-50 group/cart-link'
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className='w-[25px] h-[25px] text-realt-blue-850 group-hover/cart-link:text-realt-gold transition-colors'
              />
            </Link>
          </div>
        </div>

        <Link href='/' className='block lg:hidden'>
          <FontAwesomeIcon
            icon={faCartShopping}
            className='w-[30px] h-[30px] text-realt-dark-blue'
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
