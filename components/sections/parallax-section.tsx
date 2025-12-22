"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
}

export default function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const parallaxOffset = scrolled * speed * 0.1

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={sectionRef} className={`relative ${className}`} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
