'use client'
import { useEffect, useRef } from 'react'

export default function SkillBar({ nom, niveau }: { nom: string; niveau: number }) {
  const fillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = fillRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animated')
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-bar">
      <div className="skill-bar-header">
        <span>{nom}</span>
        <span>{niveau}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          ref={fillRef}
          className="skill-bar-fill"
          style={{ width: `${niveau}%` }}
        />
      </div>
    </div>
  )
}
