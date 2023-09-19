'use client'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

/* =================================================================
This component adds smooth scrolling to the HTML element of the client page, when the page address is changed, the component is unmounted safely 
==================================================================== */

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)

    const updateScroll = (time: number) => {
      lenis.raf(time * 1000)
    }

    const ctx = gsap.context(() => {
      gsap.ticker.add(updateScroll)
      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      console.log('unmounting Lenis')
      ctx.revert()
      lenis.destroy()
      gsap.ticker.remove(updateScroll)
    }
  }, [])

  return <></>
}

export default SmoothScroll
