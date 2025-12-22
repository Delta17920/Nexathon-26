"use client"

import { useEffect, useRef, useState } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Detect low-end devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEnd = isMobile || navigator.hardwareConcurrency <= 2
    setIsLowPerformance(isLowEnd)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const chars = "01"
    const charArray = chars.split("")
    const fontSize = isLowEnd ? 20 : 16
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    const speeds: number[] = []
    const opacities: number[] = []

    // Reduce number of columns on low-end devices
    const activeColumns = isLowEnd ? Math.floor(columns * 0.5) : columns

    for (let i = 0; i < activeColumns; i++) {
      drops[i] = Math.random() * -100
      speeds[i] = 0.5 + Math.random() * 0.5
      opacities[i] = 0.1 + Math.random() * 0.2
    }

    let animationId: number
    let lastTime = 0
    const targetFPS = isLowEnd ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const draw = (currentTime: number) => {
      const deltaTime = currentTime - lastTime

      if (deltaTime < frameInterval) {
        animationId = requestAnimationFrame(draw)
        return
      }

      lastTime = currentTime - (deltaTime % frameInterval)

      ctx.fillStyle = "rgba(6, 12, 6, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize * (isLowEnd ? 2 : 1)
        const y = drops[i] * fontSize

        const brightness = 0.3 + opacities[i] * 0.7
        ctx.fillStyle = `rgba(0, 255, 136, ${opacities[i]})`

        // Head character is brighter
        if (y > 0) {
          ctx.fillStyle = `rgba(180, 255, 220, ${brightness})`
          ctx.fillText(text, x, y)

          // Trail effect (skip on low-end devices)
          if (!isLowEnd) {
            ctx.fillStyle = `rgba(0, 255, 136, ${opacities[i] * 0.6})`
            ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize)
          }
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
          opacities[i] = 0.1 + Math.random() * 0.2
        }
        drops[i] += speeds[i]
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    const handleResize = () => {
      resize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
    )
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 z-0"
      aria-hidden="true"
    />
  )
}
