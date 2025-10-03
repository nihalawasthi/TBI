"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { cn } from "../lib/utils"

const DURATION = 1.5

export function CurtainIntro() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()

  const triggerOpen = useCallback(() => {
    if (open) return
    setOpen(true)
  }, [open])

  useEffect(() => {
    if (prefersReducedMotion) {
      navigate("/home")
      return
    }
    if (open) {
      const t = setTimeout(() => navigate("/home"), DURATION * 1000)
      return () => clearTimeout(t)
    }
  }, [open, prefersReducedMotion, navigate])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      triggerOpen()
    }
  }

  return (
    // Scoped theme for this page only
    <main
      className={cn("theme-theater relative w-screen h-dvh overflow-hidden bg-background text-foreground select-none")}
      aria-label="Theater curtain introduction"
    >
      {/* Top marquee bar */}
      <header className="pointer-events-none absolute top-0 inset-x-0 z-30 flex items-center justify-center py-4">
        <div className="rounded-full px-4 py-1 bg-secondary text-secondary-foreground shadow-sm border border-border">
          <span className="text-xs tracking-wider uppercase">TBI VIT Bhopal</span>
        </div>
      </header>

      {/* Center content */}
      {!open && <div className="absolute inset-0 z-20 grid place-items-center"></div>}

      {/* Interactive layer for keyboard and click */}
      <div
        role="button"
        aria-label="Open curtain"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={triggerOpen}
        className="absolute inset-0 z-40"
      />

      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open || prefersReducedMotion ? "-100%" : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : DURATION, ease: "easeInOut" }}
        className={cn(
          "absolute top-0 left-0 h-full w-1/2",
          "bg-[url(/curtain.jpg)] bg-cover shadow-2xl",
          "rounded-r-xl border-r border-black",
        )}
        aria-hidden="true"
      >
        {/* Gold tassel handle */}
        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <div className="size-10 rounded-full bg-[black] ring-2 ring-[black/20] shadow-md" />
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: open || prefersReducedMotion ? "100%" : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : DURATION, ease: "easeInOut" }}
        className={cn(
          "absolute top-0 right-0 h-full w-1/2",
          "bg-[url(/curtain.jpg)] bg-cover shadow-2xl",
          "rounded-l-xl border-l border-black",
        )}
        aria-hidden="true"
      >
        {/* Gold tassel handle */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <div className="size-10 rounded-full bg-[black] ring-2 ring-[black/20] shadow-md" />
        </div>
      </motion.div>

    </main>
  )
}

export default CurtainIntro

