'use client'

import Link from 'next/link'
import { useState } from 'react'

type FancyButtonProps = {
  isExternalLink?: boolean
  color?: 'primary' | 'red'
  href: string
  text: string
}

const FancyButton3d = ({
  isExternalLink = false,
  color = 'primary',
  href = '',
  text = '',
}: FancyButtonProps) => {
  const [isButtonHover, setIsButtonHover] = useState(false)

  const buttonColors =
    color === 'primary'
      ? {
          first: 'border-realt-blue-550 text-realt-blue-550 bg-white',
          second: 'border-realt-blue-550 bg-realt-blue-550 text-white',
        }
      : {
          first: 'border-realt-red text-realt-red bg-white',
          second: 'border-realt-red bg-realt-red text-white',
        }

  return (
    <figure
      className='w-[150px] h-[50px] cursor-pointer lg:self-end'
      onMouseEnter={() => setIsButtonHover(true)}
      onMouseLeave={() => setIsButtonHover(false)}
    >
      <Link
        className='h-full duration-300 inline-block w-full'
        href={href}
        prefetch={isExternalLink ? false : true}
        style={
          isButtonHover
            ? {
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-90deg)',
              }
            : { transformStyle: 'preserve-3d' }
        }
      >
        <span
          className={`grid place-items-center w-full h-full absolute border-[5px] text-center ${buttonColors.first}`}
          style={{ transform: 'translate3d(0, 0, 25px)' }}
        >
          {text}
        </span>
        <span
          className={`grid place-items-center w-full h-full absolute border-[5px] text-center rotate-90 ${buttonColors.second}`}
          style={{ transform: 'rotateX(90deg) translate3d(0, 0, 25px)' }}
        >
          {text}
        </span>
      </Link>
    </figure>
  )
}

export default FancyButton3d
