"use client"

import { useEffect, useRef, useState } from "react"

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const chars =
      "ネクサソンアイウエオカキクケコ01サシスセソタチツテト10ナニヌネノハヒフヘホ<>{}[]マミムメモヤユヨラリルレロワヲン"
    const charArray = chars.split("")
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)

    const drops: number[] = []
    const speeds: number[] = []
    const opacities: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
      speeds[i] = 0.5 + Math.random() * 0.5
      opacities[i] = 0.1 + Math.random() * 0.2
    }

    let animationId: number

    const draw = () => {
      ctx.fillStyle = "rgba(6, 12, 6, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        const brightness = 0.3 + opacities[i] * 0.7
        ctx.fillStyle = `rgba(0, 255, 136, ${opacities[i]})`

        // Head character is brighter
        if (y > 0) {
          ctx.fillStyle = `rgba(180, 255, 220, ${brightness})`
          ctx.fillText(text, x, y)

          // Trail effect
          ctx.fillStyle = `rgba(0, 255, 136, ${opacities[i] * 0.6})`
          ctx.fillText(charArray[Math.floor(Math.random() * charArray.length)], x, y - fontSize)
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
          opacities[i] = 0.1 + Math.random() * 0.2
        }
        drops[i] += speeds[i]
      }

      animationId = requestAnimationFrame(draw)
    }

    const throttledDraw = () => {
      draw()
    }

    const interval = setInterval(throttledDraw, 40)

    window.addEventListener("resize", resize)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
    )
  }

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40 z-0" />
}
