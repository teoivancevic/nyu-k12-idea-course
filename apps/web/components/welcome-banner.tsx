"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function WelcomeBanner() {
  const [visible, setVisible] = useState(true)
  const [dismissing, setDismissing] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleDismiss() {
    setDismissing(true)
    setTimeout(() => setVisible(false), 300)
  }

  if (!visible || !mounted) return null

  return (
    <div className="fixed left-0 right-0 top-14 z-50 flex justify-center py-3 pointer-events-none">
      <div
        className={`welcome-pill pointer-events-auto relative inline-flex items-center gap-2 rounded-full bg-primary/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-primary shadow-sm transition-all duration-300 ${dismissing ? "opacity-0 scale-95" : ""}`}
      >
        <span>Welcome to the class! :)</span>
        <button
          onClick={handleDismiss}
          className="rounded-full p-0.5 transition-colors hover:bg-primary/10"
          aria-label="Dismiss"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  )
}
