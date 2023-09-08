'use client'

import React, { useState } from 'react'
import {
  faBuildingLock,
  faCircleNodes,
  faGraduationCap,
  faMoneyCheckDollar,
  faNewspaper,
  faPeopleGroup,
  faStore,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MobileNavLinks = () => {
  const [isDEFIOpen, setIsDEFIOpen] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const [isTeamOpen, setIsTeamOpen] = useState(false)

  return (
    <div className='flex flex-col h-full gap-4 p-6 bg-realt-blue-750/[85] md:p-10'>
      <Link href='/' className='flex gap-4 items-center p-2'>
        <FontAwesomeIcon icon={faStore} className='w-[25px] h-[25px]' />
        <p>Marketplace</p>
      </Link>
      <Link href='/' className='flex gap-4 items-center p-2'>
        <FontAwesomeIcon icon={faNewspaper} className='w-[25px] h-[25px]' />
        <p>Blog</p>
      </Link>
      <Link href='/' className='flex gap-4 items-center p-2'>
        <FontAwesomeIcon icon={faUsers} className='w-[25px] h-[25px]' />
        <p>Affiliate Program</p>
      </Link>
      <Link href='/' className='flex gap-4 items-center p-2'>
        <FontAwesomeIcon icon={faBuildingLock} className='w-[25px] h-[25px]' />
        <p>Collateralize Tokens</p>
      </Link>
      <Link href='/' className='flex gap-4 items-center p-2'>
        <FontAwesomeIcon
          icon={faMoneyCheckDollar}
          className='w-[25px] h-[25px]'
        />
        <p>Sell Tokens</p>
      </Link>

      {/* DEFI section */}
      <div className='flex flex-col p-2'>
        <div
          className='flex gap-4 items-center'
          onClick={() => setIsDEFIOpen(!isDEFIOpen)}
        >
          <FontAwesomeIcon icon={faCircleNodes} className='w-[25px] h-[25px]' />
          <p>DeFi</p>
        </div>
        <div
          className={`flex w-full items-center overflow-hidden transition-all duration-300 pl-8 ${
            isDEFIOpen ? 'h-[160px] mt-4' : 'h-0 mt-0'
          }`}
        >
          <div className='h-full w-[2px] bg-realt-blue-600 mr-8'></div>
          <div className='flex flex-col grow'>
            <Link href='/' className='py-2'>
              Community Dashboard
            </Link>
            <Link href='/' className='py-2'>
              1Inch Network
            </Link>
            <Link href='/' className='py-2'>
              EPNS
            </Link>
            <Link href='/' className='py-2'>
              YAM
            </Link>
          </div>
        </div>
      </div>

      {/* Learn section */}
      <div className='flex flex-col p-2'>
        <div
          className='flex gap-4 items-center'
          onClick={() => setIsLearnOpen(!isLearnOpen)}
        >
          <FontAwesomeIcon
            icon={faGraduationCap}
            className='w-[25px] h-[25px]'
          />
          <p>Learn</p>
        </div>
        <div
          className={`flex w-full items-center overflow-hidden transition-all duration-300 pl-8 ${
            isLearnOpen ? 'h-[80px] mt-4' : 'h-0 mt-0'
          }`}
        >
          <div className='h-full w-[2px] bg-realt-blue-600 mr-8'></div>
          <div className='flex flex-col grow'>
            <Link href='/' className='py-2'>
              Education
            </Link>
            <Link href='/' className='py-2'>
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className='flex flex-col p-2'>
        <div
          className='flex gap-4 items-center'
          onClick={() => setIsTeamOpen(!isTeamOpen)}
        >
          <FontAwesomeIcon icon={faPeopleGroup} className='w-[25px] h-[25px]' />
          <p>Team</p>
        </div>
        <div
          className={`flex w-full items-center overflow-hidden transition-all duration-300 pl-8 ${
            isTeamOpen ? 'h-[80px] mt-4' : 'h-0 mt-0'
          }`}
        >
          <div className='h-full w-[2px] bg-realt-blue-600 mr-8'></div>
          <div className='flex flex-col grow'>
            <Link href='/' className='py-2'>
              About Us
            </Link>
            <Link href='/' className='py-2'>
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavLinks
