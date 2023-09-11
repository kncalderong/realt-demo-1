'use client'

import gsap from 'gsap'
import React, { useMemo } from 'react'

//gsap is a library that helps in develop of animations, further info here: https://greensock.com/react/

function useGsapContext(scope: React.RefObject<HTMLDivElement>) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope])
  return ctx
}

export default useGsapContext
